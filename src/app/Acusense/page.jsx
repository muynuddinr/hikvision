import Acusense from "./Acusense";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

export const metadata = {
  title: 'Hikvision UAE | AcuSense Technology',
  description: 'Hikvision AcuSense Technology for enhanced security and surveillance in UAE. Our advanced AI-powered system detects humans and vehicles with precision, reducing false alarms and improving response times.',
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



export default function AcusensePage() {
  return (
    <>
      <Navbar />
      <Acusense />
      <Footer />
    </>
  );
}

