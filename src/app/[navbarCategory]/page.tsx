'use client'

import { useEffect, useState } from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'


interface NavbarCategory {
    _id: string;
    name: string;
    slug: string;
    order: number;
    isActive: boolean;
    title?: string;
    description?: string;
}

interface Category {
    _id: string;
    name: string;
    slug: string;
    navbarCategory: string;
    description?: string;
    image?: string;
}

// Add Breadcrumb component
const Breadcrumb = ({ category }: { category: NavbarCategory | null }) => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3">
                <ol className="flex items-center space-x-2 text-sm">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-500 hover:text-red-600 transition-colors"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <span className="text-gray-400 mx-2">›</span>
                    </li>
                    <li>
                        <span className="text-red-600 font-medium">
                            {category?.name || 'Loading...'}
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
};

export default function NavbarCategoryPage() {
    const params = useParams()
    const navbarCategory = params.navbarCategory as string
    const [categories, setCategories] = useState<Category[]>([]);
    const [navbarCategoryDetails, setNavbarCategory] = useState<NavbarCategory | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const navbarResponse = await fetch(`/api/navbar-categories/slug/${navbarCategory}`);
                if (!navbarResponse.ok) {
                    notFound(); // This will trigger the 404 page
                    return;
                }
                const navbarData = await navbarResponse.json();
                setNavbarCategory(navbarData);

                const categoriesResponse = await fetch(`/api/categories?navbarCategory=${navbarData._id}`);
                if (!categoriesResponse.ok) {
                    notFound();
                    return;
                }
                const categoriesData = await categoriesResponse.json();
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching data:', error);
                notFound(); // This will also trigger the 404 page for any errors
            } finally {
                setLoading(false);
            }

        };

        fetchData();
    }, [navbarCategory]);

    if (loading) {
        return (
            <div>
                <Navbar />
                <Breadcrumb category={null} />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-red-600"></div>
                        <p className="text-gray-600 animate-pulse">Loading categories...</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <Breadcrumb category={navbarCategoryDetails} />
            <div className="flex-grow">
                {/* Header Section */}
                <div className="text-center mb-8">
                    {/* White Hero Section with Two-Tone Text */}
                    <div className="w-full bg-white py-8 border-b border-gray-100">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                            <span className="text-black">Hikvision </span>
                            <span className="text-red-600">
                                {navbarCategoryDetails?.title || navbarCategoryDetails?.name} Solutions
                            </span>
                        </h1>

                    </div>

                    {/* Full Width Red Description Section */}
                    <div className="w-full bg-gradient-to-r from-red-700 to-red-800">
                        <div className="w-full mx-auto py-8 px-8 sm:px-12">
                            {navbarCategoryDetails?.description && (
                                <div className="max-w-[90%] mx-auto">
                                    <p className="text-xl text-white leading-relaxed font-light tracking-wide">
                                        {navbarCategoryDetails.description}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Decorative bottom line */}
                        <div className="h-0.5 bg-gradient-to-r from-red-500/20 via-white/20 to-red-500/20"></div>
                    </div>

                    {/* Decorative divider */}
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
                    </div>
                </div>

                {/* Categories Grid Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category) => (
                            <Link
                                href={`/${navbarCategory}/${category.slug}`}
                                key={category._id}
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
                                            {category.image ? (
                                                <img
                                                    src={category.image}
                                                    alt={category.name}
                                                    className="relative h-full w-full object-contain p-4 transform transition-transform duration-300 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="relative h-full w-full flex items-center justify-center">
                                                    <div className="text-2xl font-bold text-red-600/80">{category.name}</div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="relative">
                                            <h2 className="text-xl font-semibold text-slate-800 mb-3 text-center">
                                                {category.name}
                                            </h2>

                                            {category.description && (
                                                <p className="text-gray-600 text-sm mb-4 text-center line-clamp-2">
                                                    {category.description}
                                                </p>
                                            )}

                                            {/* Button */}
                                            <div className="flex items-center justify-center space-x-2 text-red-600">
                                                <span className="relative">
                                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                                    <span className="font-medium">View Products</span>
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