import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Terms Schema
const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://hikvisionuae.ae/terms",
  "name": "Terms & Conditions - Hikvision UAE",
  "description": "Official terms and conditions for Hikvision authorized distributors in UAE. Includes distributor requirements, product terms, warranty information, and legal compliance guidelines.",
  "keywords": [
    "terms and conditions UAE",
    "Hikvision terms",
    "Hikvision conditions",
    "Hikvision UAE terms",
    "Hikvision UAE conditions",
    "hikvision uae",
    "hikvision dubai",
    "hikvision middle east",
    "hikvision distributor uae",
    "hikvision supplier uae",
    "hikvision authorized distributor in uae",
    "hikvision support uae",
    "hikvision dealer dubai",
    "hikvision uae",
    "hikvision dubai",
    "hikvision middle east",
    "hikvision distributor uae",
    "hikvision supplier uae",
    "hikvision authorized distributor in uae",
  ],
  "publisher": {
    "@type": "Organization",
    "name": "Hikvision UAE",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hikvisionuae.ae/images/hikvision-logo.jpg"
    }
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": new Date().toISOString(),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/terms"
  }
};

const TermsPage = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Hikvision UAE Authorized Distributor</title>
        <meta
          name="description"
          content="Official terms and conditions for Hikvision authorized distributors in UAE. Learn about our distribution requirements, warranty policies, and legal compliance guidelines."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Terms & Conditions | Hikvision UAE Authorized Distributor" />
        <meta property="og:description" content="Official terms and conditions for Hikvision authorized distributors in UAE. Learn about our distribution requirements, warranty policies, and legal compliance guidelines." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/terms" />

        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/terms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        id="terms-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
        

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            These Terms and Conditions govern your relationship with us as an authorized Hikvision camera distributor in the UAE. By engaging with our services, you agree to comply with these terms and all applicable UAE laws and regulations regarding security equipment distribution.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Distributor Requirements</h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Valid UAE trade license for security equipment trading</li>
            <li className="mb-2">Compliance with UAE Security Industry Regulatory Agency (SIRA) requirements</li>
            <li className="mb-2">Maintenance of proper storage facilities for security equipment</li>
            <li className="mb-2">Adherence to Hikvision&apos;s authorized distributor guidelines</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Product Terms</h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">All products are genuine Hikvision items with valid warranties</li>
            <li className="mb-2">Products must be sold only to authorized buyers within the UAE</li>
            <li className="mb-2">Installation must comply with local security regulations</li>
            <li className="mb-2">Proper documentation must be maintained for all transactions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Warranty and Support</h2>
          <p className="mb-4">
            We provide warranty support in accordance with Hikvision&apos;s official warranty policies. All technical support and product servicing will be conducted through authorized channels only.
          </p>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Legal Compliance</h2>
          <p className="mb-4">
            Distributors must comply with all UAE federal and local laws, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">UAE Federal Law No. 2 of 2019 on Cybercrimes</li>
            <li className="mb-2">SIRA regulations for security equipment</li>
            <li className="mb-2">UAE Consumer Protection Laws</li>
            <li className="mb-2">Data protection and privacy regulations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Payment and Delivery</h2>
          <p className="mb-4">
            All transactions must be conducted through official channels with proper documentation. Payment terms and delivery schedules will be specified in individual purchase agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
          <p className="mb-4">
            For any inquiries regarding these terms or our distribution services, please contact us at:
            <br />
            Email: sales@hikvisionuae.ae
            <br />
            Phone: +971 50 989 3134
            <br />
            Address: No. 12, Al khabaisi, Abu hail
            <br />
            Dubai, United Arab Emirates
          </p>
        </section>

        <footer className="text-sm text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </>
  );
};

export default TermsPage;
