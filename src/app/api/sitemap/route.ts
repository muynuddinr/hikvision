import { NextResponse } from 'next/server';

// Function to get all products from the database
async function getAllProducts() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            console.error('Failed to fetch products:', response.status, response.statusText);
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log('Products fetched successfully:', data.length);
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Function to get all categories from the database
async function getAllCategories() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
            cache: 'no-store'
        });
        if (!response.ok) throw new Error('Failed to fetch categories');
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

// Function to get all subcategories from the database
async function getAllSubcategories() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/subcategories`, {
            cache: 'no-store'
        });
        if (!response.ok) throw new Error('Failed to fetch subcategories');
        return await response.json();
    } catch (error) {
        console.error('Error fetching subcategories:', error);
        return [];
    }
}

// Function to get all navbar categories from the database
async function getAllNavbarCategories() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/navbar-categories`, {
            cache: 'no-store'
        });
        if (!response.ok) throw new Error('Failed to fetch navbar categories');
        return await response.json();
    } catch (error) {
        console.error('Error fetching navbar categories:', error);
        return [];
    }
}

// Function to generate sitemap XML
function generateSitemapXml(urls: Array<{ loc: string; changefreq: string; priority: number }>) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
    return xml;
}

// Function to validate URL
function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

export async function GET() {
    try {
        // Fetch all data
        const [products, categories, subcategories, navbarCategories] = await Promise.all([
            getAllProducts(),
            getAllCategories(),
            getAllSubcategories(),
            getAllNavbarCategories()
        ]);

        console.log('Raw data received:', {
            productsCount: products.length,
            categoriesCount: categories.length,
            subcategoriesCount: subcategories.length,
            navbarCategoriesCount: navbarCategories.length
        });

        // Static URLs
        const staticUrls = [
            { loc: 'https://hikvisionuae.ae', changefreq: 'daily', priority: 1.0 },
            { loc: 'https://hikvisionuae.ae/About', changefreq: 'monthly', priority: 0.8 },
            { loc: 'https://hikvisionuae.ae/Contact', changefreq: 'monthly', priority: 0.8 },
            { loc: 'https://hikvisionuae.ae/Acusense', changefreq: 'weekly', priority: 0.9 },
            { loc: 'https://hikvisionuae.ae/Colorvu', changefreq: 'weekly', priority: 0.9 },
            { loc: 'https://hikvisionuae.ae/Darkfighter', changefreq: 'weekly', priority: 0.9 },
            { loc: 'https://hikvisionuae.ae/Tandemvu', changefreq: 'weekly', priority: 0.9 },
            { loc: 'https://hikvisionuae.ae/Manufacturing', changefreq: 'weekly', priority: 0.8 },
            { loc: 'https://hikvisionuae.ae/Healthcare', changefreq: 'weekly', priority: 0.8 },
            { loc: 'https://hikvisionuae.ae/Retail', changefreq: 'weekly', priority: 0.8 },
            { loc: 'https://hikvisionuae.ae/Education', changefreq: 'weekly', priority: 0.8 },
            { loc: 'https://hikvisionuae.ae/Privacy', changefreq: 'monthly', priority: 0.5 },
            { loc: 'https://hikvisionuae.ae/Terms', changefreq: 'monthly', priority: 0.5 },
            { loc: 'https://hikvisionuae.ae/Cookies', changefreq: 'monthly', priority: 0.5 }
        ];

        // Dynamic URLs from navbar categories
        const navbarCategoryUrls = navbarCategories
            .filter((category: any) => category?.slug)
            .map((category: any) => ({
                loc: `https://hikvisionuae.ae/${category.slug}`,
                changefreq: 'weekly',
                priority: 0.9
            }));

        // Dynamic URLs from categories
        const categoryUrls = categories
            .filter((category: any) => category?.slug)
            .map((category: any) => {
                const navbarCategory = navbarCategories.find((nc: any) => nc._id === category.navbarCategory);
                if (!navbarCategory?.slug) return null;
                return {
                    loc: `https://hikvisionuae.ae/${navbarCategory.slug}/${category.slug}`,
                    changefreq: 'weekly',
                    priority: 0.8
                };
            })
            .filter(Boolean);

        // Dynamic URLs from subcategories
        const subcategoryUrls = subcategories
            .filter((subcategory: any) => subcategory?.slug)
            .map((subcategory: any) => {
                const category = categories.find((c: any) => c._id === subcategory.category);
                if (!category?.slug) return null;
                const navbarCategory = navbarCategories.find((nc: any) => nc._id === category.navbarCategory);
                if (!navbarCategory?.slug) return null;
                return {
                    loc: `https://hikvisionuae.ae/${navbarCategory.slug}/${category.slug}/${subcategory.slug}`,
                    changefreq: 'weekly',
                    priority: 0.7
                };
            })
            .filter(Boolean);

        // Enhanced product URLs with variations
        console.log('Starting product URL generation with products:', products.length);
        
        const productUrls = products
            .filter((product: any) => {
                console.log('Processing product:', {
                    id: product._id,
                    slug: product.slug,
                    subcategory: product.subcategory
                });
                
                if (!product?.slug) {
                    console.log('Product missing slug:', product);
                    return false;
                }
                return true;
            })
            .map((product: any) => {
                try {
                    console.log('Finding relationships for product:', product.slug);
                    
                    const subcategory = subcategories.find((sc: any) => sc._id === product.subcategory);
                    console.log('Found subcategory:', subcategory ? {
                        id: subcategory._id,
                        slug: subcategory.slug,
                        category: subcategory.category
                    } : 'Not found');
                    
                    if (!subcategory?.slug) {
                        console.log('Subcategory not found for product:', product.slug);
                        return null;
                    }

                    const category = categories.find((c: any) => c._id === subcategory.category);
                    console.log('Found category:', category ? {
                        id: category._id,
                        slug: category.slug,
                        navbarCategory: category.navbarCategory
                    } : 'Not found');
                    
                    if (!category?.slug) {
                        console.log('Category not found for subcategory:', subcategory.slug);
                        return null;
                    }

                    const navbarCategory = navbarCategories.find((nc: any) => nc._id === category.navbarCategory);
                    console.log('Found navbar category:', navbarCategory ? {
                        id: navbarCategory._id,
                        slug: navbarCategory.slug
                    } : 'Not found');
                    
                    if (!navbarCategory?.slug) {
                        console.log('Navbar category not found for category:', category.slug);
                        return null;
                    }

                    // Generate the product URL
                    const productUrl = {
                        loc: `https://hikvisionuae.ae/${navbarCategory.slug}/${category.slug}/${subcategory.slug}/${product.slug}`,
                        changefreq: 'weekly',
                        priority: 0.6
                    };
                    
                    console.log('Generated product URL:', productUrl);
                    return productUrl;
                } catch (error) {
                    console.error('Error generating URL for product:', product.slug, error);
                    return null;
                }
            })
            .filter(Boolean);

        console.log('Product URLs generated:', productUrls.length);
        if (productUrls.length === 0) {
            console.log('No product URLs were generated. Products data:', products);
        }

        // Combine all URLs and filter out invalid ones
        const allUrls = [
            ...staticUrls,
            ...navbarCategoryUrls,
            ...categoryUrls,
            ...subcategoryUrls,
            ...productUrls
        ].filter(url => {
            const isValid = isValidUrl(url.loc);
            if (!isValid) {
                console.log('Invalid URL:', url.loc);
            }
            return isValid;
        });

        console.log('Final URL counts:', {
            staticUrls: staticUrls.length,
            navbarCategoryUrls: navbarCategoryUrls.length,
            categoryUrls: categoryUrls.length,
            subcategoryUrls: subcategoryUrls.length,
            productUrls: productUrls.length,
            totalUrls: allUrls.length
        });

        // Generate sitemap XML
        const sitemap = generateSitemapXml(allUrls);

        // Return the sitemap with appropriate headers
        return new NextResponse(sitemap, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, max-age=3600, s-maxage=3600'
            }
        });
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return new NextResponse('Error generating sitemap', { 
            status: 500,
            headers: {
                'Content-Type': 'application/xml'
            }
        });
    }
} 