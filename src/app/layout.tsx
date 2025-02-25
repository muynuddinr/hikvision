import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';
import { Toaster } from "react-hot-toast";
import WhatsAppIcon from './Components/WhatsAppIcon';
import favicon from '../../public/favicon.svg';

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Hikvision Dubai - Professional Security Solutions",
  description: "Premier provider of Hikvision security solutions in Dubai",
  keywords: [ "hikvision uae", "hikvision dubai", "hikvision security solutions", "hikvision cctv", "hikvision access control", "hikvision intercom", "hikvision video door phone", "hikvision security cameras", "hikvision security systems", "hikvision security products", "hikvision security solutions dubai", "hikvision cctv dubai", "hikvision access control dubai", "hikvision intercom dubai", "hikvision video door phone dubai", "hikvision security cameras dubai", "hikvision security systems dubai", "hikvision security products dubai", "hikvision cctv uae", "hikvision access control uae", "hikvision intercom uae", "hikvision video door phone uae", "hikvision security cameras uae", "hikvision security systems uae", "hikvision security products uae" ],

  icons: {
    icon: favicon.src, 
    shortcut: favicon.src, 
    apple: favicon.src, 
  },




};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans`}>
        <Toaster position="top-right" />
        {children}
        <WhatsAppIcon />
      </body>
    </html>
  );
}
