import About from "./About";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

export const metadata = {
  title:
    "About Us | Hikvision Official Distributor & Supplier in UAE - Security Solutions",
  description:
    "Leading Hikvision distributor and supplier in UAE. Authorized dealer for CCTV cameras, security systems & support in Dubai. Contact us for Hikvision products, pricing & technical support.",
  keywords:

    "hikvision uae, best cameras in uae, hikvision dubai, hikvision middle east, best cameras in dubai, hikvision distributor uae, hikvision supplier uae, hikvision authorized distributor in uae, hikvision support uae, hikvision dealer dubai, hikvision sharjah, hikvision ajman, hikvision fujairah, hikvision ras al khaimah, hikvision umm al quwain, hikvision abu dhabi, hikvision manufacturing security, industrial security cameras UAE, manufacturing surveillance Dubai, thermal cameras UAE, PTZ cameras manufacturing, AI security solutions UAE, factory security systems Dubai",
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
