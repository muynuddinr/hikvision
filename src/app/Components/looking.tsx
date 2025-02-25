"use client"
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Looking Schema
const lookingSchema = {
  "@context": "https://schema.org",
  "@type": ["Service", "Organization"],
  "@id": "https://hikvisionuae.ae/",
  "name": "Professional Hikvision Security Solutions UAE",
  "headline": "Professional Hikvision Security Solutions in UAE",
  "description": "Leading Hikvision distributor in UAE offering comprehensive security solutions and professional-grade surveillance equipment. Expert technical support and competitive pricing available.",
  "brand": {
    "@type": "Brand",
    "name": "Hikvision"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/"
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": new Date().toISOString(),
  "provider": {
    "@type": "Organization",
    "name": "Hikvision UAE",
    "url": "https://hikvisionuae.ae",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hikvisionuae.ae/logo.png"
    }
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "AED",
    "price": "0",
    "availability": "https://schema.org/InStock"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971 50 989 3134",
    "contactType": "sales",
    "areaServed": "UAE",
    "availableLanguage": ["English", "Arabic"]
  }
};

const Looking = () => {
  return (
    <>
      <Head>
        <title>Professional Hikvision Security Solutions in UAE | Official Distributor</title>
        <meta
          name="description"
          content="Leading Hikvision distributor in UAE offering comprehensive security solutions and professional-grade surveillance equipment. Contact our technical team for expert support and competitive pricing."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional Hikvision Security Solutions in UAE | Official Distributor" />
        <meta property="og:description" content="Leading Hikvision distributor in UAE offering comprehensive security solutions and professional-grade surveillance equipment. Contact our technical team for expert support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Hikvision Security Solutions in UAE" />
        <meta name="twitter:description" content="Leading Hikvision distributor in UAE offering comprehensive security solutions and professional-grade surveillance equipment." />
        
        {/* SEO Keywords */}
        <meta name="keywords" content="Hikvision UAE, security solutions UAE, surveillance equipment Dubai, CCTV distributor UAE, Hikvision authorized dealer, security systems Dubai, professional surveillance UAE" />
        
        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        id="looking-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lookingSchema) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-black">Professional </span>
          <span className="text-red-600">Hikvision Security Solutions in UAE</span>
        </h1>
        
        <h2 className="text-2xl font-semibold mb-6">
          Authorized Hikvision Distributor - UAE
        </h2>
        
        <p className="text-lg leading-relaxed">
          As a trusted Hikvision distributor in UAE, we offer comprehensive security solutions and professional-grade surveillance equipment. Our extensive inventory includes the latest Hikvision products at competitive prices. For detailed product information and pricing, please contact our technical sales team at <a href="tel:+971 50 989 3134" className="text-blue-600 hover:underline">+971 50 989 3134</a>. Our experts will assist you in selecting the right security solutions tailored to your requirements.
        </p>
      </div>
    </>
  );
};

export default Looking;
