import Navbar from "../Components/navbar";
import Contact from "./Contact";
import Footer from "../Components/footer";
import Head from "next/head";

export const metadata = {
  title: "Contact Us | Hikvision Official Distributor & Supplier in UAE - Security Solutions",
  description:
    "Contact Hikvision UAE for CCTV cameras, security systems & support in Dubai. Authorized dealer for Hikvision products, pricing & technical support.",
  keywords:
    "hikvision uae, hikvision dubai, hikvision middle east, hikvision distributor uae, hikvision supplier uae, hikvision authorized distributor in uae, hikvision support uae, hikvision dealer dubai",
};

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      <Contact />
      <Footer />
    </div>
  );
}