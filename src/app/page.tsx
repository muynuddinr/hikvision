import Navbar from './Components/navbar'
import Banner from './Components/banner'
import Footer from './Components/footer'
import Card from './Components/card'
import Looking from './Components/looking'
import TextImage from './Components/textimage'
import Customersupport from './Components/customersupport'
import { notFound } from 'next/navigation'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Security Solutions in Dubai | Your Company Name',
  description: 'Leading provider of cutting-edge surveillance systems and security equipment in Dubai. Get professional security solutions for your peace of mind.',
}

export default function Home() {
  try {

    return (
      <div>
        <Navbar />
        <Banner />
        <Card />
        <Looking />
        <TextImage />
        <Customersupport />
        <Footer />
      </div>
    )
  } catch (error) {
    console.error('Error in Home component:', error)
    notFound()
  }
}