import React from "react";
import { Globe, MapPin, ShieldCheck, CreditCard } from "lucide-react";

export default function TravelEssentials() {
  const essentials = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Visa Requirements",
      description:
        "Most travelers need an Electronic Travel Authorization (ETA) before entering Sri Lanka. You can apply online in a few minutes through the official ETA portal.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Local SIM & Internet",
      description:
        "Affordable prepaid SIM cards with data plans are available at the airport and in major cities. Dialog and Mobitel offer the best coverage.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Vaccines & Health",
      description:
        "While no mandatory vaccines are required, it's recommended to be up to date on routine vaccines. Carry mosquito repellent and basic medications.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: "Currency & Payments",
      description:
        "The official currency is Sri Lankan Rupee (LKR). Credit cards are accepted in most urban areas, but carry cash for rural or small vendors.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Travel Essentials for Sri Lanka
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Plan ahead with the must-know information before arriving in Sri Lanka.
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {essentials.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
