import React from "react";

const airlines = [
  {
    name: "SriLankan Airlines",
    logo: "assets/Airlines/sl.jpg",
    link: "https://www.srilankan.com/",
    description: "National carrier of Sri Lanka with global routes."
  },
  {
    name: "Qatar Airways",
    logo: "assets/Airlines/Qatar_Airways_logo.svg.png",
    link: "https://www.qatarairways.com/",
    description: "Luxury flights connecting Middle East and Asia."
  },
  {
    name: "Emirates",
    logo: "assets/Airlines/Emirates_logo.svg.png",
    link: "https://www.emirates.com/",
    description: "Top-rated airline with daily flights to Colombo."
  },
  {
    name: "Singapore Airlines",
    logo: "assets/Airlines/Singapore-Airlines-Logo.png",
    link: "https://www.singaporeair.com/",
    description: "Award-winning airline offering seamless travel."
  },
  
  {
    name: "British Airlines",
    logo: "assets/Airlines/British_Airways-Logo.wine.png",
    link: "https://www.etihad.com/",
    description: "Modern fleet with frequent Sri Lanka flights."
  }
];

export default function AirlinesSection() {
  return (
    <section className="bg-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
         Fly Directly to Sri Lank
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Browse major airlines that connect travelers to Sri Lanka from around the world. 
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {airlines.map((airline) => (
            <a
              key={airline.name}
              href={airline.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl shadow-md hover:shadow-xl p-4 transition-transform hover:scale-105"
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img
                  src={airline.logo}
                  alt={airline.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{airline.name}</h3>
                <p className="text-sm text-gray-500">{airline.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
