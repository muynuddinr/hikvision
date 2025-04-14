"use client"
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Script from 'next/script';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Successfully subscribed to newsletter!');
        setEmail('');
      } else {
        toast.error(data.message || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast.error('An error occurred');
    } finally {
      setLoading(false);
    }

  };

  // Add JSON-LD Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SecurityBusiness",
    "name": "Hikvision UAE",
    "description": "Leading provider of Hikvision security cameras and surveillance solutions in UAE, Dubai, and Middle East",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 12, Al khabaisi, Abu hail",
      "addressLocality": "Dubai",
      "addressCountry": "UAE"
    },
    "telephone": "+971 50 989 3134",
    "sameAs": [
      "https://www.linkedin.com/company/hikvision-uae/",
      "https://www.facebook.com/hikvisionuae"
    ],

    "keywords": "Hikvision UAE, security cameras Dubai, Hikvision Dubai, surveillance systems UAE, Hikvision Middle East, CCTV Dubai, security solutions UAE",
    "areaServed": ["Dubai", "UAE", "Middle East"],
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  return (
    <>
      {/* Add Schema Script */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <footer className="bg-white text-gray-600" itemScope itemType="https://schema.org/WPFooter">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6">
          {/* Top Banner */}
          {/* <div className="bg-red-600 rounded-lg p-8 mb-12 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2">Start Your Journey Today</h2>
              <p className="text-gray-400 mb-4 md:mb-0">
                Experience the difference with our premium services
              </p>
            </div>
            <button className="px-8 py-3 bg-white text-red-600 rounded-full font-bold hover:bg-gray-100 transition duration-300 shadow-lg">
              Get Started
            </button>
          </div> */}

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2" itemProp="publisher" itemScope itemType="https://schema.org/Organization">
              <h3 className="text-gray-900 text-xl font-bold mb-4" itemProp="name">Hikvision UAE.</h3>
              <p className="text-gray-600 mb-6 pr-4" itemProp="description">
                Leading provider of security cameras and surveillance solutions in Dubai and UAE. Authorized Hikvision distributor serving the Middle East region.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-red-500 transition">Home</Link></li>
                <li><Link href="/About" className="hover:text-red-500 transition">About Us</Link></li>
                <li><Link href="/Contact" className="hover:text-red-500 transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Technologies</h3>
              <ul className="space-y-2">
                <li><Link href="/Tandemvu" className="hover:text-red-500 transition">Tandemvu Technology</Link></li>
                <li><Link href="/Acusense" className="hover:text-red-500 transition">Acusense Technology</Link></li>
                <li><Link href="/Darkfighter" className="hover:text-red-500 transition">Darkfighter Technology</Link></li>
                <li><Link href="/Colorvu" className="hover:text-red-500 transition">Colorvu Technology</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            {/* <div>
              <h3 className="text-gray-900 font-bold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link href="/Manufacturing" className="hover:text-red-500 transition">Manufacturing Solution</Link></li>
                <li><Link href="/Retail" className="hover:text-red-500 transition">Retail Solution</Link></li>
                <li><Link href="/Healthcare" className="hover:text-red-500 transition">Healthcare Solution</Link></li>
                <li><Link href="/Education" className="hover:text-red-500 transition">Education Solution</Link></li>
              </ul>
            </div> */}
            {/* Newsletter */}
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Newsletter</h3>
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="bg-gray-50 border border-gray-200 rounded px-4 py-2 
                           focus:outline-none focus:border-red-500 text-gray-900"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 
                           transition duration-300 disabled:opacity-50"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>

            {/* Add address information with schema markup */}
            <div itemScope itemType="https://schema.org/LocalBusiness">
              <h3 className="text-gray-900 font-bold mb-4">Contact Us</h3>
              <address className="not-italic">
                <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">No. 12, Al khabaisi, Abu hail</span><br />
                  <span itemProp="addressLocality">Dubai</span>,
                  <span itemProp="addressCountry">UAE</span>
                </p>
                <p className="mt-2">
                  <span itemProp="telephone">
                    <a href="tel:+971509893134" className="hover:text-red-500">+971 50 989 3134</a>
                  </span>
                </p>
              </address>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} Hikvision UAE. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-red-500 transition">Privacy Policy</Link>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-red-500 transition">Terms of Service</Link>
                <Link href="/cookies" className="text-sm text-gray-400 hover:text-red-500 transition">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

