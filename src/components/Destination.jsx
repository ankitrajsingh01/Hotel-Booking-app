import React from 'react';

// Destinations data with high-quality, relevant Unsplash images
const destinations = [
  {
    id: 1,
    name: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1630123625375-1fce99d5d0dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D',
    isTall: true,
  },
  {
    id: 2,
    name: 'New Delhi',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8fDA%3D',
    isTall: false,
  },
  {
    id: 3,
    name: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1644779504736-ed346f96a7bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGJlbmdhbHVydXxlbnwwfHwwfHx8MA%3D%3D',
    isTall: false,
  },
  {
    id: 4,
    name: 'jaipur',
    image: 'https://images.unsplash.com/photo-1545126178-862cdb469409?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D',
    isTall: true,
  },
  {
    id: 5,
    name: 'Goa',
    image: 'https://plus.unsplash.com/premium_photo-1664304458186-9a67c1330d02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hfGVufDB8fDB8fHww',
    isTall: false,
  },
  {
    id: 6,
    name: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1741545979534-02f59c742730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHlkZXJhYmFkJTIwY2hhcm1pbmFyfGVufDB8fDB8fHww',
    isTall: false,
  },
];

export default function Destination() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      {/* Section Header */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
        Popular destinations
      </h2>

      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 md:grid-flow-col gap-4 md:h-120 w-full">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className={`relative group overflow-hidden rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 ${
              dest.isTall
                ? 'md:row-span-2 h-87.5 md:h-full'
                : 'md:row-span-1 h-55 md:h-full'
            }`}
          >
            {/* Dark gradient overlay for improved text contrast & premium look */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

            {/* Destination Image */}
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Floating Glassmorphic Pill Badge */}
            <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 shadow-md transform transition-transform duration-300 group-hover:scale-105 active:scale-95">
              <span className="text-gray-900 font-medium text-sm sm:text-base">
                {dest.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}