'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../../../Components/navbar';
import Footer from '../../../../Components/footer';
import Link from 'next/link';
import Head from 'next/head';

interface Product {
    _id: string;
    name: string;
    description: string;
    keyFeatures?: string[];
    image1: string;
    image2: string;
    image3: string;
    navbarCategory: string;
    category: string;
    subcategory: string;
    slug: string;
}

interface NavbarCategoryDetails {
    _id: string;
    name: string;
    slug: string;
}

interface CategoryDetails {
    _id: string;
    name: string;
    slug: string;
}

interface SubCategoryDetails {
    _id: string;
    name: string;
    slug: string;
}

interface BreadcrumbProps {
    navbarCategory: {
        name: string;
        slug: string;
    } | null;
    category: {
        name: string;
        slug: string;
    } | null;
    subcategory: {
        name: string;
        slug: string;
    } | null;
}

interface SchemaData {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    image: string[];
    brand: {
        "@type": string;
        name: string;
    };
    offers: {
        "@type": string;
        availability: string;
    };
    category?: string;
    additionalProperty?: {
        "@type": string;
        name: string;
        value: string;
    }[];
}

const Breadcrumb = ({ navbarCategory, category, subcategory }: BreadcrumbProps) => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3">
                <ol className="flex items-center space-x-2 text-sm">
                    <li>
                        <Link href="/" className="text-gray-500 hover:text-red-600 transition-colors">
                            Home
                        </Link>
                    </li>
                    {navbarCategory && (
                        <>
                            <li><span className="text-gray-400 mx-2">›</span></li>
                            <li>
                                <Link
                                    href={`/${navbarCategory.slug}`}
                                    className="text-gray-500 hover:text-red-600 transition-colors"
                                >
                                    {navbarCategory.name}
                                </Link>
                            </li>
                        </>
                    )}
                    {category && (
                        <>
                            <li><span className="text-gray-400 mx-2">›</span></li>
                            <li>
                                <Link
                                    href={`/${navbarCategory?.slug}/${category.slug}`}
                                    className="text-gray-500 hover:text-red-600 transition-colors"
                                >
                                    {category.name}
                                </Link>
                            </li>
                        </>
                    )}
                    {subcategory && (
                        <>
                            <li><span className="text-gray-400 mx-2">›</span></li>
                            <li>
                                <span className="text-red-600 font-medium">
                                    {subcategory.name}
                                </span>
                            </li>
                        </>
                    )}
                </ol>
            </div>
        </nav>
    );
};

const ProductSEO = ({ product, navbarCategory, category, subcategory }: { 
    product: Product; 
    navbarCategory: NavbarCategoryDetails | null;
    category: CategoryDetails | null;
    subcategory: SubCategoryDetails | null;
}) => {
    const images = [product.image1, product.image2, product.image3].filter(Boolean);
    const title = `${product.name} | HikVision UAE`;
    
    // Create a more structured description that includes category context and key features
    const enhancedDescription = [
        product.description,
        `Category: ${category?.name || ''}`,
        `Type: ${subcategory?.name || ''}`,
        product.keyFeatures?.length ? `Features: ${product.keyFeatures.join(', ')}` : ''
    ].filter(Boolean).join('. ');
    
    // Truncate the description for meta tags while preserving complete sentences
    const truncatedDescription = `${enhancedDescription.substring(0, 155)}...`;

    // Create structured key features for schema
    const structuredFeatures = product.keyFeatures?.map(feature => ({
        "@type": "PropertyValue",
        "name": "Feature",
        "value": feature
    })) || [];

    const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://hikvisionuae.ae"
            },
            ...(navbarCategory ? [{
                "@type": "ListItem",
                "position": 2,
                "name": navbarCategory.name,
                "item": `https://hikvisionuae.ae/${navbarCategory.slug}`
            }] : []),
            ...(category ? [{
                "@type": "ListItem",
                "position": 3,
                "name": category.name,
                "item": `https://hikvisionuae.ae/${navbarCategory?.slug}/${category.slug}`
            }] : []),
            ...(subcategory ? [{
                "@type": "ListItem",
                "position": 4,
                "name": subcategory.name,
                "item": `https://hikvisionuae.ae/${navbarCategory?.slug}/${category?.slug}/${subcategory.slug}`
            }] : [])
        ]
    };

    const productSchema: SchemaData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: enhancedDescription, // Use full enhanced description for schema
        image: images,
        brand: {
            "@type": "Brand",
            name: "HikVision"
        },
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock"
        },
        category: `${navbarCategory?.name || ''} > ${category?.name || ''} > ${subcategory?.name || ''}`,
        additionalProperty: structuredFeatures
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={truncatedDescription} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={truncatedDescription} />
                <meta property="og:image" content={product.image1} />
                <meta property="og:type" content="product" />
                <meta property="og:site_name" content="HikVision UAE" />
                {product.keyFeatures?.map((feature, index) => (
                    <meta key={index} property="product:feature" content={feature} />
                ))}
                <link rel="canonical" href={`https://hikvisionuae.ae/${navbarCategory?.slug}/${category?.slug}/${subcategory?.slug}/${product.slug}`} />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
                />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
                />
            </Head>
        </>
    );
};

