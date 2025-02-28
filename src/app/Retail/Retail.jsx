import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Retail Schema
const retailSchema = {
  "@context": "https://schema.org",
  "@type": ["Service", "Product"],
  "@id": "https://hikvisionuae.ae/Retail",
  "name": "Retail Security Solutions UAE",
  "headline": "Retail Security Solutions in UAE | Advanced Video Surveillance",
  "url": "https://hikvisionuae.ae/Retail",
  "keywords": "Retail Security Solutions UAE, Advanced Video Surveillance, CCTV Cameras UAE, Loss Prevention, Business Intelligence, Hikvision Dubai, Hikvision Middle East, Hikvision Distributor UAE, Hikvision Supplier UAE, Hikvision Authorized Distributor in UAE, Hikvision Support UAE",
  "description": "Advanced retail surveillance and security systems for stores in UAE. Comprehensive video monitoring, loss prevention, and business intelligence solutions.",
  "brand": {
    "@type": "Brand",
    "name": "Hikvision UAE"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://hikvisionuae.ae/images/retail-security.jpg",
    "width": 1200,
    "height": 630
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/Retail"
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": "2024-03-19T08:00:00+04:00",
  "keywords": [ 
    "Hikvision",
    "Hikvision UAE",
    "Hikvision Dubai",
    "Hikvision Abu Dhabi",
    "Hikvision Sharjah",
    "Hikvision Ajman",
    "Hikvision Fujairah",
    "Security Solutions for uae",
    "Security Solutions in uae",
    "Security Solutions in dubai",
    "Security Solutions in abu dhabi",
    "Security Solutions in sharjah",
    "Security Solutions in ajman",
    "Security Solutions in uae",
    "retail security UAE",
    "store surveillance Dubai",
    "loss prevention cameras",
    "retail CCTV systems",
    "shop security cameras",
    "retail analytics UAE",
    "store monitoring Dubai",
    "retail loss prevention",
    "business intelligence cameras",
    "retail security solutions",
    "hikvision uae",
    "hikvision dubai",
    "hikvision middle east",
    "hikvision distributor uae",
    "hikvision supplier uae",
    "hikvision authorized distributor in uae",
    "hikvision support uae",
  ],
  "serviceType": "Retail Security Solutions",
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
    "availability": "https://schema.org/InStock",
    "priceCurrency": "AED",
    "price": "1000.00",
    "priceValidUntil": "2025-12-31",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "1000.00",
      "maxPrice": "50000.00"
    },
    "seller": {
      "@type": "Organization",
      "name": "Hikvision UAE"
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "AE",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": "30",
      "returnMethod": "https://schema.org/ReturnByMail"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "95"
  }
};

// Add FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the best security cameras for retail stores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Advanced HD cameras with AI-powered analytics are ideal for retail stores, offering features like behavior analysis, theft prevention, and customer tracking capabilities."
      }
    },
    {
      "@type": "Question",
      "name": "How can video surveillance help prevent retail theft?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern surveillance systems use AI-powered cameras to detect suspicious behavior, monitor high-risk areas, and integrate with POS systems for comprehensive loss prevention."
      }
    }
  ]
};

const Retail = () => {
  const benefits = [
    {
      title: "Advanced Video Surveillance",
      description: "Deploy state-of-the-art HD cameras and NVR systems to monitor store activities, protect assets, and ensure customer safety across all retail locations."
    },
    {
      title: "Smart Loss Prevention",
      description: "Utilize AI-powered cameras with behavior analysis to detect suspicious activities, prevent theft, and reduce shrinkage in real-time."
    },
    {
      title: "Business Intelligence",
      description: "Leverage built-in analytics to track customer flow, analyze shopping patterns, and generate heat maps for optimized store layouts."
    },
    {
      title: "Integrated Security Solution",
      description: "Implement comprehensive security with integrated cameras, access control, POS integration, and remote monitoring capabilities."
    }
  ];

  return (
    <>
      <Head>
        <title>Retail Security Solutions UAE - Advanced Video Surveillance | Get Started</title>
        <meta
          name="description"
          content="Upgrade your retail security in UAE with advanced surveillance solutions. HD cameras, loss prevention systems, and business intelligence for stores across Dubai & UAE."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Retail Security Solutions in UAE | Advanced Video Surveillance Systems" />
        <meta property="og:description" content="Experience advanced retail security solutions in UAE. Comprehensive video monitoring, loss prevention, and business intelligence for stores across Dubai & UAE." />
        <meta property="og:image" content="https://hikvisionuae.ae/images/retail-security.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/Retail" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Retail Security Solutions in UAE | Advanced Video Surveillance Systems" />
        <meta name="twitter:description" content="Experience advanced retail security solutions in UAE. Comprehensive video monitoring, loss prevention, and business intelligence for stores across Dubai & UAE." />
        <meta name="twitter:image" content="https://hikvisionuae.ae/images/retail-security.jpg" />

        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/Retail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        id="retail-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(retailSchema) }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-900 to-red-700 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Retail Security Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Secure and Optimize Your Retail Space with Advanced Video Surveillance
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <div className="mb-20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Advanced Retail Surveillance Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Modern retail security demands have evolved significantly. Our comprehensive range of security cameras and surveillance systems provide cutting-edge protection, featuring AI-powered analytics, high-resolution monitoring, and smart retail solutions designed specifically for the modern retail environment.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {/* Solution cards would go here - similar structure to Manufacturing */}
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Our Retail Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Retail;
