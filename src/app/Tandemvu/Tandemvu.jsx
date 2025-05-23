import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// TandemVu Schema
const tandemvuSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://hikvisionuae.ae/Tandemvu",
  "name": "Hikvision TandemVu Security Cameras",
  "headline": "Hikvision TandemVu Technology in UAE",
  "description": "Advanced dual-sensor security solutions optimized for the UAE. Combining thermal and visible imaging for comprehensive surveillance. Get a demo today!",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  },
  "brand": {
    "@type": "Brand",
    "name": "Hikvision"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/Tandemvu"
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": "2024-03-19T08:00:00+04:00",
  "image": {
    "@type": "ImageObject",
    "url": "https://hikvisionuae.ae/images/tandemvu-security.jpg",
    "width": 1200,
    "height": 630
  },
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
    "TandemVu UAE",
    "Hikvision Dubai",
    "Hikvision UAE",
    "dual-sensor cameras UAE",
    "thermal cameras Dubai",
    "smart surveillance UAE",
    "security solutions Dubai",
    "TandemVu installation UAE",
    "commercial security Dubai",
    "Hikvision partner UAE",
    "hikvision uae",
    "hikvision dubai",
    "hikvision middle east",
    "hikvision distributor uae",
    "hikvision supplier uae",
    "hikvision authorized distributor in uae",
    "hikvision support uae",
    "TandemVu Security Solutions",
    "UAE Security Cameras",
    "Dubai Surveillance Systems",
    "UAE Surveillance Solutions",
    "Hikvision TandemVu",
    "UAE Surveillance Technology",
    "hikvision tandemvu",
    "hikvision tandemvu uae",
    "hikvision tandemvu dubai",
    "hikvision tandemvu middle east",
    "hikvision tandemvu distributor uae",
    "hikvision tandemvu supplier uae",
    "hikvision tandemvu authorized distributor in uae",
    "hikvision tandemvu support uae",
    "hikvision uae",
    "hikvision dubai",
    "hikvision middle east",
    "hikvision distributor uae",
    "hikvision supplier uae",
    "hikvision authorized distributor in uae",
    "hikvision support uae",
  ],
  "serviceType": "Dual-Sensor Security Solutions",
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
    "@type": "AggregateOffer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "AED",
    "priceValidUntil": "2025-12-31",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 2000,
      "maxPrice": 15000,
      "priceCurrency": "AED"
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "returnWindow": "P30D",
      "returnMethod": "https://schema.org/ReturnByMail"
    },
    "seller": {
      "@type": "Organization",
      "name": "Hikvision UAE"
    }
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Hikvision"
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
        "name": "Dubai Security Solutions"
      },
      "datePublished": "2024-03-01",
      "reviewBody": "Hikvision TandemVu cameras have proven exceptional in UAE conditions. The dual-sensor technology provides outstanding surveillance capabilities in both daylight and nighttime conditions."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Abu Dhabi Smart Systems"
      },
      "datePublished": "2024-02-15",
      "reviewBody": "The TandemVu system's performance in harsh desert conditions is remarkable. Integration with our existing security infrastructure was seamless."
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
        "name": "UAE Port Authority"
      },
      "datePublished": "2024-01-20",
      "reviewBody": "Perfect solution for our maritime security needs. The dual-sensor capability provides excellent coverage in all weather conditions."
    }
  ]
};

// Add FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes TandemVu cameras ideal for UAE conditions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TandemVu cameras are specially designed to withstand UAE's harsh climate conditions, delivering exceptional performance in extreme temperatures and sandstorm conditions."
      }
    },
    {
      "@type": "Question",
      "name": "How does TandemVu support Dubai's smart city initiatives?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TandemVu's AI capabilities integrate seamlessly with existing urban security infrastructure, supporting Dubai's vision for a safer, more connected future through smart surveillance solutions."
      }
    }
  ]
};

const Tandemvu = () => {
  const features = [
    {
      title: "UAE-Certified Security Solution",
      description: "TandemVu cameras are fully compliant with UAE security standards and regulations, making them ideal for Dubai's sophisticated security requirements. Our systems are trusted by leading UAE enterprises, government facilities, and commercial establishments."
    },
    {
      title: "Desert-Optimized Performance",
      description: "Specially designed to withstand the UAE's harsh climate conditions, TandemVu cameras deliver exceptional performance in extreme temperatures and sandstorm conditions, ensuring reliable surveillance across Dubai's diverse environments."
    },
    {
      title: "Smart City Integration",
      description: "Aligned with Dubai's smart city initiatives, TandemVu's AI capabilities integrate seamlessly with existing urban security infrastructure, supporting the emirate's vision for a safer, more connected future."
    },
    {
      title: "Local Support & Maintenance",
      description: "As authorized Hikvision partners in Dubai, we provide comprehensive local support, rapid maintenance response, and professional installation services across the UAE, ensuring maximum system uptime and reliability."
    },
    {
      title: "24/7 Monitoring Solutions",
      description: "Perfect for Dubai's round-the-clock business environment, TandemVu provides uninterrupted surveillance with both thermal and visible imaging, ideal for monitoring critical infrastructure, commercial properties, and residential compounds."
    },
    {
      title: "UAE-Specific Applications",
      description: "From monitoring port facilities in Dubai to securing smart buildings in Abu Dhabi, TandemVu's dual-sensor technology is customized for UAE-specific security applications, offering superior detection in both day and night conditions."
    }
  ];

  return (
    <>
      <Head>
        <title>Hikvision UAE - Official Security Solutions & CCTV Systems Provider</title>
        <meta name="description" content="Hikvision UAE - Leading provider of security solutions, CCTV cameras, and surveillance systems in Dubai, Abu Dhabi & across UAE. Authorized distributor & expert installation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Primary Keywords */}
        <meta name="keywords" content="hikvision uae, hikvision dubai, hikvision abu dhabi, cctv camera uae, security systems uae, surveillance solutions dubai, hikvision tandemvu uae" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Hikvision UAE - Official Security Solutions Provider" />
        <meta property="og:description" content="Leading provider of Hikvision security solutions in UAE. Professional CCTV installation, surveillance systems, and security cameras across Dubai & UAE." />
        <meta property="og:image" content="https://hikvisionuae.ae/images/hikvision-uae-office.jpg" />
        <meta property="og:url" content="https://hikvisionuae.ae" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hikvision UAE - Official Security Solutions Provider" />
        <meta name="twitter:description" content="Leading provider of Hikvision security solutions in UAE. Professional CCTV installation and surveillance systems." />
        <meta name="twitter:image" content="https://hikvisionuae.ae/images/hikvision-uae-office.jpg" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae" />
        
        {/* Region-specific Tags */}
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
      </Head>

      <Script
        id="tandemvu-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tandemvuSchema) }}
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
            Hikvision TandemVu in UAE
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl">
            Premier Authorized Hikvision Partner in Dubai & Across UAE
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            TandemVu Solutions for UAE
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Experience cutting-edge surveillance technology tailored for the UAE market. TandemVu combines advanced thermal and visible-light cameras in a single unit, perfectly adapted to meet the unique security challenges of Dubai and the wider UAE region. Our solutions are backed by local expertise and support, ensuring optimal performance in the Gulf's demanding environment.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Features and Benefits of TandemVu
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

export default Tandemvu;