export default function ProductDetailsPage() {
    const params = useParams();
    const productSlug = params.productSlug as string;

    const [product, setProduct] = useState<Product | null>(null);
    const [navbarCategory, setNavbarCategory] = useState<NavbarCategoryDetails | null>(null);
    const [category, setCategory] = useState<CategoryDetails | null>(null);
    const [subcategory, setSubcategory] = useState<SubCategoryDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>('');

    useEffect(() => {
        const fetchProductAndDetails = async () => {
            try {
                // Fetch product details
                const productResponse = await fetch(`/api/products/slug/${productSlug}`);
                if (!productResponse.ok) {
                    throw new Error('Failed to fetch product');
                }
                const productData = await productResponse.json();
                setProduct(productData);
                setSelectedImage(productData.image1);

                // Fetch navbar category details using the slug from URL params
                const navbarResponse = await fetch(`/api/navbar-categories/${params.navbarCategory}`);
                if (!navbarResponse.ok) {
                    throw new Error('Failed to fetch navbar category');
                }
                const navbarData = await navbarResponse.json();
                setNavbarCategory({
                    _id: navbarData._id,
                    name: navbarData.name,
                    slug: navbarData.slug
                });

                // Fetch category details using the slug from URL params
                const categoryResponse = await fetch(`/api/categories/${params.categorySlug}`);
                if (!categoryResponse.ok) {
                    throw new Error('Failed to fetch category');
                }
                const categoryData = await categoryResponse.json();
                setCategory({
                    _id: categoryData._id,
                    name: categoryData.name,
                    slug: categoryData.slug
                });

                // Fetch subcategory details using the slug from URL params
                const subcategoryResponse = await fetch(`/api/subcategories/${params.subcategorySlug}`);
                if (!subcategoryResponse.ok) {
                    throw new Error('Failed to fetch subcategory');
                }
                const subcategoryData = await subcategoryResponse.json();
                setSubcategory({
                    _id: subcategoryData._id,
                    name: subcategoryData.name,
                    slug: subcategoryData.slug
                });

            } catch (error) {
                console.error('Error fetching details:', error);
                setError(error instanceof Error ? error.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        if (productSlug && params.navbarCategory && params.categorySlug && params.subcategorySlug) {
            fetchProductAndDetails();
        }
    }, [productSlug, params.navbarCategory, params.categorySlug, params.subcategorySlug]);

    console.log('State values:', {
        navbarCategory,
        category,
        subcategory,
        product
    });

    if (loading) {
        return (
            <div>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
                </div>
                <Footer />
            </div>
        );
    }

    if (error || !product) {
        return (
            <div>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-red-600">Error: {error || 'Product not found'}</div>
                </div>
                <Footer />
            </div>
        );
    }

    const breadcrumbProps: BreadcrumbProps = {
        navbarCategory: navbarCategory && {
            name: navbarCategory.name,
            slug: navbarCategory.slug
        },
        category: category && {
            name: category.name,
            slug: category.slug
        },
        subcategory: subcategory && {
            name: subcategory.name,
            slug: subcategory.slug
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {product && (
                <ProductSEO 
                    product={product} 
                    navbarCategory={navbarCategory}
                    category={category}
                    subcategory={subcategory}
                />
            )}
            <Navbar />
            <Breadcrumb {...breadcrumbProps} />
            <div className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Image Gallery Section - Enhanced */}
                            <div className="p-6 bg-gray-50">
                                <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-100 shadow-lg bg-white group">
                                    <img
                                        src={selectedImage}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-4 transition-all duration-500 transform hover:scale-110"
                                    />
                                    
                                    {/* Slider Navigation Arrows */}
                                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => {
                                                const images = [product.image1, product.image2, product.image3].filter(Boolean);
                                                const currentIndex = images.indexOf(selectedImage);
                                                const prevIndex = (currentIndex - 1 + images.length) % images.length;
                                                setSelectedImage(images[prevIndex]);
                                            }}
                                            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all text-gray-800 hover:text-red-600"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        
                                        <button
                                            onClick={() => {
                                                const images = [product.image1, product.image2, product.image3].filter(Boolean);
                                                const currentIndex = images.indexOf(selectedImage);
                                                const nextIndex = (currentIndex + 1) % images.length;
                                                setSelectedImage(images[nextIndex]);
                                            }}
                                            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all text-gray-800 hover:text-red-600"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    <button
                                        onClick={() => setSelectedImage(product.image1)}
                                        className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 
                                            ${selectedImage === product.image1
                                                ? 'ring-2 ring-red-500 shadow-lg scale-105'
                                                : 'hover:ring-2 hover:ring-red-300 hover:scale-105'}`}
                                    >
                                        <img
                                            src={product.image1}
                                            alt={`${product.name} 1`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                    {product.image2 && (
                                        <button
                                            onClick={() => setSelectedImage(product.image2)}
                                            className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 
                                                ${selectedImage === product.image2
                                                    ? 'ring-2 ring-red-500 shadow-lg scale-105'
                                                    : 'hover:ring-2 hover:ring-red-300 hover:scale-105'}`}
                                        >
                                            <img
                                                src={product.image2}
                                                alt={`${product.name} 2`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    )}
                                    {product.image3 && (
                                        <button
                                            onClick={() => setSelectedImage(product.image3)}
                                            className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 
                                                ${selectedImage === product.image3
                                                    ? 'ring-2 ring-red-500 shadow-lg scale-105'
                                                    : 'hover:ring-2 hover:ring-red-300 hover:scale-105'}`}
                                        >
                                            <img
                                                src={product.image3}
                                                alt={`${product.name} 3`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Product Details Section */}
                            <div className="p-6 lg:p-8">
                                <div className="space-y-6">
                                    <div>
                                        <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
                                        <p className="text-base text-gray-600 leading-relaxed">{product.description}</p>
                                    </div>

                                    <div className="space-y-4 py-6 border-y border-gray-100">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-sm font-medium text-gray-500 w-28">Navbar Category:</span>
                                            <Link
                                                href={`/${navbarCategory?.slug}`}
                                                className="text-indigo-600 hover:text-indigo-700 transition-colors text-sm"
                                            >
                                                {navbarCategory?.name || 'Loading...'}
                                            </Link>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <span className="text-sm font-medium text-gray-500 w-28">Category:</span>
                                            <Link
                                                href={`/${navbarCategory?.slug}/${category?.slug}`}
                                                className="text-emerald-600 hover:text-emerald-700 transition-colors text-sm"
                                            >
                                                {category?.name || 'Loading...'}
                                            </Link>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <span className="text-sm font-medium text-gray-500 w-28">Sub Category:</span>
                                            <Link
                                                href={`/${navbarCategory?.slug}/${category?.slug}/${subcategory?.slug}`}
                                                className="text-amber-600 hover:text-amber-700 transition-colors text-sm"
                                            >
                                                {subcategory?.name || 'Loading...'}
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <Link
                                            href="/Contact"
                                            className="group relative w-full inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white text-base font-medium rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
                                        >
                                            <svg
                                                className="w-5 h-5 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            Contact Us About This Product
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Features Card */}
                    {product.keyFeatures && product.keyFeatures.length > 0 && (
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
                            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                {product.keyFeatures.map((feature, index) => (
                                    <li key={index} className="text-gray-600">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
} 