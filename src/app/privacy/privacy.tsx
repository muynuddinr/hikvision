'use client';
import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Script from 'next/script';

// Privacy Policy Schema
const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://hikvisionuae.ae/privacy",
  "name": "Privacy Policy - Hikvision UAE",
  "description": "Learn about how Hikvision UAE handles and protects your personal information. Our privacy policy outlines data collection, usage, and your rights under UAE law.",
  "keywords": ["Hikvision UAE", "privacy policy", "data protection", "security solutions", "UAE law","Hikvision UAE privacy policy","Hikvision UAE data protection","Hikvision UAE security solutions","Hikvision UAE UAE law" , "hikvision uae privacy policy", "hikvision uae data protection", "hikvision uae security solutions", "hikvision uae UAE law"],
  "publisher": {
    "@type": "Organization",
    "name": "Hikvision UAE",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hikvisionuae.ae/images/hikvision-logo.jpg"
    }
  },
  "datePublished": "2024-01-01T08:00:00+04:00",
  "dateModified": "2024-03-19T08:00:00+04:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hikvisionuae.ae/privacy"
  }
};

const PrivacyPolicy = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <>
      <Head>
        <title>Privacy Policy | Hikvision UAE - Data Protection & Security</title>
        <meta
          name="description"
          content="Learn how Hikvision UAE protects your data. Our privacy policy details our commitment to securing your information while providing top-tier security solutions in the UAE."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Hikvision UAE - Data Protection & Security" />
        <meta property="og:description" content="Learn how Hikvision UAE protects your data. Our privacy policy details our commitment to securing your information while providing top-tier security solutions in the UAE." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hikvisionuae.ae/privacy" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Hikvision UAE - Data Protection & Security" />
        <meta name="twitter:description" content="Learn how Hikvision UAE protects your data. Our privacy policy details our commitment to securing your information while providing top-tier security solutions in the UAE." />

        {/* SEO Essentials */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hikvisionuae.ae/privacy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        id="privacy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to our Privacy Policy. This document outlines how we collect, use, and protect your personal information
            as a Hikvision security solutions distributor in the UAE.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information (name, email, phone number, company details)</li>
            <li>Business registration and trade license information</li>
            <li>Purchase history and product preferences</li>
            <li>Technical information related to product installations and support</li>
            <li>CCTV and security system specifications for project planning</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and fulfill your orders for Hikvision products</li>
            <li>Provide technical support and warranty services</li>
            <li>Send updates about new products, features, and security patches</li>
            <li>Comply with UAE security and surveillance regulations</li>
            <li>Improve our distribution and support services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-4">
            We implement strict security measures to protect your information, following both UAE data protection laws
            and Hikvision&apos;s global security standards. This includes encryption, secure servers, and restricted access protocols.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">
            Under UAE law, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Request corrections to your data</li>
            <li>Ask for deletion of your information</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="pl-6">
            <p>Email: privacy@yourdomain.ae</p>
            <p>Phone: +971 XX XXX XXXX</p>
            <p>Address: [Your Business Address in UAE]</p>
          </div>
        </section>

        <footer className="mt-12 text-sm text-gray-600">
          <p>Last updated: {currentDate}</p>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;



