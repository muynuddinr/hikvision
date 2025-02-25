import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// ColorVu Schema
const colorvuSchema = {
  "@context": "https://schema.org",
  "@type": ["Service", "Product"],
  "@id": "https://hikvisionuae.ae/Colorvu",
  "name": "Hikvision ColorVu Security Cameras",
  "headline": "Hikvision ColorVu Technology in UAE",
  "description": "24/7 Full-Color Surveillance Solutions optimized for UAE's environmental conditions. Advanced security cameras for crystal-clear color imaging day and night.",
  "brand": {
    "@type": "Brand",
    "name": "Hikvision"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/Colorvu"
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": "2024-03-19T08:00:00+04:00",
  "image": {
    "@type": "ImageObject",
    "url": "https://hikvisionuae.ae/images/colorvu-technology.jpg",
    "width": 1200,
    "height": 630
  },
  "keywords": [
    "ColorVu UAE",
    "Hikvision ColorVu Dubai",
    "24/7 color cameras UAE",
    "night vision cameras Dubai",
    "full color surveillance UAE",
    "Hikvision security Dubai",
    "ColorVu technology UAE",
    "low light cameras UAE",
    "hikvision uae",
    "hikvision dubai",
    "hikvision middle east",
    "hikvision distributor uae",
    "hikvision supplier uae",
    "hikvision authorized distributor in uae",
    "hikvision support uae",
    "hikvision colorvu",
    "hikvision colorvu uae",
    "hikvision colorvu dubai",
    "hikvision colorvu middle east",
    "hikvision colorvu distributor uae",
    "hikvision colorvu supplier uae",
    "hikvision colorvu authorized distributor in uae",
    "hikvision colorvu support uae",
    "hikvision colorvu technology",
    "hikvision colorvu technology uae",
    "hikvision colorvu technology dubai",
    "hikvision colorvu technology middle east",
    "hikvision colorvu technology distributor uae",
    "hikvision colorvu technology supplier uae",
    "hikvision colorvu technology authorized distributor in uae",
  ],
  "serviceType": "Full-Color Surveillance Solutions",
  "provider": {
    "@type": "Organization",
    "name": "Hikvision UAE",
    "url": "https://hikvisionuae.ae",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hikvisionuae.ae/images/hikvision-logo.jpg"
    },
    "sameAs": [
      "https://www.linkedin.com/company/hikvision",
      "https://twitter.com/hikvision"
    ]
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "AED",
    "price": "1499",
    "priceValidUntil": "2024-12-31",
    "availability": "https://schema.org/InStock",
    "hasMerchantReturnPolicy": true,
    "seller": {
      "@type": "Organization",
      "name": "Hikvision UAE"
    }
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Security Systems Weekly"
      },
      "datePublished": "2024-02-15",
      "reviewBody": "Hikvision ColorVu cameras deliver exceptional performance in UAE's challenging environmental conditions, providing crystal-clear color imaging around the clock."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ahmed Al-Mansouri"
      },
      "datePublished": "2024-03-01",
      "reviewBody": "Perfect solution for our Dubai mall's security needs. The color night vision is remarkable even in complete darkness."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.7",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "UAE Security Solutions Magazine"
      },
      "datePublished": "2024-01-20",
      "reviewBody": "ColorVu's performance in sandstorms and extreme heat makes it the ideal choice for UAE's demanding climate conditions."
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "156",
    "reviewCount": "89"
  }
};

// Add FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes ColorVu cameras special for UAE conditions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ColorVu cameras feature F1.0 super-aperture lenses optimized for UAE's unique environmental conditions, delivering crystal-clear, full-color images 24/7, even in extreme lighting conditions."
      }
    },
    {
      "@type": "Question",
      "name": "How do ColorVu cameras perform in UAE's harsh weather?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ColorVu cameras are engineered to withstand UAE's extreme climate conditions, including intense heat and sandstorms, while maintaining exceptional image quality throughout the year."
      }
    }
  ]
};

const Colorvu = () => {
  const features = [
    {
      title: "24/7 Full-Color Surveillance for UAE Climate",
      description: "ColorVu cameras are optimized for UAE's unique environmental conditions, delivering crystal-clear, full-color images around the clock. Perfect for monitoring Dubai's vibrant nightlife, residential compounds, and commercial areas with the same clarity as daylight."
    },
    {
      title: "Desert-Optimized Performance",
      description: "Specially designed with UAE's climate in mind, these cameras feature enhanced F1.0 super-aperture lenses that excel in both intense daylight and low-light conditions, ensuring consistent performance in the region's diverse lighting conditions."
    },
    {
      title: "Smart Environmental Lighting",
      description: "Equipped with intelligent supplemental lighting that automatically adjusts to UAE's ambient conditions, providing optimal visibility while respecting the architectural aesthetics of modern UAE developments."
    },
    {
      title: "Advanced Security Features",
      description: "Essential for UAE's premium properties and businesses, ColorVu cameras ensure crucial details like vehicle colors, license plates, and clothing are clearly visible 24/7, supporting local security and surveillance requirements."
    },
    {
      title: "UAE Weather-Resistant",
      description: "Engineered to withstand UAE's extreme climate conditions, including intense heat, sandstorms, and occasional rain, while maintaining exceptional image quality and reliability throughout the year."
    },
    {
      title: "Versatile UAE Applications",
      description: "Ideal for UAE's diverse infrastructure including shopping malls, hotel complexes, residential communities, and smart city initiatives where reliable color surveillance is crucial for security and monitoring."
    }
  ];

  return (
    <>
      <Head>
        <title>Hikvision ColorVu UAE - 24/7 Full-Color Cameras | Get Started</title>
        <meta
          name="description"
          content="Upgrade to Hikvision ColorVu in UAE for 24/7 full-color surveillance. Crystal-clear color imaging in any lighting condition. Request a demo today!"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hikvision ColorVu Technology in UAE | 24/7 Full-Color Surveillance" />
        <meta property="og:description" content="Experience superior 24/7 full-color surveillance with Hikvision ColorVu in UAE. Crystal-clear color imaging in any lighting condition, optimized for UAE's unique environment." />
        <meta property="og:image" content="https://hikvisionuae.ae/images/colorvu-technology.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/Colorvu" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hikvision ColorVu Technology in UAE | 24/7 Full-Color Surveillance" />
        <meta name="twitter:description" content="Experience superior 24/7 full-color surveillance with Hikvision ColorVu in UAE. Crystal-clear color imaging in any lighting condition, optimized for UAE's unique environment." />
        <meta name="twitter:image" content="https://hikvisionuae.ae/images/colorvu-technology.jpg" />

        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/Colorvu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        id="colorvu-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(colorvuSchema) }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-[#8B1818] text-white py-20 px-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hikvision ColorVu UAE
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl">
            Advanced Full-Color Surveillance Solutions for the UAE Market
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Hikvision ColorVu Technology in UAE
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Hikvision ColorVu technology has been specifically optimized for the UAE market, offering unprecedented 24/7 full-color surveillance capabilities in the region's unique environmental conditions. Whether monitoring busy urban centers, luxury developments, or critical infrastructure, ColorVu cameras deliver exceptional performance with advanced features tailored to meet UAE's sophisticated security requirements.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Features of ColorVu Technology
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Colorvu;
