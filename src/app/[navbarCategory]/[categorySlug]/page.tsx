"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import Image from "next/image";
import Head from "next/head";

interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
  description?: string;
  image?: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
}

interface BreadcrumbProps {
  navbarCategory: string;
  category: string | null;
}

interface SchemaListItem {
  "@type": string;
  "@id": string;
  name: string;
  description?: string;
  position: number;
  url: string;
  image?: string;
}

interface SchemaData {
  "@context": string;
  "@type": string;
  name: string;
  description?: string;
  url: string;
  itemListElement?: SchemaListItem[];
}

const Breadcrumb = ({ navbarCategory, category }: BreadcrumbProps) => {
  return (
    <nav className="bg-gradient-to-r from-gray-50 to-white border-b">
      <div className="container mx-auto px-4 py-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              href="/"
              className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <span className="text-gray-400 mx-2">›</span>
          </li>
          <li>
            <Link
              href={`/${navbarCategory}`}
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              {navbarCategory}
            </Link>
          </li>
          <li>
            <span className="text-gray-400 mx-2">›</span>
          </li>
          <li>
            <span className="text-red-600 font-medium">
              {category || "Loading..."}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

const generateSchema = (
  category: Category | null,
  subcategories: SubCategory[],
  navbarCategory: string
): SchemaData => {
  const baseUrl = "https://hikvisionuae.ae";

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category?.name || ""} Solutions - Hikvision UAE`,
    description:
      category?.description ||
      `Explore Hikvision ${category?.name} solutions and products in UAE`,
    url: `${baseUrl}/${navbarCategory}/${category?.slug}`,
    itemListElement: subcategories.map((subcat, index) => ({
      "@type": "Product",
      "@id": `${baseUrl}/${navbarCategory}/${category?.slug}/${subcat.slug}`,
      name: subcat.name,
      description: subcat.description,
      position: index + 1,
      url: `${baseUrl}/${navbarCategory}/${category?.slug}/${subcat.slug}`,
      ...(subcat.image && { image: subcat.image }),
    })),
  };
};

const CategorySEO = ({ category, navbarCategory, subcategories }: { 
  category: Category | null;
  navbarCategory: string;
  subcategories: SubCategory[];
}) => {
  const baseUrl = "https://hikvisionuae.ae";
  const pageUrl = `${baseUrl}/${navbarCategory}/${category?.slug}`;
  
  // Create enhanced meta description
  const metaDescription = category?.description || 
    `Explore Hikvision ${category?.name} solutions and products in UAE. Professional security systems and surveillance solutions.`;

  // Create breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": navbarCategory,
        "item": `${baseUrl}/${navbarCategory}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category?.name || "",
        "item": pageUrl
      }
    ]
  };

  // Create collection page schema (existing generateSchema function)
  const collectionSchema = generateSchema(category, subcategories, navbarCategory);

  return (
    <>
      <Head>
        <title>{`${category?.name || ""} Solutions - Hikvision UAE`}</title>
        <meta name="description" content={metaDescription} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${category?.name || ""} Solutions - Hikvision UAE`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${category?.name || ""} Solutions - Hikvision UAE`} />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Keywords based on category and subcategories */}
        <meta name="keywords" content={`
          Hikvision ${category?.name}, 
          ${category?.name} solutions UAE, 
          ${subcategories.map(sub => sub.name).join(', ')},
          security systems Dubai,
          Hikvision UAE,
          surveillance solutions Dubai
        `} />
      </Head>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema)
        }}
      />
    </>
  );
};

