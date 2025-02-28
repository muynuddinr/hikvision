import React from 'react';
import img from '../../../public/Hikvision about.jpg'
import Head from 'next/head';
import Script from 'next/script';

// Update the schema to match the Article/Service format
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": ["Service", "Product"],
  "@id": "https://hikvisionuae.ae/About",
  "name": "Hikvision Security Solutions UAE",
  "headline": "About Hikvision Dubai - Authorized Security Solutions Provider",
  "description": "Discover Hikvision Dubai, your trusted authorized reseller of security cameras and surveillance systems in UAE. Expert CCTV installation and support services.",
  "brand": {
    "@type": "Brand",
    "name": "Hikvision"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/About"
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": "2024-03-19T08:00:00+04:00",
  "image": {
    "@type": "ImageObject",
    "url": "https://hikvisionuae.ae/images/hikvision-about.jpg",
    "width": 1200,
    "height": 630
  },
  "keywords": [
    "Hikvision UAE",
    "Hikvision Dubai",
    "Hikvision",
    "Hikvision Sharjah",
    "about hikvision",
    "about hikvision uae",
    "about hikvision dubai",
    "about hikvision abu dhabi",
    "about hikvision sharjah",
    "about hikvision ajman",
    "about hikvision Fujairah",
    "about hikvision Ras Al Khaimah",
    "about hikvision Umm Al Quwain",
    "about hikvision Abu Dhabi",
    "security camera dealer Dubai",
    "CCTV installation UAE",
    "Hikvision authorized reseller",
    "surveillance systems Dubai",
    "security solutions UAE",
    "Hikvision Middle East",
    "Hikvision Distributor UAE",
    "Hikvision Supplier UAE",
    "Hikvision Authorized Distributor in UAE",
    "Hikvision Support UAE",
    "Hikvision UAE",
    "Hikvision Dubai",


    "CCTV cameras Dubai",
    "Hikvision distributor UAE",
    "security camera price Dubai"
  ],
  "serviceType": "Security Camera Solutions",
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
    "price": "299",
    "priceValidUntil": "2024-12-31",
    "availability": "https://schema.org/InStock",
    "hasMerchantReturnPolicy": true
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Enhanced FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I buy Hikvision security cameras in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can buy Hikvision security cameras from our authorized store in Dubai, UAE. We offer the best prices on CCTV, surveillance systems, and security solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Does Hikvision Dubai offer CCTV installation services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We provide professional CCTV installation in Dubai and across the UAE. Our experts ensure a secure and seamless setup."
      }
    },
    {
      "@type": "Question",
      "name": "What is the price range of Hikvision security cameras in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Hikvision security cameras range from affordable entry-level options to advanced professional systems. We offer competitive prices starting from AED X for basic cameras to AED Y for advanced surveillance solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer Hikvision NVR and DVR systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer a complete range of Hikvision NVR and DVR systems. Our selection includes both basic and advanced models suitable for home and business security needs."
      }
    }
  ]
};

const About = () => {
  return (
    <>
      <Head>
        <title>About Hikvision Dubai | Leading Security Camera Provider in UAE</title>
        <meta
          name="description"
          content="Learn about Hikvision Dubai, your trusted authorized reseller of security cameras & surveillance systems in UAE. Expert CCTV installation & support services available."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Hikvision Dubai | Leading Security Camera Provider in UAE" />
        <meta property="og:description" content="Learn about Hikvision Dubai, your trusted authorized reseller of security cameras & surveillance systems in UAE. Expert CCTV installation & support services available." />
        <meta property="og:image" content="https://hikvisionuae.ae/images/hikvision-about.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/About" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Hikvision Dubai | Leading Security Camera Provider in UAE" />
        <meta name="twitter:description" content="Learn about Hikvision Dubai, your trusted authorized reseller of security cameras & surveillance systems in UAE. Expert CCTV installation & support services available." />
        <meta name="twitter:image" content="https://hikvisionuae.ae/images/hikvision-about.jpg" />

        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Your Trusted Hikvision Reseller in Dubai</p>
          </div>
        </div>

        {/* Main Content with Image and Text */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src={img.src}
                alt="Hikvision Security Products"
                className="rounded-lg shadow-xl w-full h-auto max-h-[600px] object-cover"
                width={600}
                height={400}
                sizes="(max-width: 400px) 100vw, 100vw"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                At Hikvision-Dubai, we take pride in being a recognized and authorized Reseller of Hikvision technologies in Dubai, UAE. Our vast inventory boasts a diverse range of state-of-the-art Hikvision products designed to cater to the modern-day security needs. From hybrid DVRs and NVRs to high-definition IP cameras, network PTZ cameras, speed domes, and compression cards, our product portfolio is comprehensive and cutting-edge.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With a keen eye for detail and a commitment to delivering unmatched quality, we have carved a niche for ourselves as a leading Hikvision Reseller in Dubai. Our reputation is underpinned by the trust and loyalty of a broad clientele base spanning various sectors, including educational institutions and corporate enterprises. The surveillance solutions we offer aren't just about products; they are tailored experiences optimized to address the unique security challenges of each domain.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our core strength lies in understanding our clients' requirements and delivering solutions that not only meet but often exceed their expectations. Offering superior products at cost-effective prices is a promise we've held dear since our inception.
              </p>
            </div>
          </div>

          {/* Core Technologies Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Core Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">AI & Deep Learning</h3>
                <p className="text-gray-600">
                  Advanced artificial intelligence and deep learning algorithms power our smart cameras and analytics systems, 
                  enabling features like facial recognition, behavior analysis, and intelligent vehicle monitoring.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">Video Technology</h3>
                <p className="text-gray-600">
                  Industry-leading video compression, 4K resolution support, and low-light performance ensure 
                  superior image quality and efficient storage utilization.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">IoT & Cloud</h3>
                <p className="text-gray-600">
                  Cloud-based video services and IoT platform integration enable remote access, real-time monitoring, 
                  and seamless device management across locations.
                </p>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Product Categories</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Video Security', count: '1000+' },
                { title: 'Access Control', count: '200+' },
                { title: 'Video Intercom', count: '150+' },
                { title: 'Alarm Systems', count: '300+' },
              ].map((category, index) => (
                <div key={index} className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">{category.count}</div>
                  <div className="text-gray-700">{category.title} Products</div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Presence */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Global Presence</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-4">International Operations</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Regional headquarters in multiple continents</li>
                    <li>• R&D centers in North America, Europe, and Asia</li>
                    <li>• Local support teams in 150+ countries</li>
                    <li>• ISO 9001:2015 certified manufacturing facilities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-4">Industry Recognition</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Forbes Global 2000 Company</li>
                    <li>• Top Security Manufacturer Worldwide</li>
                    <li>• Multiple Innovation Awards</li>
                    <li>• Leading Patent Holder in Security Industry</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
