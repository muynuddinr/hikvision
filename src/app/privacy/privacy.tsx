'use client';
import React, { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
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
  );
};

export default PrivacyPolicy;


