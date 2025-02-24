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
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "AED",
    "priceValidUntil": "2025-12-31",
    "seller": {
      "@type": "Organization",
      "name": "Hikvision UAE"
    }
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Hikvision"
  }
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
        <title>Hikvision TandemVu UAE - Dual-Sensor Security Cameras | Get Started</title>
        <meta
          name="description"
          content="Upgrade to Hikvision TandemVu in UAE for dual-sensor security. Advanced thermal and visible imaging for comprehensive surveillance. Request a demo today!"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hikvision TandemVu Technology in UAE | Dual-Sensor Security Solutions" />
        <meta property="og:description" content="Experience advanced dual-sensor security with Hikvision TandemVu in UAE. Thermal and visible imaging, comprehensive surveillance, and smart monitoring for properties across Dubai & UAE." />
        <meta property="og:image" content="https://hikvisionuae.ae/images/tandemvu-security.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/Tandemvu" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hikvision TandemVu Technology in UAE | Dual-Sensor Security Solutions" />
        <meta name="twitter:description" content="Experience advanced dual-sensor security with Hikvision TandemVu in UAE. Thermal and visible imaging, comprehensive surveillance, and smart monitoring for properties across Dubai & UAE." />
        <meta name="twitter:image" content="https://hikvisionuae.ae/images/tandemvu-security.jpg" />

        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/Tandemvu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
