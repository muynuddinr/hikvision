import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Acusense Schema
const acusenseSchema = {
  "@context": "https://schema.org",
  "@type": ["Service", "Product"],
  "@id": "https://hikvisionuae.ae/Acusense",
  "name": "Hikvision AcuSense AI Security Cameras",
  "headline": "Hikvision AcuSense Technology in UAE",
  "description": "Advanced AI-powered security solutions optimized for the UAE. Reduce false alarms with smart detection. Get a demo today!",
  "brand": {
    "@type": "Brand",
    "name": "Hikvision"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/Acusense"
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": "2024-03-19T08:00:00+04:00",
  "image": {
    "@type": "ImageObject",
    "url": "https://hikvisionuae.ae/images/acusense-security.jpg",
    "width": 1200,
    "height": 630
  },
  "keywords": [
    "Hikvision AcuSense UAE",
    "AI security cameras UAE",
    "false alarm reduction UAE",
    "smart surveillance Dubai",
    "AcuSense technology Gulf"
  ],
  "serviceType": "AI-Powered Security Solutions",
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
    "availability": "https://schema.org/InStock",
    "url": "https://hikvisionuae.ae/Acusense",
    "seller": {
      "@type": "Organization",
      "name": "Hikvision UAE"
    }
  }
};

// Add FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Hikvision AcuSense technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hikvision AcuSense is an AI-powered technology that accurately distinguishes between humans and vehicles, reducing false alarms and providing precise detection for enhanced security monitoring in UAE properties."
      }
    },
    {
      "@type": "Question",
      "name": "How does AcuSense perform in UAE's climate conditions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AcuSense is specially calibrated for UAE's environmental conditions, effectively minimizing false alarms triggered by sandstorms, desert wildlife, and extreme weather conditions, ensuring reliable surveillance in the Gulf climate."
      }
    }
  ]
};

const Acusense = () => {
  const features = [
    {
      title: "Advanced Security for UAE Properties",
      description: "Hikvision AcuSense cameras, widely deployed across UAE's residential and commercial properties, provide precise detection between humans and vehicles, ensuring optimal security for the region's high-value assets and properties."
    },
    {
      title: "Desert-Optimized Performance",
      description: "Specially calibrated for UAE's unique environmental conditions, AcuSense technology effectively minimizes false alarms triggered by sandstorms, desert wildlife, and extreme weather conditions, ensuring reliable surveillance in the Gulf climate."
    },
    {
      title: "Smart Security for UAE Facilities",
      description: "Perfect for UAE's commercial centers, residential compounds, and industrial zones, the system detects specific security events such as perimeter breaches, unauthorized access, and suspicious gatherings, providing rapid response capabilities."
    },
    {
      title: "Efficient Monitoring Solutions",
      description: "Ideal for UAE's security personnel, AcuSense cameras organize footage by human and vehicle events, streamlining surveillance operations in busy UAE locations such as malls, residential communities, and business districts."
    },
    {
      title: "UAE-Compliant Security Settings",
      description: "Fully customizable settings that align with UAE security regulations and requirements, allowing property managers and security teams to implement tailored surveillance solutions that meet local standards."
    },
    {
      title: "Integration with UAE Security Infrastructure",
      description: "Seamlessly integrates with UAE's existing security networks and smart city initiatives, compatible with local VMS systems and security protocols for comprehensive protection."
    }
  ];

  return (
    <>
      <Head>
        <title>Hikvision AcuSense UAE - Smart AI Security Cameras | Get Started</title>
        <meta
          name="description"
          content="Upgrade to Hikvision AcuSense in UAE for AI-powered security. Eliminate false alarms with smart human & vehicle detection. Request a demo today!"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hikvision AcuSense Technology in UAE | AI-Powered Security Solutions" />
        <meta property="og:description" content="Experience advanced AI-powered security with Hikvision AcuSense in UAE. Precise detection, reduced false alarms, and smart monitoring for properties across Dubai & UAE." />
        <meta property="og:image" content="https://hikvisionuae.ae/images/acusense-security.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/Acusense" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hikvision AcuSense Technology in UAE | AI-Powered Security Solutions" />
        <meta name="twitter:description" content="Experience advanced AI-powered security with Hikvision AcuSense in UAE. Precise detection, reduced false alarms, and smart monitoring for properties across Dubai & UAE." />
        <meta name="twitter:image" content="https://hikvisionuae.ae/images/acusense-security.jpg" />

        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/Acusense" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        id="acusense-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(acusenseSchema) }}
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
            Hikvision AcuSense in UAE
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl">
            Advanced AI-Powered Security Solutions for UAE's Modern Infrastructure
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Hikvision AcuSense Technology in the UAE
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Hikvision AcuSense technology has revolutionized video surveillance across the UAE's diverse architectural landscape. 
            Discover how it works with our <a href="/ai-cameras-uae" className="text-[#8B1818] hover:underline">AI security cameras</a> and 
            <a href="/smart-surveillance-dubai" className="text-[#8B1818] hover:underline"> smart surveillance solutions</a>.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What is acusense technology?
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

export default Acusense;
