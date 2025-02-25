"use client"
import Image from 'next/image'
import darkfighter from '../../../public/darkfighter.png'
import tandemvu from '../../../public/tandem.png'
import colorvu from '../../../public/color.png'
import { Metadata } from 'next'
import Script from 'next/script'

interface TechnologyCardProps {
  title: string;
  logoSrc: string;
  description?: string;
  learnMoreUrl?: string;
  logoAlt?: string;
}

const TechnologyCard = ({ 
  title, 
  logoSrc, 
  description, 
  learnMoreUrl,
  logoAlt 
}: TechnologyCardProps) => {
  return (
    <div 
      className="group relative bg-white
                rounded-[2rem] p-8 flex flex-col items-center justify-center min-h-[420px]
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
                hover:shadow-[0_8px_30px_rgb(239,68,68,0.1)]
                transition-all duration-500 ease-out
                border border-gray-100/50
                hover:border-red-200/50
                backdrop-blur-sm
                overflow-hidden"
      role="article"
      tabIndex={0}
    >
      {/* Remove or simplify decorative background elements */}
      <div className="absolute inset-0 bg-white opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative w-48 h-32 mb-8 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100/10 to-transparent 
                     rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-500" />
        <Image
          src={logoSrc}
          alt={logoAlt || `${title} logo`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={true}
          className="transition-all duration-500 ease-out group-hover:scale-110 
                   drop-shadow-lg object-contain"
        />
      </div>

      <h2 className="relative text-2xl font-bold mb-4 text-center z-10
                   text-black
                   transition-all duration-500">
        {title}
      </h2>

      {description && (
        <p className="relative text-black text-center text-sm mb-8 max-w-[280px] 
                    leading-relaxed transition-all duration-500 ease-out z-10
                    group-hover:text-gray-900">
          {description}
        </p>
      )}

      {learnMoreUrl && (
        <a
          href={learnMoreUrl}
          className="absolute bottom-0 left-0 right-0 py-5
                   bg-gradient-to-r from-red-600 to-red-700 
                   text-white text-center font-semibold text-sm
                   transform translate-y-full group-hover:translate-y-0 
                   transition-all duration-500 ease-out
                   hover:from-red-700 hover:to-red-800
                   active:from-red-800 active:to-red-900
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                   uppercase tracking-wider"
          aria-label={`Learn more about ${title}`}
        >
          Explore Technology
        </a>
      )}
    </div>
  );
};

const TechnologyGrid = () => {
  const technologies: TechnologyCardProps[] = [
    {
      title: "DarkFighter Technology",
      logoSrc: darkfighter.src,
      description: "Advanced low-light imaging technology optimized for UAE's challenging lighting conditions. Perfect for 24/7 surveillance in Dubai's diverse environments.",
      learnMoreUrl: "/Darkfighter",
      logoAlt: "DarkFighter Technology UAE"
    },
    {
      title: "TandemVu Technology",
      logoSrc: tandemvu.src,
      description: "Dual-lens security solution designed for UAE's commercial spaces. Combines thermal and optical imaging for comprehensive surveillance coverage.",
      learnMoreUrl: "/Tandemvu",
      logoAlt: "TandemVu Technology UAE"
    },
    {
      title: "ColorVu Technology",
      logoSrc: colorvu.src,
      description: "Full-color night vision technology adapted for UAE conditions. Delivers crystal-clear color imaging even in complete darkness.",
      learnMoreUrl: "/Colorvu",
      logoAlt: "ColorVu Technology UAE"
    },
    {
      title: "AcuSense Technology",
      logoSrc: darkfighter.src,
      description: "AI-powered security detection optimized for UAE businesses. Reduces false alarms while ensuring accurate threat detection.",
      learnMoreUrl: "/Acusense",
      logoAlt: "AcuSense Technology UAE"
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-6xl font-bold text-center mb-6 leading-tight">
          <span className="text-black">Our Tech</span>
          <span className="text-red-600">nologies</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                      gap-8 xl:gap-12">
          {technologies.map((tech: TechnologyCardProps) => (
            <TechnologyCard
              key={tech.title}
              {...tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const metadata: Metadata = {
  title: 'Hikvision Security Technologies UAE | Official Distributor Dubai',
  description: 'Leading Hikvision distributor in UAE offering DarkFighter, TandemVu, ColorVu & AcuSense technologies. Expert CCTV installation & security solutions in Dubai. Contact +971 50 989 3134.',
  keywords: 'Hikvision UAE, Hikvision Dubai, Hikvision distributor UAE, security cameras Dubai, CCTV installation UAE, DarkFighter technology, TandemVu cameras, ColorVu systems, AcuSense solutions, surveillance Dubai',
  alternates: {
    canonical: 'https://www.hikvisionuae.ae/'
  },
  openGraph: {
    title: 'Hikvision Security Technologies UAE | Official Distributor Dubai',
    description: 'Discover advanced Hikvision security solutions in UAE. Premium CCTV cameras & expert installation services in Dubai. Visit our showroom or call +971 50 989 3134.',
    type: 'website',
    locale: 'en_AE',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hikvision Security Technologies UAE',
      },
    ],
    siteName: 'Hikvision UAE Official Distributor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hikvision Security Technologies UAE | Official Distributor',
    description: 'Leading Hikvision security solutions provider in UAE. Expert CCTV installation & support in Dubai.',
    creator: '@hikvisionuae',
    images: ['/og-image.jpg'],
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
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hikvision UAE',
  description: 'Official Hikvision dealer in Dubai, providing premium security cameras and CCTV solutions',
  url: 'https://www.hikvisionuae.ae',
  logo: 'https://www.hikvisionuae.ae/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971509893134',
    contactType: 'sales',
    areaServed: 'AE',
    availableLanguage: ['en', 'ar']
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 12, Al khabaisi, Abu hail',
    addressLocality: 'Dubai',
    addressCountry: 'UAE'
  },
  sameAs: [
    'https://www.facebook.com/hikvisionuae',
    'https://www.instagram.com/hikvisionuae',
    // Add your actual social media URLs
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hikvision Security Technologies',
    itemListElement: [
      {
        '@type': 'Product',
        name: 'DarkFighter Technology',
        image: 'https://www.hikvisionuae.ae/darkfighter.png',
        description: 'Advanced low-light imaging technology for superior night vision surveillance in UAE conditions',
        brand: {
          '@type': 'Brand',
          name: 'Hikvision'
        },
        category: 'Security Cameras',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'AED',
          price: '999',
          minPrice: '999',
          maxPrice: '4999',
          offerCount: '5',
          availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1'
        }
      },
      {
        '@type': 'Product',
        name: 'TandemVu Technology',
        image: 'https://www.hikvisionuae.ae/tandem.png',
        description: 'Dual-lens security camera technology optimized for Middle East surveillance needs',
        brand: {
          '@type': 'Brand',
          name: 'Hikvision'
        },
        category: 'Security Cameras',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'AED',
          price: '1299',
          minPrice: '1299',
          maxPrice: '5999',
          offerCount: '4',
          availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          reviewCount: '98',
          bestRating: '5',
          worstRating: '1'
        }
      },
      {
        '@type': 'Product',
        name: 'ColorVu Technology',
        image: 'https://www.hikvisionuae.ae/color.png',
        description: 'Full-color night vision security cameras perfect for UAE commercial and residential use',
        brand: {
          '@type': 'Brand',
          name: 'Hikvision'
        },
        category: 'Security Cameras',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'AED',
          price: '1499',
          minPrice: '1499',
          maxPrice: '6999',
          offerCount: '3',
          availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.6',
          reviewCount: '76',
          bestRating: '5',
          worstRating: '1'
        }
      },
      {
        '@type': 'Product',
        name: 'AcuSense Technology',
        image: 'https://www.hikvisionuae.ae/acusense.png',
        description: 'AI-powered security detection system for enhanced surveillance in Dubai and UAE',
        brand: {
          '@type': 'Brand',
          name: 'Hikvision'
        },
        category: 'Security Cameras',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'AED',
          price: '1999',
          minPrice: '1999',
          maxPrice: '9999',
          offerCount: '2',
          availability: 'https://schema.org/InStock'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.5',
          reviewCount: '58',
          bestRating: '5',
          worstRating: '1'
        }
      }
    ]
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708
    },
    geoRadius: '100km',
    description: 'Dubai, Abu Dhabi, and UAE region'
  }
};

const SchemaScript = () => {
  return (
    <Script
      id="schema-script"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function Page() {
  return (
    <>
      <TechnologyGrid />
      
      <SchemaScript />
    </>
  );
}
