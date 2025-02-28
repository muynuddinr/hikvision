import React from 'react';
import Image from 'next/image';
import img from '../../../public/banner2.jpg';
import Head from 'next/head';
import Script from 'next/script';

// Schema for the section
const textImageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Hikvision Security Solutions UAE",
  "description": "Experience cutting-edge security technology with Hikvision in the UAE. Comprehensive security solutions featuring advanced surveillance systems, smart cameras, and integrated security platforms.",
  "brand": {
    "@type": "Brand",
    "name": "Hikvision"
  },
  "image": img.src,
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "AED",
    "price": "199.00",
    "priceValidUntil": "2025-12-31",
    "seller": {
      "@type": "Organization",
      "name": "Hikvision UAE"
    }
  },
  "provider": {
    "@type": "Organization",
    "name": "Hikvision UAE",
    "url": "https://hikvisionuae.ae"
  }
};

const TextImage = () => {
  return (
    <>
      <Head>
        <title>Hikvision UAE | Leading Security Solutions Provider</title>
        <meta
          name="description"
          content="Experience cutting-edge security technology with Hikvision in the UAE. Professional security solutions, surveillance systems, and technical support available."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hikvision UAE | Leading Security Solutions Provider" />
        <meta property="og:description" content="Experience cutting-edge security technology with Hikvision in the UAE. Professional security solutions and support available." />
        <meta property="og:image" content={img.src} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hikvision UAE | Security Solutions Provider" />
        <meta name="twitter:description" content="Experience cutting-edge security technology with Hikvision in the UAE." />
        <meta name="twitter:image" content={img.src} />
        
        {/* Additional SEO */}
        <meta name="keywords" content="Hikvision UAE, security solutions UAE, surveillance systems Dubai, CCTV cameras UAE, security cameras Dubai, Hikvision distributor UAE" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae" />
      </Head>

      <Script
        id="textimage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(textImageSchema) }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 hover:opacity-75 transition-opacity"></div>
                <Image
                  src={img.src}
                  alt="Hikvision Security Solutions"
                  width={1000}
                  height={1200}
                  className="w-[1000px] h-[450px] object-fill object-"
                  priority
                  quality={90}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">
                <span className="text-red-600">Hikvision UAE</span>{' '}
                <span className="text-black">Security Solutions</span>
              </h2>
              <p className="text-black leading-relaxed">
                Experience cutting-edge security technology with Hikvision in the UAE. We provide comprehensive security solutions featuring advanced surveillance systems, smart cameras, and integrated security platforms designed for the unique needs of UAE businesses and properties.
              </p>
              <p className="text-black leading-relaxed">
                Choose Hikvision UAE for:
              </p>
              <ul className="list-disc list-inside text-black space-y-2">
                <li>Complete range of Hikvision products</li>
                <li>Professional system integration</li>
                <li>Local technical support</li>
                <li>Customized security solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextImage;
