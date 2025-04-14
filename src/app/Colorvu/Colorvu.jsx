import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// SEO Schema
const colorvuSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Product"],
  "@id": "https://hikvisionuae.ae/Colorvu",
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

const Colorvu = () => {
  const features = [
    {
      title: "24/7 Full-Color Surveillance for UAE Climate",
      description: "ColorVu cameras are optimized for UAE's unique environmental conditions, delivering crystal-clear, full-color images around the clock. Perfect for monitoring Dubai's vibrant nightlife, residential compounds, and commercial areas with the same clarity as daylight."
    },
    {
      title: "Desert-Optimized Performance",
      description: "Specially designed with UAE's climate in mind, these cameras feature enhanced F1.0 super-aperture lenses that excel in both intense daylight and low-light conditions, ensuring consistent performance in the region's diverse lighting conditions."
    },
    {
      title: "Smart Environmental Lighting",
      description: "Equipped with intelligent supplemental lighting that automatically adjusts to UAE's ambient conditions, providing optimal visibility while respecting the architectural aesthetics of modern UAE developments."
    },
    {
      title: "Advanced Security Features",
      description: "Essential for UAE's premium properties and businesses, ColorVu cameras ensure crucial details like vehicle colors, license plates, and clothing are clearly visible 24/7, supporting local security and surveillance requirements."
    },
    {
      title: "UAE Weather-Resistant",
      description: "Engineered to withstand UAE's extreme climate conditions, including intense heat, sandstorms, and occasional rain, while maintaining exceptional image quality and reliability throughout the year."
    },
    {
      title: "Versatile UAE Applications",
      description: "Ideal for UAE's diverse infrastructure including shopping malls, hotel complexes, residential communities, and smart city initiatives where reliable color surveillance is crucial for security and monitoring."
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
        id="colorvu-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(colorvuSchema) }}
      />

      <div className="bg-[#8B1818] text-white py-20 px-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hikvision ColorVu UAE
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl">
            Advanced Full-Color Surveillance Solutions for the UAE Market
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Hikvision ColorVu Technology in UAE
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Hikvision ColorVu technology has been specifically optimized for the UAE market, offering unprecedented 24/7 full-color surveillance capabilities in the region's unique environmental conditions. Whether monitoring busy urban centers, luxury developments, or critical infrastructure, ColorVu cameras deliver exceptional performance with advanced features tailored to meet UAE's sophisticated security requirements.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Features of ColorVu Technology
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

export default Colorvu;
