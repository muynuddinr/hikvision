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
    image4: string;
    navbarCategory: string;
    category: string;
    subcategory: string;
    slug: string;
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string;
    faqSchema?: {
        question: string;
        answer: string;
    }[];
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
    alternateName?: string[];
    mainEntityOfPage?: {
        "@type": string;
        "@id": string;
    };
    identifier?: any;
    brand: {
        "@type": string;
        name: string;
    };
    offers: {
        "@type": string;
        availability: string;
        price: string;
        priceCurrency: string;
        priceValidUntil: string;
        url: string;
        itemCondition?: string;
        seller: {
            "@type": string;
            name: string;
            "@id"?: string;
            url?: string;
            logo?: {
                "@type": string;
                url: string;
            };
        };
    };
    category?: string;
    additionalProperty?: {
        "@type": string;
        name: string;
        value: string;
    }[];
    aggregateRating?: {
        "@type": string;
        ratingValue: string;
        reviewCount: string;
    };
    review?: {
        "@type": string;
        reviewRating: {
            "@type": string;
            ratingValue: string;
            bestRating: string;
        };
        author: {
            "@type": string;
            name: string;
        };
    };
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
    const images = [product.image1, product.image2, product.image3, product.image4].filter(Boolean);
    const title = product.seoTitle || `${product.name} | HikVision UAE`;
    
    const enhancedDescription = product.seoDescription || [
        product.description,
        `Category: ${category?.name || ''}`,
        `Type: ${subcategory?.name || ''}`,
        product.keyFeatures?.length ? `Features: ${product.keyFeatures.join(', ')}` : ''
    ].filter(Boolean).join('. ');
    
    const truncatedDescription = `${enhancedDescription.substring(0, 155)}...`;

    const faqSchema = product.faqSchema ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": product.faqSchema.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

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
                "item": {
                    "@id": "https://hikvisionuae.ae",
                    "name": "Home"
                }
            },
            ...(navbarCategory ? [{
                "@type": "ListItem",
                "position": 2,
                "name": navbarCategory.name,
                "item": {
                    "@id": `https://hikvisionuae.ae/${navbarCategory.slug}`,
                    "name": navbarCategory.name
                }
            }] : []),
            ...(category ? [{
                "@type": "ListItem",
                "position": 3,
                "name": category.name,
                "item": {
                    "@id": `https://hikvisionuae.ae/${navbarCategory?.slug}/${category.slug}`,
                    "name": category.name
                }
            }] : []),
            ...(subcategory ? [{
                "@type": "ListItem",
                "position": 4,
                "name": subcategory.name,
                "item": {
                    "@id": `https://hikvisionuae.ae/${navbarCategory?.slug}/${category?.slug}/${subcategory.slug}`,
                    "name": subcategory.name
                }
            }] : [])
        ]
    };

    // Generate alternate names for better search matching
    const alternateNames = [
        product.name,
        `${product.name} UAE`,
        `${product.name} Dubai`,
        `${product.name} HikVision`,
        `HikVision ${product.name}`,
        `${product.name} ${category?.name || ''}`,
        `${product.name} ${subcategory?.name || ''}`,
    ].filter(Boolean);

    const productSchema: SchemaData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": enhancedDescription,
        "image": images,
        "alternateName": alternateNames,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://hikvisionuae.ae/${navbarCategory?.slug}/${category?.slug}/${subcategory?.slug}/${product.slug}`
        },
        "identifier": [
            {
                "@type": "PropertyValue",
                "propertyID": "sku",
                "value": product.slug
            },
            {
                "@type": "PropertyValue",
                "propertyID": "mpn",
                "value": product._id
            }
        ],
        "brand": {
            "@type": "Brand",
            "name": "HikVision"
        },
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "0",
            "priceCurrency": "AED",
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
            "url": `https://hikvisionuae.ae/${navbarCategory?.slug}/${category?.slug}/${subcategory?.slug}/${product.slug}`,
            // Remove itemCondition as it's not in the type definition
            "seller": {
                "@type": "Organization",
                "name": "HikVision UAE"
            }
        },
        "category": `${navbarCategory?.name || ''} > ${category?.name || ''} > ${subcategory?.name || ''}`,
        "additionalProperty": structuredFeatures,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "10",

        },
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "author": {
                "@type": "Person",
                "name": "HikVision UAE Team"
            }
        }
    };

    // Add product metadata schema for better search indexing
    const productMetadata = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".product-description"]
        },
        "name": title,
        "description": truncatedDescription,
        "keywords": product.seoKeywords || `${product.name}, HikVision, security camera, surveillance, UAE, Dubai, ${category?.name || ''}, ${subcategory?.name || ''}`,
        "significantLink": `https://hikvisionuae.ae/${navbarCategory?.slug}/${category?.slug}/${subcategory?.slug}/${product.slug}`
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={truncatedDescription} />
                <meta name="keywords" content={product.seoKeywords} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={truncatedDescription} />
                <meta property="og:image" content={product.image1} />
                <meta property="og:type" content="product" />
                <meta property="og:site_name" content="HikVision UAE" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={truncatedDescription} />
                <meta name="twitter:image" content={product.image1} />
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
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(productMetadata) }}
                />
                {faqSchema && (
                    <script 
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                    />
                )}
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
            
            {/* Product Details Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-w-1 aspect-h-1 w-full">
                            <img
                                src={selectedImage}
                                alt={product?.name}
                                className="object-contain w-full h-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {[product?.image1, product?.image2, product?.image3, product?.image4]
                                .filter(Boolean)
                                .map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(image)}
                                        className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden border-2 
                                            ${selectedImage === image ? 'border-red-600' : 'border-transparent'}`}
                                    >
                                        <img
                                            src={image}
                                            alt={`${product?.name} view ${index + 1}`}
                                            className="object-cover w-full h-full"
                                        />
                                    </button>
                                ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">{product?.name}</h1>
                        <p className="text-gray-600">{product?.description}</p>

                        {product?.keyFeatures && product.keyFeatures.length > 0 && (
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
                                <ul className="space-y-2">
                                    {product.keyFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-red-600 mr-2">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Contact Section */}
                        <div className="mt-8 space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Interested in this product?</h3>
                            <p className="text-gray-600">Contact our sales team for pricing and availability.</p>
                            <div className="flex space-x-4">
                                <a
                                    href="tel:+971509893134"
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                                >
                                    Call Now
                                </a>
                                <Link
                                    href="/Contact"
                                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    Send Inquiry
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}