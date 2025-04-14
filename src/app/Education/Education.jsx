import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import img1 from '../../../public/education/1.jpg'
import img2 from '../../../public/education/2.jpg'

// Education Schema
const educationSchema = {
  "@context": "https://schema.org",
  "@type": ["Service", "Product"],
  "@id": "https://hikvisionuae.ae/Education",
  "name": "Education Security Solutions UAE",
  "headline": "Security Solutions for Educational Institutions in UAE",
  "description": "Advanced surveillance and security systems for educational institutions. Discover comprehensive security solutions for schools, colleges, and universities across UAE.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/Education"
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": "2024-03-19T08:00:00+04:00",
  "image": {
    "@type": "ImageObject",
    "url": "https://hikvisionuae.ae/images/education-security.jpg",
    "width": 1200,
    "height": 630
  },
  "keywords": [
    "education security UAE",
    "school security systems Dubai",
    "campus surveillance UAE",
    "smart classroom security",
    "school access control Dubai",
    "hikvision",
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
    "hikvision distributor uae",
    "hikvision supplier uae",
    "hikvision authorized distributor in uae",
    "hikvision support uae",
    "hikvision dubai",
    "hikvision middle east",
    "hikvision distributor uae",
    "hikvision uae",
    "hikvision security solutions uae",
    "hikvision security systems uae",
    "hikvision security cameras uae",
    "hikvision security systems dubai",
    "hikvision security cameras dubai",
    "hikvision security systems UAE",
    "hikvision security cameras UAE",
  ],
  "serviceType": "Education Security Solutions",

  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  },

  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Mohammed Ahmed"
    },
    "datePublished": "2024-03-01",
    "reviewBody": "Excellent security solutions for our educational institution. The smart campus features have significantly improved our operational efficiency and safety measures."
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
      "name": "What security solutions are available for educational institutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive security solutions including smart surveillance systems, access control, attendance management, and emergency response systems designed specifically for educational environments."
      }
    },
    {
      "@type": "Question",
      "name": "How can smart campus solutions improve school security?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smart campus solutions enhance security through integrated systems including automated attendance tracking, visitor management, perimeter security, and real-time monitoring capabilities."
      }
    }
  ]
};

const Education = () => {
  return (
    <>
      <Head>
        <title>Hikvision UAE - Official Security Solutions Provider | Education Security Systems</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Primary Meta Tags */}
        <meta name="description" content="Official Hikvision UAE dealer & distributor. Leading provider of education security systems, CCTV cameras, and smart campus solutions in Dubai, Abu Dhabi & across UAE. Best prices guaranteed." />
        <meta name="keywords" content="hikvision uae, hikvision dubai, hikvision dealer uae, hikvision distributor dubai, hikvision security camera uae, hikvision cctv dubai, hikvision education solutions uae, hikvision smart campus" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/Education" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/Education" />
        <meta property="og:title" content="Hikvision UAE - Official Security Solutions Provider | Education Security Systems" />
        <meta property="og:description" content="Leading provider of education security systems, CCTV cameras, and smart campus solutions in UAE. Expert installation and support available." />
        <meta property="og:image" content="https://hikvisionuae.ae/images/education-security.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hikvision UAE - Official Security Solutions Provider" />
        <meta name="twitter:description" content="Leading provider of education security systems, CCTV cameras, and smart campus solutions in UAE. Expert installation and support available." />
        <meta name="twitter:image" content="https://hikvisionuae.ae/images/education-security.jpg" />
      </Head>

      <Script
        id="education-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationSchema) }}
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
              Education Solution
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Empowering educational environments with cutting-edge security and tech-driven operational excellence
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <div className="mb-20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Educational Environments with Advanced Security Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are dedicated to delivering comprehensive security solutions tailored for educational institutions. From campus safety systems to smart classroom integration, attendance management, and beyond, our unified platform offers cutting-edge hardware and software solutions designed for modern educational needs.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {/* Solution 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-80 p-4 flex items-center justify-center">
                <img 
                  src={img1.src} 
                  alt="Intelligent applications" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Advanced Smart Campus Solutions
                </h3>
                <p className="text-gray-600">
                  State-of-the-art applications designed to create digital campuses with enhanced automation and comprehensive security features
                </p>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-80 p-4 flex items-center justify-center">
                <img 
                  src={img2.src} 
                  alt="Easy integration" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Easy integration with third-party systems
                </h3>
                <p className="text-gray-600">
                  Easily integrates with external information management systems or other third-party systems, adding to the diversity of educational resources and methods
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Security Section */}
          <div className="bg-gray-50 rounded-xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comprehensive Campus Security Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our solutions provide end-to-end security coverage for educational institutions, encompassing school transportation, entry points, perimeter security, building access, and internal monitoring. With advanced applications for vehicle management, personnel tracking, and emergency response systems, we ensure a safe and secure learning environment for students, staff, and visitors alike.
            </p>
          </div>

          {/* Key Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Key Features for Educational Institutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced Security</h3>
                <p className="text-gray-600">State-of-the-art surveillance systems with AI-powered threat detection and immediate response capabilities.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Attendance</h3>
                <p className="text-gray-600">Automated attendance tracking using facial recognition and mobile check-in systems for students and staff.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Classrooms</h3>
                <p className="text-gray-600">Interactive learning environments with integrated AV systems and automated environmental controls.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
