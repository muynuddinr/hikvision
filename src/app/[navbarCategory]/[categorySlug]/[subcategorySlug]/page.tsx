'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../../Components/navbar';
import Footer from '../../../Components/footer';
import Link from 'next/link';

interface Product {
    _id: string;
    name: string;
    description: string;
    image1: string;
    image2?: string;
    image3?: string;
    navbarCategory: {
        name: string;
        slug: string;
    };
    category: {
        name: string;
        slug: string;
    };
    subcategory: {
        name: string;
        slug: string;
    };
    slug: string;
}

interface SubCategory {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    image?: string;
}

interface BreadcrumbProps {
    navbarCategory: {
        name: string;
        slug: string;
    };
    category: {
        name: string;
        slug: string;
    };
    subcategory: {
        name: string;
        slug: string;
    };
}

const Breadcrumb = ({ navbarCategory, category, subcategory }: BreadcrumbProps) => {
    return (
        <nav className="bg-gradient-to-r from-gray-50 to-white border-b">
            <div className="container mx-auto px-4 py-4">
                <ol className="flex items-center space-x-2 text-sm">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center"
                        >
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li><span className="text-gray-400 mx-2">›</span></li>
                    <li>
                        <Link
                            href={`/${navbarCategory.slug}`}
                            className="text-gray-500 hover:text-red-600 transition-colors"
                        >
                            {navbarCategory.name}
                        </Link>
                    </li>
                    <li><span className="text-gray-400 mx-2">›</span></li>
                    <li>
                        <Link
                            href={`/${navbarCategory.slug}/${category.slug}`}
                            className="text-gray-500 hover:text-red-600 transition-colors"
                        >
                            {category.name}
                        </Link>
                    </li>
                    <li><span className="text-gray-400 mx-2">›</span></li>
                    <li>
                        <span className="text-red-600 font-medium">
                            {subcategory.name || 'Loading...'}
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
};

// Add Schema markup component
const SubcategorySchema = ({ 
    subcategory, 
    products, 
    navbarCategoryName, 
    categoryName 
}: { 
    subcategory: SubCategory | null;
    products: Product[];
    navbarCategoryName: { name: string; _id: string } | null;
    categoryName: { name: string; _id: string } | null;
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `${subcategory?.name} Solutions - HikvisionUAE.ae`,
        "description": subcategory?.description || `Explore our range of ${subcategory?.name} solutions from Hikvision`,
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://hikvisionuae.ae"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": navbarCategoryName?.name,
                    "item": `https://hikvisionuae.ae/${navbarCategoryName?.name?.toLowerCase()}`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": categoryName?.name,
                    "item": `https://hikvisionuae.ae/${navbarCategoryName?.name?.toLowerCase()}/${categoryName?.name?.toLowerCase()}`
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": subcategory?.name,
                    "item": `https://hikvisionuae.ae/${navbarCategoryName?.name?.toLowerCase()}/${categoryName?.name?.toLowerCase()}/${subcategory?.name?.toLowerCase()}`
                }
            ]
        },
        "offers": {
            "@type": "ItemList",
            "itemListElement": products.map((product, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "Product",
                    "name": product.name,
                    "description": product.description,
                    "image": product.image1,
                    "url": `https://hikvisionuae.ae/${product.navbarCategory.slug}/${product.category.slug}/${product.subcategory.slug}/${product.slug}`
                }
            }))
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default function SubCategoryPage() {
    const params = useParams();
    const navbarCategory = params.navbarCategory as string;
    const categorySlug = params.categorySlug as string;
    const subcategorySlug = params.subcategorySlug as string;

    const [products, setProducts] = useState<Product[]>([]);
    const [subcategory, setSubcategory] = useState<SubCategory | null>(null);
    const [categoryName, setCategoryName] = useState<{ name: string; _id: string } | null>(null);
    const [navbarCategoryName, setNavbarCategoryName] = useState<{ name: string; _id: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching data with params:', {
                    navbarCategory,
                    categorySlug,
                    subcategorySlug
                });

                const navbarResponse = await fetch(`/api/navbar-categories/${navbarCategory}`);
                console.log('Navbar Response:', await navbarResponse.clone().json());
                if (!navbarResponse.ok) throw new Error('Failed to fetch navbar category');
                const navbarData = await navbarResponse.json();
                setNavbarCategoryName(navbarData);

                // Fetch category details
                const categoryResponse = await fetch(`/api/categories/${categorySlug}`);
                if (!categoryResponse.ok) throw new Error('Failed to fetch category');
                const categoryData = await categoryResponse.json();
                setCategoryName(categoryData);

                // Fetch subcategory details
                const subcategoryResponse = await fetch(`/api/subcategories/${subcategorySlug}`);
                if (!subcategoryResponse.ok) throw new Error('Failed to fetch subcategory');
                const subcategoryData = await subcategoryResponse.json();
                setSubcategory(subcategoryData);

                // Fetch products
                const productsResponse = await fetch(`/api/products?subcategory=${subcategoryData._id}`, {
                    cache: 'no-store'
                });
                if (!productsResponse.ok) throw new Error('Failed to fetch products');
                const productsData = await productsResponse.json();
                setProducts(productsData);
            } catch (error) {
                console.error('Detailed Error:', error);
                setError(error instanceof Error ? error.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        if (subcategorySlug) {
            fetchData();
        }
    }, [subcategorySlug, categorySlug, navbarCategory]);

    if (loading) {
        return (
            <div>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-red-600"></div>
                        <p className="text-gray-600 animate-pulse">Loading products...</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-red-600">Error: {error}</div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SubcategorySchema 
                subcategory={subcategory}
                products={products}
                navbarCategoryName={navbarCategoryName}
                categoryName={categoryName}
            />
            <Navbar />
            <Breadcrumb
                navbarCategory={{
                    name: navbarCategoryName?.name || '',
                    slug: navbarCategory
                }}
                category={{
                    name: categoryName?.name || '',
                    slug: categorySlug
                }}
                subcategory={{
                    name: subcategory?.name || '',
                    slug: subcategorySlug
                }}
            />
            <div className="flex-grow">
                {/* Header Section */}
                <div className="text-center mb-8">
                    {/* White Hero Section with Two-Tone Text */}
                    <div className="w-full bg-white py-8 border-b border-gray-100">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                            <span className="text-black">Hikvision </span>
                            <span className="text-red-600">
                                {subcategory?.name} Solutions
                            </span>
                        </h1>
                    </div>

                    {/* Full Width Red Description Section */}
                    {subcategory?.description && (
                        <div className="w-full bg-gradient-to-r from-red-700 to-red-800">
                            <div className="w-full mx-auto py-8 px-4">
                                <div className="w-full px-4">
                                    <p className="text-base sm:text-lg text-white leading-relaxed font-light tracking-wide">
                                        {subcategory.description}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Decorative bottom line */}
                            <div className="h-0.5 bg-gradient-to-r from-red-500/20 via-white/20 to-red-500/20"></div>
                        </div>
                    )}

                    {/* Decorative divider */}
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product._id}
                                href={`/${navbarCategory}/${categorySlug}/${subcategorySlug}/${product.slug}`}
                                className="group"
                            >
                                <div className="group relative">
                                    {/* Card */}
                                    <div className="bg-white rounded-2xl p-6 transition-all duration-300 
                                        shadow-[0_0_20px_rgba(0,0,0,0.05)] 
                                        hover:shadow-[0_0_25px_rgba(0,0,0,0.2)]
                                        border border-slate-100 hover:border-red-100">
                                        
                                        {/* Image Wrapper */}
                                        <div className="relative h-48 mb-6 bg-gradient-to-b from-red-50/50 to-transparent rounded-xl p-4">
                                            <div className="absolute inset-0 bg-red-50/30 rounded-xl transform rotate-3 scale-95 transition-transform duration-300 group-hover:rotate-6"></div>
                                            <div className="absolute inset-0 bg-white/80 rounded-xl transform -rotate-3 scale-95 transition-transform duration-300 group-hover:-rotate-6"></div>
                                            <img
                                                src={product.image1.startsWith('http') ? product.image1 : `${process.env.NEXT_PUBLIC_API_URL}${product.image1}`}
                                                alt={product.name}
                                                className="relative h-full w-full object-contain p-4 transform transition-transform duration-300 group-hover:scale-110"
                                                onError={(e) => {
                                                    console.error('Image load error:', product.image1);
                                                    e.currentTarget.src = '/placeholder.jpg';
                                                }}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="relative">
                                            <h2 className="text-xl font-semibold text-slate-800 mb-3 text-center">
                                                {product.name}
                                            </h2>
                                            
                                            <p className="text-gray-600 text-sm mb-4 text-center line-clamp-2">
                                                {product.description}
                                            </p>
                                            
                                            {/* Button */}
                                            <div className="flex items-center justify-center space-x-2 text-red-600">
                                                <span className="relative">
                                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                                    <span className="font-medium">View Details</span>
                                                </span>
                                                <svg 
                                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round" 
                                                        strokeWidth={2} 
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                    />
                                                </svg>
                                            </div>

                                            {/* Corner Accent */}
                                            <div className="absolute -top-2 -right-2 w-8 h-8">
                                                <div className="absolute inset-0 transform rotate-45 translate-x-4 -translate-y-4 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-300"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Effects */}
                                    <div className="absolute inset-0 -z-10 bg-red-600 rounded-2xl opacity-0 group-hover:opacity-5 transform scale-90 group-hover:scale-100 transition-all duration-300"></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}