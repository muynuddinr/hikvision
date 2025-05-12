'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import hikvisionLogo from '../../../public/hikvision logo.jpg'
import { useEffect as useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

const dropdownMenus = {
  technologies: [
    { title: 'Tandemvu-technology', href: 'Tandemvu' },
    { title: 'Acusense-technology', href: 'Acusense' },
    { title: 'Darkfighter-technology', href: 'Darkfighter' },
    { title: 'Colorvu-technology', href: 'Colorvu' },
  ],
  solutions: [
    { title: 'Manufacturing solution in Dubai', href: 'Manufacturing' },
    { title: 'Retail solution in Dubai', href: 'Retail' },
    { title: 'Healthcare solution in Dubai', href: 'Healthcare' },
    { title: 'Education Solution in Dubai', href: 'Education' },
  ],
}

interface NavbarCategory {
  _id: string;
  name: string;
  slug: string;
  order: number;
  isActive: boolean;
  createdAt: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const navRef = useRef<HTMLDivElement>(null)
  const [navbarCategories, setNavbarCategories] = useState<NavbarCategory[]>([])
  const [productsOpen, setProductsOpen] = useState(false)
  const [technologiesOpen, setTechnologiesOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const pathname = usePathname();

  // Prevent background scroll when mobile menu is open
  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const fetchNavbarCategories = async () => {
      try {
        const response = await fetch('/api/navbar-categories');
        const data = await response.json();
        setNavbarCategories(data);
      } catch (error) {
        console.error('Failed to fetch navbar categories:', error);
      }
    };

    fetchNavbarCategories();
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null)
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleDropdown = useCallback((dropdown: string | null) => {
    if (dropdown !== activeDropdown) {
      setActiveDropdown(dropdown)
    }
  }, [activeDropdown])

  return (
    <header
      className="bg-white shadow-lg sticky top-0 z-50"
      ref={navRef}
    >
      {/* Top bar - Made responsive */}
      <div className="bg-gradient-to-r from-red-900 to-black text-white py-2 sm:py-3 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-end sm:space-x-8 space-y-2 sm:space-y-0 text-xs sm:text-sm font-medium">
          <a
            href="tel:+97155422194"
            className="flex items-center justify-center sm:justify-start hover:text-red-300 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +971 50 989 3134
          </a>
          <a
            href="mailto:sales@hikvision-dubai.ae"
            className="flex items-center justify-center sm:justify-start hover:text-red-300 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            sales@hikvisionuae.ae
          </a>
        </div>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Further increased sizing */}
          <Link
            href="/"
            className="flex items-center transition-duration-300 ml-0 sm:ml-8"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative h-12 sm:h-16 w-[220px] sm:w-[300px] group">
              <Image
                src={hikvisionLogo.src}
                alt="Hikvision Dubai"
                width={210}
                height={60}
                className={`h-10 sm:h-14 w-auto object-contain transition-all duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                } group-hover:brightness-110`}
                priority
                quality={100}
                onLoad={() => setIsLoading(false)}
              />
              {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded" />
              )}
            </div>
          </Link>

          {/* Mobile menu button - Improved styling */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 
              hover:shadow-md active:bg-gray-200 focus:outline-none focus:ring-2 
              focus:ring-red-500 focus:ring-opacity-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile menu content */}
          <div
            className={`md:hidden fixed inset-0 z-[9999] transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}
            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          >
            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => setIsOpen(false)}
            />
            {/* Menu Panel */}
            <div
              className={`absolute top-0 right-0 w-11/12 max-w-xs h-full bg-white shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
              {/* Logo and Close Button */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
                  <Image src={hikvisionLogo.src} alt="Hikvision Dubai" width={120} height={36} className="object-contain h-9 w-auto" />
                </Link>
                <button
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* Menu Items */}
              <nav className="flex flex-col gap-2 px-6 py-6 overflow-y-auto h-[calc(100%-64px)]">
                <Link href="/" className={`font-bold text-lg py-2 ${pathname === '/' ? 'text-red-600' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
                <div className="py-2 border-b border-gray-100">
                  <button
                    className="w-full flex items-center justify-between font-semibold text-gray-800 mb-1 text-left focus:outline-none"
                    onClick={() => setProductsOpen((open) => !open)}
                    aria-expanded={productsOpen}
                    aria-controls="products-dropdown"
                  >
                    Products
                    <svg className={`w-5 h-5 ml-2 transition-transform ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {productsOpen && (
                    <div id="products-dropdown" className="flex flex-col gap-1 pl-4 mt-2">
                      {navbarCategories.map((category) => (
                        <Link
                          key={category._id}
                          href={`/${category.slug}`}
                          className={`text-gray-700 text-base py-1 hover:text-red-600 ${pathname === '/' + category.slug ? 'text-red-600' : ''}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="py-2 border-b border-gray-100">
                  <button
                    className="w-full flex items-center justify-between font-semibold text-gray-800 mb-1 text-left focus:outline-none"
                    onClick={() => setTechnologiesOpen((open) => !open)}
                    aria-expanded={technologiesOpen}
                    aria-controls="technologies-dropdown"
                  >
                    Technologies
                    <svg className={`w-5 h-5 ml-2 transition-transform ${technologiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {technologiesOpen && (
                    <div id="technologies-dropdown" className="flex flex-col gap-1 pl-4 mt-2">
                      {dropdownMenus.technologies.map((item) => (
                        <Link
                          key={item.href}
                          href={`/${item.href}`}
                          className={`text-gray-700 text-base py-1 hover:text-red-600 ${pathname === '/' + item.href ? 'text-red-600' : ''}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="py-2 border-b border-gray-100">
                  <button
                    className="w-full flex items-center justify-between font-semibold text-gray-800 mb-1 text-left focus:outline-none"
                    onClick={() => setSolutionsOpen((open) => !open)}
                    aria-expanded={solutionsOpen}
                    aria-controls="solutions-dropdown"
                  >
                    Solutions
                    <svg className={`w-5 h-5 ml-2 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${solutionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div id="solutions-dropdown" className="flex flex-col gap-1 pl-4 mt-2">
                      {dropdownMenus.solutions.map((item) => (
                        <Link
                          key={item.href}
                          href={`/${item.href}`}
                          className={`text-gray-700 text-base py-1 rounded hover:text-red-600 hover:bg-gray-100 transition ${pathname === '/' + item.href ? 'text-red-600 font-semibold' : ''}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <Link
                    href="/Contact"
                    className={`font-semibold text-gray-800 text-base py-2 rounded-lg hover:text-red-600 hover:bg-gray-50 transition ${pathname === '/Contact' ? 'text-red-600 bg-red-50' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Desktop Navigation - Improved spacing and interactions */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 bg-white">
            {/* Home Link */}
            <div className="relative group">
              <Link
                href="/"
                className={`text-gray-800 hover:text-red-600 font-medium transition-all duration-300 
                  hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                  after:w-0 group-hover:after:w-full after:bg-red-600 after:transition-all after:duration-300 ${pathname === '/' ? 'text-red-600' : ''}`}
              >
                Home
              </Link>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdown('products')}
              onMouseLeave={() => handleDropdown(null)}
            >
              <button className="flex items-center text-gray-800 hover:text-red-600 font-medium 
                transition-all duration-300 hover:-translate-y-0.5 group relative
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                group-hover:after:w-full after:bg-red-600 after:transition-all after:duration-300">
                Products
                <svg className="w-4 h-4 ml-1.5 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-4 mt-2
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderTop: '2px solid #DC2626'
                }}
                role="menu"
              >
                {navbarCategories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/${category.slug}`}
                    className={`block px-6 py-3 text-gray-800 hover:bg-red-50 
                      hover:text-red-600 transition-all duration-300 ${pathname === '/' + category.slug ? 'text-red-600' : ''}`}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Technologies Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdown('technologies')}
              onMouseLeave={() => handleDropdown(null)}
            >
              <button
                className="flex items-center text-gray-800 hover:text-red-600 font-medium 
                  transition-all duration-300 hover:-translate-y-0.5 group relative
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                  group-hover:after:w-full after:bg-red-600 after:transition-all after:duration-300"
              >
                Technologies
                <svg className="w-4 h-4 ml-1.5 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-4 mt-2
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderTop: '2px solid #DC2626'
                }}
                role="menu"
              >
                {dropdownMenus.technologies.map((item) => (
                  <Link
                    key={item.href}
                    href={`/${item.href}`}
                    className={`block px-6 py-3 text-gray-800 hover:bg-red-50 
                      hover:text-red-600 transition-all duration-300 ${pathname === '/' + item.href ? 'text-red-600' : ''}`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdown('solutions')}
              onMouseLeave={() => handleDropdown(null)}
            >
              <button
                className="flex items-center text-gray-800 hover:text-red-600 font-medium 
                  transition-all duration-300 hover:-translate-y-0.5 group relative
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                  group-hover:after:w-full after:bg-red-600 after:transition-all after:duration-300"
              >
                Solutions
                <svg className="w-4 h-4 ml-1.5 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-4 mt-2
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderTop: '2px solid #DC2626'
                }}
                role="menu"
              >
                {dropdownMenus.solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={`/${item.href}`}
                    className={`block px-6 py-3 text-gray-800 hover:bg-red-50 
                      hover:text-red-600 transition-all duration-300 ${pathname === '/' + item.href ? 'text-red-600' : ''}`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* About Us Link */}
            <div className="relative group">
              <Link
                href="/About"
                className={`flex items-center space-x-2 w-full px-4 py-2.5 text-gray-800 hover:bg-red-50 
                  hover:text-red-600 transition-all duration-300 rounded-lg ${pathname === '/About' ? 'text-red-600' : ''}`}
              >
                About Us
              </Link>
            </div>

            {/* Contact Us Button */}
            <div className="relative group">
              <Link
                href="/Contact"
                className={`relative inline-flex items-center px-6 py-3 text-white font-medium 
                  rounded-lg overflow-hidden transition-all duration-300 ${pathname === '/Contact' ? 'bg-red-700' : ''}`}
              >
                {/* Background layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800" />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-red-700 
                  translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                
                {/* Content */}
                <span className="relative flex items-center gap-3">
                  <svg 
                    className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <span className="relative tracking-wider">
                    Contact Us
                  </span>
                </span>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 
                  transition-all duration-500 bg-gradient-to-r from-transparent 
                  via-white to-transparent -skew-x-12 translate-x-[-200%] 
                  group-hover:translate-x-[200%]" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
