import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import img1 from '../../../public/healthcare/HIKIVISION LOW LIGHT.jpg'
import img2 from '../../../public/healthcare/HIKIVISION AI DRIVEN.jpg'

// Healthcare Schema
const healthcareSchema = {
  "@context": "https://schema.org",
  "@type": ["Service", "Product"],
  "@id": "https://hikvisionuae.ae/Healthcare",
  "name": "Healthcare Security Solutions Dubai",
  "headline": "Healthcare Security Solutions in Dubai",
  "description": "Advanced healthcare security and surveillance solutions for hospitals and medical facilities in Dubai. Discover Hikvision's comprehensive healthcare security systems.",
  "brand": {
    "@type": "Brand",
    "name": "Hikvision"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/Healthcare"
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": "2024-03-19T08:00:00+04:00",
  "image": {
    "@type": "ImageObject",
    "url": "https://hikvisionuae.ae/images/healthcare-security.jpg",
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
    "healthcare security Dubai",
    "healthcare security uae",
    "healthcare security in dubai",
    "healthcare security in uae",
    "hospital surveillance UAE",
    "medical facility security",
    "Hikvision healthcare solutions",
    "patient monitoring systems",
    "hikvision uae",
    "hikvision dubai",
    "hikvision middle east",
    "hikvision distributor uae",
    "hikvision supplier uae",
    "hikvision authorized distributor in uae",
    "hikvision support uae",
    "hikvision healthcare solutions uae",
    "hikvision healthcare solutions dubai"
  ],
  "serviceType": "Healthcare Security Solutions",
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
    "price": "0",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2025-12-31",
    "hasMerchantReturnPolicy": false,
    "seller": {
      "@type": "Organization",
      "name": "Hikvision UAE"
    }
  },
  "review": [{
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "Dubai Healthcare City"
    },
    "datePublished": "2024-03-01",
    "reviewBody": "Excellent healthcare security solutions that have significantly improved our facility's safety and monitoring capabilities."
  },
  {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.8",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "Al Zahra Hospital Dubai"
    },
    "datePublished": "2024-02-15",
    "reviewBody": "Hikvision's healthcare security solutions have revolutionized our patient monitoring capabilities."
  }],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "156",
    "reviewCount": "89"
  }
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What security solutions are available for healthcare facilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer advanced low-light surveillance technology, AI-driven patient behavior analysis, and comprehensive monitoring systems designed specifically for healthcare environments."
      }
    },
    {
      "@type": "Question",
      "name": "How do your healthcare security solutions protect patient privacy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our solutions include advanced privacy protection features ensuring compliance with healthcare regulations while maintaining optimal security and monitoring capabilities."
      }
    }
  ]
};

const Healthcare = () => {
  return (
    <>
      <Head>
        <title>Hikvision UAE - Official Security Solutions Provider | Healthcare Security Systems</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Primary Meta Tags */}
        <meta name="description" content="Official Hikvision UAE dealer & distributor. Leading provider of healthcare security systems, CCTV cameras, and surveillance solutions in Dubai, Abu Dhabi & across UAE. Best prices guaranteed." />
        <meta name="keywords" content="hikvision uae, hikvision dubai, hikvision dealer uae, hikvision distributor dubai, hikvision security camera uae, hikvision cctv dubai, hikvision healthcare solutions uae, hikvision hospital security" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/Healthcare" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/Healthcare" />
        <meta property="og:title" content="Hikvision UAE - Official Security Solutions Provider | Healthcare Security Systems" />
        <meta property="og:description" content="Leading provider of healthcare security systems, CCTV cameras, and surveillance solutions in UAE. Expert installation and support available." />
        <meta property="og:image" content="https://hikvisionuae.ae/images/healthcare-security.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hikvision UAE - Official Security Solutions Provider" />
        <meta name="twitter:description" content="Leading provider of healthcare security systems, CCTV cameras, and surveillance solutions in UAE. Expert installation and support available." />
        <meta name="twitter:image" content="https://hikvisionuae.ae/images/healthcare-security.jpg" />
      </Head>

      <Script
        id="healthcare-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(healthcareSchema) }}
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
              Healthcare Solutions in Dubai
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Revamping Healthcare with High-Tech Safety & Patient Care
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <div className="mb-12 sm:mb-20 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Transform Your Healthcare Operations
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4">
              Our comprehensive Healthcare Solutions address the growing complexity of modern healthcare facilities. We provide cutting-edge security and innovative patient care solutions that balance safety with accessibility, ensuring both patients and staff can move freely while maintaining optimal security.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20">
            {/* Advanced Low-light Technology */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="relative h-[300px] sm:h-[400px] w-full">
                <Image
                  src={img1.src}
                  alt="Advanced Low-light Technology"
                  fill
                  quality={100}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Advanced Low-light Surveillance
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our advanced low-light surveillance technology delivers exceptional clarity in minimal lighting conditions, perfect for monitoring ICUs, emergency rooms, and other critical care areas 24/7.
                </p>
              </div>
            </div>

            {/* AI-driven Analysis */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="relative h-[300px] sm:h-[400px] w-full">
                <Image
                  src={img2.src}
                  alt="AI-driven Analysis"
                  fill
                  quality={100}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  AI-driven Patient Behavior Analysis
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our intelligent monitoring systems utilize advanced AI to detect and alert staff of potential patient incidents, enabling immediate response to emergency situations.
                </p>
              </div>
            </div>
          </div>

          {/* Special Requirements Section */}
          <div className="bg-gray-50 rounded-xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Special Requirements
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Healthcare facilities have unique requirements in its stream of human activities and diversity. Hospitals with their stream of people constantly coming and going – visitors, out-clients, patients, and others – maintaining smooth operations and responding quickly to emergency needs are becoming more challenging.
            </p>
          </div>

          {/* Key Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-pink-600 text-4xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
                <p className="text-gray-600">
                  Comprehensive surveillance coverage with advanced monitoring capabilities for patient and staff safety.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-pink-600 text-4xl mb-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Improved Efficiency</h3>
                <p className="text-gray-600">
                  Streamlined operations through intelligent monitoring and automated alert systems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-pink-600 text-4xl mb-4">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Patient Privacy</h3>
                <p className="text-gray-600">
                  Advanced privacy protection features ensuring compliance with healthcare regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Healthcare Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Expertise & Experience</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Over 10 years of experience in healthcare security</li>
                  <li>✓ Certified healthcare security professionals</li>
                  <li>✓ Customized solutions for medical facilities</li>
                  <li>✓ Proven track record in Dubai's healthcare sector</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Advanced Technology</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ State-of-the-art surveillance systems</li>
                  <li>✓ Integration with existing hospital infrastructure</li>
                  <li>✓ Regular software updates and maintenance</li>
                  <li>✓ 24/7 technical support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Healthcare;
