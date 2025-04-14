import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// SEO Schema
const acusenseSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Product"],
  "@id": "https://hikvisionuae.ae/Acusense",
  "name": "Hikvision UAE - Official Security Solutions Provider",
  "description": "Leading Hikvision distributor in UAE offering professional security cameras, CCTV systems & surveillance solutions. Best prices & expert installation in Dubai.",
  "url": "https://hikvisionuae.ae",
  "brand": {
    "@type": "Brand",
    "name": "Hikvision"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "UAE"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5"
  }
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
      title: "Integration with UAE Security Infrastructures",
      description: "Seamlessly integrates with UAE's existing security networks and smart city initiatives, compatible with local VMS systems and security protocols for comprehensive protection."
    }
  ];

  return (
    <>
      <Head>
        <title>Hikvision UAE | #1 Security Camera Provider in Dubai & UAE</title>
        <meta 
          name="description" 
          content="Official Hikvision distributor in UAE. Expert CCTV installation, security cameras & surveillance systems. Best prices in Dubai, Abu Dhabi & across UAE. ☎ Call Now!"
        />
        <meta 
          name="keywords" 
          content="Hikvision UAE, Hikvision Dubai, CCTV Dubai, security cameras UAE, Hikvision distributor UAE, CCTV installation Dubai, surveillance systems UAE"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hikvision UAE - Leading Security Camera Provider" />
        <meta property="og:description" content="Official Hikvision distributor in UAE. Expert security solutions & CCTV installation across Dubai & UAE." />
        <meta property="og:url" content="https://hikvisionuae.ae" />
        <meta property="og:type" content="website" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Script
        id="acusense-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(acusenseSchema) }}
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
