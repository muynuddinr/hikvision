import Navbar from "../Components/navbar";
import Privacy from "./privacy";
import Footer from "../Components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Hikvision UAE",
  description: "Learn about how Hikvision UAE handles and protects your personal information. Our privacy policy outlines data collection, usage, and your rights under UAE law.",
  keywords: [
    'Hikvision UAE',
    'Retail Security Solutions',
    'Security Cameras',
    'NVR Systems',
    'Access Control',
    'Hikvision Dubai',
    'Hikvision Middle East',
    'Hikvision Distributor UAE',
    'Hikvision Supplier UAE',
    'Hikvision Authorized Distributor in UAE',
    'Hikvision Support UAE',
    'hikvision uae',
    'hikvision dubai',
    'hikvision middle east',
    'hikvision distributor uae',
    'hikvision supplier uae',
    'hikvision authorized distributor in uae',
  ],
};


export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <Privacy />
      <Footer />
    </>
  );
}


