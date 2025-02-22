import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import img1 from '../../../public/manufacture/1.jpg';
import img2 from '../../../public/manufacture/2.jpg';
import img3 from '../../../public/manufacture/3.jpg';

// Manufacturing Schema
const manufacturingSchema = {
  "@context": "https://schema.org",
  "@type": ["Service", "Product"],
  "@id": "https://hikvisionuae.ae/Manufacturing",
  "name": "Hikvision Manufacturing Security Solutions",
  "headline": "Hikvision Security Solutions for Manufacturing in UAE",
  "description": "Advanced surveillance and security systems for manufacturing excellence. Discover Hikvision's comprehensive security solutions for manufacturing facilities across UAE.",
  "brand": {
    "@type": "Brand",
    "name": "Hikvision"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://hikvisionuae.ae/images/manufacturing-security.jpg",
    "width": 1200,
    "height": 630
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/Manufacturing"
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": "2024-03-19T08:00:00+04:00",
  "keywords": [
    "hikvision Uae",
    "Hikvision Dubai",
    "Hikvision Sharjah",
    "Hikvision Ajman",
    "Hikvision Fujairah",
    "Hikvision Ras Al Khaimah",
    "Hikvision Umm Al Quwain",
    "Hikvision Abu Dhabi",
    "Hikvision manufacturing security",
    "industrial security cameras UAE",
    "manufacturing surveillance Dubai",
    "thermal cameras UAE",
    "PTZ cameras manufacturing",
    "hikvision uae",  
    "hikvision dubai",
    "hikvision middle east",
    "hikvision distributor uae",
    "hikvision supplier uae",
    "hikvision authorized distributor in uae",
    "hikvision support uae",
    "AI security solutions UAE",
    "hikvision manufacturing security solutions uae",
    "hikvision manufacturing security solutions dubai",
    "hikvision manufacturing security solutions UAE",
    "hikvision manufacturing security solutions Dubai",
    "hikvision manufacturing security solutions UAE",
    "hikvision manufacturing security solutions Dubai",
    "factory security systems Dubai",
    "factory security systems UAE",
    "factory security systems Dubai",
    "factory security systems UAE",
    "factory security systems Dubai",
    "factory security systems UAE",
    "factory security systems Dubai",
  ],
  "serviceType": "Manufacturing Security Solutions",
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
      "name": "What are the best security cameras for manufacturing facilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hikvision offers advanced industrial security cameras such as PTZ cameras, thermal imaging cameras, and AI-powered surveillance systems tailored for manufacturing environments."
      }
    },
    {
      "@type": "Question",
      "name": "Can Hikvision security systems integrate with access control in factories?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Hikvision security solutions integrate seamlessly with access control systems to restrict unauthorized access and enhance manufacturing facility security."
      }
    }
  ]
};

const Manufacturing = () => {
  const benefits = [
    {
      title: "Enhanced Security Monitoring",
      description: "Hikvision's advanced CCTV systems and AI-powered surveillance solutions provide 24/7 monitoring, real-time threat detection, and comprehensive security coverage across manufacturing facilities."
    },
    {
      title: "Smart Video Analytics",
      description: "Cutting-edge video analytics powered by Hikvision's deep learning algorithms enable automated incident detection, people counting, and behavioral analysis for improved operational intelligence."
    },
    {
      title: "Integrated Access Control",
      description: "Hikvision's access control systems seamlessly integrate with CCTV cameras to provide multi-layer security, ensuring only authorized personnel can access sensitive areas of the facility."
    },
    {
      title: "Remote Monitoring Capabilities",
      description: "Access real-time footage and security alerts from anywhere through Hikvision's mobile applications and cloud-based solutions, enabling proactive security management."
    }
  ];

  return (
    <>
      <Head>
        <title>Hikvision Manufacturing Security in UAE | Industrial CCTV & AI Surveillance</title>
        <meta
          name="description"
          content="Upgrade to Hikvision manufacturing security in UAE. Advanced CCTV, thermal cameras & AI surveillance for industrial facilities. Request a demo today!"
        />
        
        {/* Open Graph - Updated */}
        <meta property="og:title" content="Hikvision Manufacturing Security in UAE | Industrial CCTV Solutions" />
        <meta property="og:description" content="Experience advanced manufacturing security with Hikvision in UAE. Comprehensive CCTV, thermal imaging, and AI-powered surveillance for industrial facilities across Dubai & UAE." />
        <meta property="og:image" content="https://hikvisionuae.ae/images/manufacturing-security.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/Manufacturing" />

        {/* Twitter Card - Updated */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hikvision Manufacturing Security in UAE | Industrial CCTV Solutions" />
        <meta name="twitter:description" content="Experience advanced manufacturing security with Hikvision in UAE. Comprehensive CCTV, thermal imaging, and AI-powered surveillance for industrial facilities across Dubai & UAE." />
        <meta name="twitter:image" content="https://hikvisionuae.ae/images/manufacturing-security.jpg" />

        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/Manufacturing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        id="manufacturing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturingSchema) }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-900 to-red-700 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hikvision Security Solutions for Manufacturing in UAE
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Advanced Surveillance and Security Systems for Manufacturing Excellence
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <div className="mb-20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Secure Your Manufacturing Facility with Hikvision
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              As the UAE's premier provider of Hikvision security solutions, we deliver state-of-the-art surveillance systems specifically designed for manufacturing environments. Our comprehensive range of cameras, sensors, and monitoring equipment ensures maximum security, operational efficiency, and peace of mind for manufacturing facilities across Dubai and the UAE.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {/* Solution 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src={img1.src}
                  alt="Hikvision Thermal Imaging Cameras for Industrial Security in UAE"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Hikvision Thermal Imaging Cameras
                </h3>
                <p className="text-gray-600">
                  Deploy advanced thermal cameras that provide 24/7 temperature monitoring and early fire detection. These cameras offer exceptional performance in challenging environments, helping prevent equipment failures and ensuring workplace safety.
                </p>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src={img2.src}
                  alt="Hikvision PTZ Surveillance Systems for Manufacturing Facilities in Dubai"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  PTZ Surveillance Systems
                </h3>
                <p className="text-gray-600">
                  Hikvision's Pan-Tilt-Zoom cameras provide comprehensive coverage with 360-degree monitoring capabilities. These high-resolution cameras feature advanced zoom capabilities and auto-tracking functionality for superior perimeter security.
                </p>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src={img3.src}
                  alt="AI-Powered Smart Cameras for Industrial Security in UAE"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AI-Powered Smart Cameras
                </h3>
                <p className="text-gray-600">
                  Leverage Hikvision's DeepinView cameras with built-in AI capabilities for intelligent monitoring. These systems can detect unauthorized access, monitor PPE compliance, and provide advanced analytics for operational insights.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Our Manufacturing Solutions
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

export default Manufacturing;
