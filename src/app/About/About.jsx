import React from 'react';
import img from '../../../public/Hikvision about.jpg'
import Head from 'next/head';
import Script from 'next/script';

// SEO Schema
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://hikvisionuae.ae/About",
  "name": "Hikvision UAE - Official Security Solutions Provider",
  "description": "Leading authorized Hikvision distributor in UAE. Expert security camera solutions, CCTV installation, and surveillance systems across Dubai, Abu Dhabi, and UAE.",
  "url": "https://hikvisionuae.ae",
  "logo": "https://hikvisionuae.ae/images/hikvision-logo.png",
  "image": "https://hikvisionuae.ae/images/hikvision-about.jpg",
  "telephone": "+971 50 989 3134",
  "email": "sales@hikvisionuae.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No. 12, Al khabaisi, Abu hail",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "UAE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.2048",
    "longitude": "55.2708"
  },
  "sameAs": [
    "https://www.facebook.com/HikvisionUAE",
    "https://twitter.com/HikvisionUAE",
    "https://www.linkedin.com/company/hikvision-uae"
  ]
};

const About = () => {
  return (
    <>
      <Head>
        <title>Hikvision UAE | #1 Security Camera & CCTV Solutions Provider Dubai</title>
        <meta 
          name="description" 
          content="Leading Hikvision distributor in UAE offering professional security cameras, CCTV systems & surveillance solutions. Best prices & expert installation in Dubai, Abu Dhabi & UAE."
        />
        <meta 
          name="keywords" 
          content="Hikvision UAE, Hikvision Dubai, CCTV Dubai, security cameras UAE, Hikvision distributor UAE, CCTV installation Dubai, surveillance systems UAE, Hikvision dealer Dubai, security solutions UAE"
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Hikvision UAE | #1 Security Camera & CCTV Solutions Provider Dubai" />
        <meta property="og:description" content="Leading Hikvision distributor in UAE offering professional security cameras, CCTV systems & surveillance solutions. Best prices & expert installation in Dubai." />
        <meta property="og:image" content="https://hikvisionuae.ae/images/hikvision-about.jpg" />
        <meta property="og:url" content="https://hikvisionuae.ae/About" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hikvision UAE - Official Security Solutions Provider" />
        <meta name="twitter:description" content="Professional security cameras & CCTV solutions in UAE. Authorized Hikvision distributor offering expert installation & support." />
        <meta name="twitter:image" content="https://hikvisionuae.ae/images/hikvision-about.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/About" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
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
