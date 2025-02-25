import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Cookie Policy Schema
const cookiePolicySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://hikvisionuae.ae/cookies",
  "name": "Cookie Policy - Hikvision UAE",
  "headline": "Cookie Policy for Hikvision UAE",
  "description": "Learn about how Hikvision UAE uses cookies and similar technologies on our website. Understand your choices and how to manage cookie preferences.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/cookies"
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": "2024-03-19T08:00:00+04:00",
  "publisher": {
    "@type": "Organization",
    "name": "Hikvision UAE",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hikvisionuae.ae/images/hikvision-logo.jpg"
    }
  },
  "keywords": [
    "cookie policy UAE",
    "Hikvision cookies",
    "privacy policy Dubai",
    "website cookies UAE",
    "Hikvision UAE privacy",
    "cookie preferences Dubai",
    "hikvision uae",
    "hikvision dubai",
    "hikvision privacy policy",
    "hikvision cookie policy"
  ]
};

const CookiePolicy = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy | Hikvision UAE - Privacy & Cookie Information</title>
        <meta
          name="description"
          content="Learn about Hikvision UAE's cookie policy. Understand how we use cookies to enhance your browsing experience and protect your privacy. Manage your cookie preferences."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Cookie Policy | Hikvision UAE - Privacy & Cookie Information" />
        <meta property="og:description" content="Learn about Hikvision UAE's cookie policy and how we use cookies to enhance your browsing experience while protecting your privacy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/cookies" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Cookie Policy | Hikvision UAE" />
        <meta name="twitter:description" content="Learn about Hikvision UAE's cookie policy and how we use cookies to enhance your browsing experience while protecting your privacy." />

        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/cookies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        id="cookie-policy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiePolicySchema) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">About This Cookie Policy</h2>
            <p className="mb-4">
              This Cookie Policy explains how Hikvision UAE, authorized distributor of Hikvision security solutions in the UAE,
              uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are
              and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely
              used by website owners to make their websites work, or work more efficiently, as well as to provide reporting information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To enable certain functions of our website</li>
              <li>To provide analytics and understand how you use our website</li>
              <li>To store your preferences for product configurations and inquiries</li>
              <li>To enable our e-commerce functionality for Hikvision products</li>
              <li>To improve our website security and protect against unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Essential Cookies:</h3>
                <p>These are necessary for the website to function properly and cannot be switched off in our systems.</p>
              </div>
              <div>
                <h3 className="font-semibold">Performance Cookies:</h3>
                <p>These allow us to count visits and traffic sources to measure and improve our website&apos;s performance.</p>
              </div>
              <div>
                <h3 className="font-semibold">Functional Cookies:</h3>
                <p>These enable enhanced functionality and personalization, such as product preferences and chat services.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your Cookie Choices</h2>
            <p className="mb-4">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
              If you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:<br />
              Email: sales@hikvisionuae.ae<br />
              Phone: +971 50 989 3134<br />
              Address: No. 12, Al khabaisi, Abu hail<br />
              Dubai, United Arab Emirates
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