export default function CategoryPage() {
  const params = useParams();
  const navbarCategory = params.navbarCategory as string;
  const categorySlug = params.categorySlug as string;

  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);

      try {
        // Fetch category details
        const categoryResponse = await fetch(
          `/api/categories/${categorySlug}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!categoryResponse.ok) {
          throw new Error(
            `Failed to fetch category (${categoryResponse.status})`
          );
        }

        const categoryData = await categoryResponse.json();
        setCategory(categoryData);

        // Fetch subcategories
        const subcategoriesResponse = await fetch(
          `/api/subcategories?category=${categoryData._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!subcategoriesResponse.ok) {
          throw new Error(
            `Failed to fetch subcategories (${subcategoriesResponse.status})`
          );
        }

        const subcategoriesData = await subcategoriesResponse.json();
        setSubcategories(subcategoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred"
        );
        setCategory(null);
        setSubcategories([]);
      }
    };

    if (categorySlug && navbarCategory) {
      fetchData();
    }
  }, [categorySlug, navbarCategory]);

  if (error) {
    return (
      <div>
        <Navbar />
        <Breadcrumb navbarCategory={navbarCategory} category={null} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-red-600 text-xl mb-4">Error Loading Data</div>
            <p className="text-gray-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <CategorySEO 
        category={category}
        navbarCategory={navbarCategory}
        subcategories={subcategories}
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <Breadcrumb
          navbarCategory={navbarCategory}
          category={category?.name || null}
        />
        <div className="flex-grow">
          {/* Header Section */}
          <div className="text-center mb-8">
            {/* White Hero Section with Two-Tone Text */}
            <div className="w-full bg-white py-8 border-b border-gray-100">
              <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                <span className="text-black">Hikvision </span>
                <span className="text-red-600">{category?.name} Solutions</span>
              </h1>
            </div>

            {/* Full Width Red Description Section */}
            {category?.description && (
              <div className="w-full bg-gradient-to-r from-red-700 to-red-800">
                <div className="w-full mx-auto py-8 px-4">
                  <div className="w-full px-4">
                    <p className="text-base sm:text-lg text-white leading-relaxed font-light tracking-wide">
                      {category.description}
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

          {/* Subcategories Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {subcategories.map((subcategory) => (
                <Link
                  href={`/${navbarCategory}/${categorySlug}/${subcategory.slug}`}
                  key={subcategory._id}
                  className="group"
                >
                  <div className="group relative">
                    {/* Card */}
                    <div
                      className="bg-white rounded-2xl p-6 transition-all duration-300 
                                            shadow-[0_0_20px_rgba(0,0,0,0.05)] 
                                            hover:shadow-[0_0_25px_rgba(0,0,0,0.2)]
                                            border border-slate-100 hover:border-red-100"
                    >
                      {/* Image Wrapper */}
                      <div className="relative h-48 mb-6 bg-gradient-to-b from-red-50/50 to-transparent rounded-xl p-4">
                        <div className="absolute inset-0 bg-red-50/30 rounded-xl transform rotate-3 scale-95 transition-transform duration-300 group-hover:rotate-6"></div>
                        <div className="absolute inset-0 bg-white/80 rounded-xl transform -rotate-3 scale-95 transition-transform duration-300 group-hover:-rotate-6"></div>
                        {subcategory.image ? (
                          <img
                            src={subcategory.image}
                            alt={subcategory.name}
                            width={500}
                            height={384}
                            className="relative h-full w-full object-contain p-4 transform transition-transform duration-300 group-hover:scale-110"
                          />
                        ) : (
                          // <Image
                          //     src={subcategory.image || '/placeholder.jpg'}
                          //     alt={subcategory.name}
                          //     width={500}
                          //     height={384}
                          //     className="relative h-full w-full object-contain p-4 transform transition-transform duration-300 group-hover:scale-110"
                          //     loading="eager"
                          //     priority
                          //     onError={(e) => {
                          //         const target = e.target as HTMLImageElement;
                          //         target.src = '/placeholder.jpg';
                          //     }}
                          // />
                          <div className="relative h-full w-full flex items-center justify-center">
                            <div className="text-2xl font-bold text-red-600/80">
                              {subcategory.name}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h2 className="text-xl font-semibold text-slate-800 mb-3 text-center">
                          {subcategory.name}
                        </h2>

                        {subcategory.description && (
                          <p className="text-gray-600 text-sm mb-4 text-center line-clamp-2">
                            {subcategory.description}
                          </p>
                        )}

                        {/* Button */}
                        <div className="flex items-center justify-center space-x-2 text-red-600">
                          <span className="relative">
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            <span className="font-medium">Learn More</span>
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
    </>
  );
}
