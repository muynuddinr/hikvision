import React from 'react';
import Image from 'next/image';
import img from '../../../public/banner2.jpg';

const TextImage = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 hover:opacity-75 transition-opacity"></div>
              <Image
                src={img.src}
                alt="Hikvision Security Solutions"
                width={1000}
                height={1200}
                className="w-[1000px] h-[450px] object-fill object-"
                priority
                quality={90}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">
              <span className="text-red-600">Premier Hikvision</span>{' '}
              <span className="text-black">Solutions in Dubai</span>
            </h2>
            <p className="text-black leading-relaxed">
              We specialize in providing comprehensive Hikvision security solutions across Dubai. From advanced DVR systems to state-of-the-art IP cameras, we deliver professional installations for educational institutions, corporate offices, and commercial spaces.
            </p>
            <p className="text-black leading-relaxed">
              As Dubai&apos;s trusted security technology partner, we offer:
            </p>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>Premium Hikvision equipment</li>
              <li>Expert installation services</li>
              <li>Competitive pricing</li>
              <li>Rapid response support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextImage;
