'use client'
import Link from 'next/link'
import banner from '../../../public/banner.jpg'
import Head from 'next/head'
import Script from 'next/script'

// Banner Schema
const bannerSchema = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "Organization"],
  "@id": "https://hikvisionuae.ae/",
  "name": "Hikvision UAE Official Distributor",
  "headline": "Professional Security Solutions in UAE",
  "description": "Leading Hikvision distributor and supplier in UAE. Authorized dealer for CCTV cameras, security systems & support in Dubai. Contact us for Hikvision products, pricing & technical support.",
  "keywords": "Hikvision UAE, CCTV cameras UAE, security systems UAE, Dubai security solutions, Hikvision distributor UAE, Hikvision supplier UAE, Hikvision authorized distributor in UAE, Hikvision support UAE, Hikvision dealer Dubai, hikvision uae, hikvision dubai, hikvision security solutions, hikvision cctv, hikvision access control, hikvision intercom, hikvision video door phone, hikvision security cameras, hikvision security systems, hikvision security products, hikvision security solutions dubai, hikvision cctv dubai, hikvision access control dubai, hikvision intercom dubai, hikvision video door phone dubai, hikvision security cameras dubai, hikvision security systems dubai, hikvision security products dubai",
  "image": {
    "@type": "ImageObject",
    "url": "https://hikvisionuae.ae/banner.jpg",
    "width": 1200,
    "height": 630
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "AED",
    "price": "199.00",
    "lowPrice": 199,
    "highPrice": 9999,
    "offerCount": "100+",
    "availability": "https://schema.org/InStock"
  }
}

export default function Banner() {
  return (
    <>
      <Head>
        <title>Hikvision UAE - #1 Official Distributor & Security Solutions Provider</title>
        <meta
          name="description"
          content="Official Hikvision distributor in UAE offering premium security cameras & CCTV systems. Expert installation, 24/7 support & best prices in Dubai. Visit our showroom or call +971 50 989 3134."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hikvision UAE | Official Distributor & Security Solutions Provider" />
        <meta property="og:description" content="Authorized Hikvision distributor in UAE. Expert supplier of CCTV cameras, security systems & technical support in UAE. Get official Hikvision products & solutions." />
        <meta property="og:image" content={banner.src} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae" />
        <meta property="og:site_name" content="Hikvision UAE Official Distributor" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hikvision UAE - Official Distributor & Security Solutions Provider" />
        <meta name="twitter:description" content="Leading Hikvision distributor and supplier in UAE. Authorized dealer for CCTV cameras, security systems & support in Dubai." />
        <meta name="twitter:image" content={banner.src} />
        <meta name="twitter:creator" content="@hikvisionuae" />
        <meta name="twitter:site" content="@hikvisionuae" />

        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="hikvision uae, best cameras in uae, hikvision dubai, hikvision middle east, best cameras in dubai, hikvision distributor uae, hikvision supplier uae, hikvision authorized distributor in uae, hikvision support uae, hikvision dealer dubai" />
      </Head>

      <Script
        id="banner-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bannerSchema) }}
      />

      <div className="relative bg-white min-h-[85vh] sm:min-h-[600px] flex items-center">
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-0 z-10">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              <span className="text-red-600">Professional</span>
              <span className="text-gray-900"> Security</span>
              <br className="hidden sm:block" />
              <span className="text-red-600">Solutions</span>
              <span className="text-gray-900"> in UAE</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <span className="text-red-600">Providing cutting-edge surveillance</span>
              <span className="text-gray-900"> systems and security</span>
              <br className="hidden sm:block" />
              <span className="text-red-600">equipment for your peace</span>
              <span className="text-gray-900"> of mind.</span>
            </p>

            <div className="pt-4 sm:pt-6">
              <Link 
                href="/Contact"
                className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-red-600 bg-transparent hover:bg-red-600 transition-colors duration-300 rounded-md shadow-md hover:shadow-lg text-center"
              >
                <span className="text-black hover:text-white transition-colors duration-300 text-base sm:text-lg font-medium">Get Started</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Gradient overlay - Enhanced for mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-0" />
        
        {/* Background image - Optimized for mobile */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${banner.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: '0.9'
          }}
        />
      </div>
    </>
  )
}
