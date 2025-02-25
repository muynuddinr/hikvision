import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Darkfighter Schema
const darkfighterSchema = {
  "@context": "https://schema.org",
  "@type": ["Service", "Product"],
  "@id": "https://hikvisionuae.ae/Darkfighter",
  "name": "Hikvision DarkFighter Security Cameras",
  "headline": "Hikvision DarkFighter Technology in UAE",
  "description": "Advanced low-light security solutions optimized for the UAE. Superior night vision capabilities. Get a demo today!",
  "brand": {
    "@type": "Brand",
    "name": "Hikvision"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/Darkfighter"
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": "2024-03-19T08:00:00+04:00",
  "image": {
    "@type": "ImageObject",
    "url": "https://hikvisionuae.ae/images/darkfighter-security.jpg",
    "width": 1200,
    "height": 630
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "keywords": [
    "hikvision distributor uae",
    "Hikvision DarkFighter UAE",
    "low light cameras UAE",
    "night vision security UAE",
    "smart surveillance Dubai",
    "DarkFighter technology Gulf",
    "Hikvision DarkFighter Middle East",

    "Hikvision DarkFighter Distributor UAE",
    "Hikvision DarkFighter Supplier UAE",
    "Hikvision DarkFighter Authorized Distributor in UAE",
    "Hikvision DarkFighter Support UAE",
    "Hikvision DarkFighter",
    "Hikvision DarkFighter Technology",
  ],
  "serviceType": "Low-Light Security Solutions",
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
};

// Add FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Hikvision DarkFighter technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hikvision DarkFighter is an advanced low-light imaging technology that provides exceptional clarity in dark conditions, making it ideal for night-time surveillance and security monitoring in UAE properties."
      }
    },
    {
      "@type": "Question",
      "name": "How does DarkFighter perform in UAE's environmental conditions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DarkFighter is specially designed to handle UAE's challenging environmental conditions, providing clear imaging even in dusty, low-light situations common in desert environments."
      }
    }
  ]
};

const Darkfighter = () => {
  const features = [
    {
      title: "Regional Expertise",
      description: "Hikvision UAE provides comprehensive security solutions tailored to the unique requirements of the Middle Eastern market, with a strong local presence and support network across the Emirates."
    },
    {
      title: "Advanced Security Solutions",
      description: "Offering cutting-edge surveillance technology including AI-powered cameras, access control systems, and integrated security management platforms specifically designed for UAE's commercial and residential sectors."
    },
    {
      title: "Smart City Solutions",
      description: "Supporting UAE's smart city initiatives with innovative urban security solutions, traffic management systems, and intelligent monitoring capabilities aligned with the nation's vision for technological advancement."
    },
    {
      title: "Professional Services",
      description: "Delivering expert consultation, installation, maintenance, and after-sales support through a network of certified professionals and partners across the UAE."
    },
    {
      title: "Compliance & Standards",
      description: "All products and solutions comply with UAE's security regulations and international standards, ensuring reliable and legally-compliant security implementations."
    },
    {
      title: "Local Support & Training",
      description: "Providing comprehensive technical support and training programs for partners and end-users, ensuring optimal utilization of Hikvision solutions in the UAE market."
    }
  ];

  return (
    <>
      <Head>
        <title>Hikvision DarkFighter UAE - Advanced Night Vision Cameras | Get Started</title>
        <meta
          name="description"
          content="Upgrade to Hikvision DarkFighter in UAE for superior low-light security. Exceptional night vision capabilities for ultimate protection. Request a demo today!"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hikvision DarkFighter Technology in UAE | Low-Light Security Solutions" />
        <meta property="og:description" content="Experience advanced low-light security with Hikvision DarkFighter in UAE. Superior night vision, enhanced clarity, and smart monitoring for properties across Dubai & UAE." />
        <meta property="og:image" content="https://hikvisionuae.ae/images/darkfighter-security.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/Darkfighter" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hikvision DarkFighter Technology in UAE | Low-Light Security Solutions" />
        <meta name="twitter:description" content="Experience advanced low-light security with Hikvision DarkFighter in UAE. Superior night vision, enhanced clarity, and smart monitoring for properties across Dubai & UAE." />
        <meta name="twitter:image" content="https://hikvisionuae.ae/images/darkfighter-security.jpg" />

        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/Darkfighter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        id="darkfighter-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(darkfighterSchema) }}
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
            Hikvision UAE
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl">
            Leading Security Solutions Provider in the United Arab Emirates
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            About Hikvision UAE
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Hikvision UAE is a leading provider of security solutions and services in the United Arab Emirates. With a comprehensive portfolio of innovative products and solutions, we serve diverse sectors including government, commercial, residential, and industrial facilities across the Emirates. Our commitment to excellence, coupled with local expertise and global technological advancement, makes us the trusted choice for security solutions in the UAE market.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Services and Solutions
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

export default Darkfighter;
