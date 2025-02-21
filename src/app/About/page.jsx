import About from "./About";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

export const metadata = {
  title:
    "About Us | Hikvision Official Distributor & Supplier in UAE - Security Solutions",
  description:
    "Leading Hikvision distributor and supplier in UAE. Authorized dealer for CCTV cameras, security systems & support in Dubai. Contact us for Hikvision products, pricing & technical support.",
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

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
