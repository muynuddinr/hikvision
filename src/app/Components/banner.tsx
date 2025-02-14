'use client'
import Link from 'next/link'
import banner from '../../../public/banner.jpg'
import { Metadata } from 'next'

// Note: Since this is a client component, metadata should be in a parent layout or page component
// Here's the metadata object you should add to the nearest parent page/layout
export const metadata: Metadata = {
  title: 'Hikvision UAE | Official Distributor & Supplier in UAE - Security Solutions',
  description: 'Leading Hikvision distributor and supplier in UAE. Authorized dealer for CCTV cameras, security systems & support in Dubai. Contact us for Hikvision products, pricing & technical support.',

  keywords: 'hikvision uae, best cameras in uae, hikvision dubai, hikvision middle east, best cameras in dubai, hikvision distributor uae, hikvision supplier uae, hikvision authorized distributor in uae, hikvision support uae, hikvision dealer dubai',
  alternates: {
    canonical: 'https://www.hikvisionuae.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://www.hikvisionuae.com',
    siteName: 'Hikvision UAE Official Distributor',
    title: 'Hikvision UAE - Official Distributor & Security Solutions Provider',
    description: 'Authorized Hikvision distributor in UAE. Expert supplier of CCTV cameras, security systems & technical support in Dubai. Get official Hikvision products & solutions.',

    images: [{
      url: banner.src,
      width: 1200,
      height: 630,
      alt: 'Hikvision UAE Official Distributor',

    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hikvision UAE - Official Distributor & Security Solutions Provider',
    description: 'Leading Hikvision distributor and supplier in UAE. Authorized dealer for CCTV cameras, security systems & support in Dubai. Contact us for Hikvision products, pricing & technical support.',
    images: [banner.src],
    creator: '@hikvisionuae',
    site: '@hikvisionuae',

  },
  other: {
    'application/ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://www.hikvisionuae.com/',
        name: 'Hikvision UAE Official Distributor',
        url: 'https://www.hikvisionuae.com',


        logo: {
          '@type': 'ImageObject',
          url: 'https://www.hikvisionuae.com/logo.png',
          width: 112,
          height: 112,
        },

        description: 'Authorized Hikvision distributor and supplier in UAE, providing official Hikvision products, support, and solutions.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+971 509893134',
          contactType: 'sales',
          areaServed: ['Dubai', 'UAE', 'Oman'],
          availableLanguage: ['English', 'Arabic'],
        },
      },
      {
        '@context': 'https://schema.org',

        '@type': 'Organization',
        '@id': 'https://www.hikvisionuae.com/supplier',
        name: 'Hikvision UAE Supplier',
        description: 'Official supplier and distributor of Hikvision security products in UAE',


        brand: {
          '@type': 'Brand',
          name: 'Hikvision'
        },
        areaServed: {
          '@type': 'Country',
          name: 'United Arab Emirates',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Hikvision Security Systems',
        description: 'Official Hikvision security cameras and surveillance systems',
        brand: {
          '@type': 'Brand',
          name: 'Hikvision'
        },
        offers: {
          '@type': 'AggregateOffer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'AED',
          seller: {
            '@type': 'Organization',
            name: 'Hikvision UAE Official Distributor',
            url: 'https://www.hikvisionuae.com'
          }
        }
      },

      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [{
          '@type': 'Question',
          name: 'Are you an authorized Hikvision distributor in UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we are an authorized Hikvision distributor in UAE, providing official products, warranty, and technical support.'
          }
        }, {
          '@type': 'Question',
          name: 'Where can I get Hikvision support in UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide comprehensive Hikvision support including technical assistance, warranty services, and after-sales support across UAE.'
          }
        }]
      }
    ]),
  }
}

export default function Banner() {
  return (
    <div className="relative bg-white h-[600px] flex items-center">
      {/* Main Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl font-medium">
            <span className="text-red-600">Profess</span><span className="text-gray-900">ional Security</span><br />
            <span className="text-red-600">Solut</span><span className="text-gray-900">ions in Dubai</span>
          </h1>
          
          <p className="text-lg">
            <span className="text-red-600">Providing cutting-edge surv</span><span className="text-gray-900">eillance systems and security</span><br />
            <span className="text-red-600">equipment for your pe</span><span className="text-gray-900">ace of mind.</span>
          </p>

          <div className="pt-4">
            <Link 
              href="/Contact"
              className="inline-block px-8 py-4 border-2 border-red-600 bg-transparent hover:bg-red-600 transition-colors duration-300 rounded-md shadow-md hover:shadow-lg"
            >
              <span className="text-black hover:text-white transition-colors duration-300">Get Started</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-0" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />

    </div>
  )
}
