import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NVR = () => {
  const nvrProducts = [
    {
      id: 1,
      name: 'DeepinMind Series NVRs',
      image: '/NVR/DeepinMind-Series-NVRs.webp',
      link: '/network-products/deepinmind-nvrs'
    },
    {
      id: 2,
      name: 'Special Series',
      image: '/NVR/Special-Series-nvr.webp',
      link: '/network-products/special-series'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 to-red-700 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
              Hikvision Network Video Recorders <span className="text-gray-200">Distributor In Dubai</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-200 leading-relaxed">
              Reliable storage and easy retrieval of surveillance footage are vital in today's security landscape. 
              Hikvision's Network Video Recorders (NVRs) lead the market in this domain. As the distinguished 
              Hikvision NVR distributor in Dubai, we offer these advanced recording solutions that ensure 
              high-quality video storage with efficient playback options.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center text-sm font-medium" aria-label="Breadcrumb">
          <Link href="/" className="text-red-600 hover:text-red-700 transition-colors">
            Home
          </Link>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-gray-500">NVR</span>
        </nav>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-16 bg-white text-red-600 py-6 rounded-lg shadow-lg border border-gray-100">
          Network Video Recorders
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {nvrProducts.map((product) => (
            <Link 
              href={product.link} 
              key={product.id}
              className="group"
            >
              <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="w-48 h-48 mb-6 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={192}
                    height={192}
                    className="max-w-full max-h-full object-contain relative z-10"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NVR;
