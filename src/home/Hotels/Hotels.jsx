import React, { useRef } from "react";

const hotels = [
  {
    name: "Gruhaya Boutique Villa",
    location: "Kandy, Sri Lanka",
    rating: 8.3,
    reviewCount: 218,
    reviewLabel: "Very good",
    priceOld: "LKR 18,276",
    priceNew: "LKR 16,449",
    nights: 2,
    image: "/assets/hotels/623054d8.avif",
    badge: "Genius",
  },
  {
    name: "Lucky Star Ella",
    location: "Ella, Sri Lanka",
    rating: 7.7,
    reviewCount: 269,
    reviewLabel: "Good",
    priceOld: "LKR 17,886",
    priceNew: "LKR 14,309",
    nights: 2,
    image: "/assets/hotels/233212243.jpg",
    badge: "Genius",
  },
  {
    name: "Fairway Colombo",
    location: "Colombo, Sri Lanka",
    rating: 8.3,
    reviewCount: 2304,
    reviewLabel: "Very good",
    priceOld: "LKR 48,096",
    priceNew: "LKR 28,858",
    nights: 2,
    image: "/assets/hotels/326552705.jpg",
    badge: "Genius",
    extraTag: "Getaway Deal",
  },
  {
    name: "Galaxy City Hotel",
    location: "Kandy, Sri Lanka",
    rating: 8.7,
    reviewCount: 809,
    reviewLabel: "Fabulous",
    priceNew: "LKR 15,150",
    nights: 2,
    image: "/assets/hotels/680214410.jpg",
    badge: "Genius",
  },
  {
    name: "Ella Hideout",
    location: "Ella, Sri Lanka",
    rating: 8.0,
    reviewCount: 112,
    reviewLabel: "Very good",
    priceOld: "LKR 16,000",
    priceNew: "LKR 13,500",
    nights: 2,
    image: "/assets/hotels/ella.jpg",
    badge: "Genius",
  },
];

export default function HotelDealsSlider() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -1000, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 1000, behavior: "smooth" });
  };

  return (
    <section className="py-6 bg-white items-center">
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
        Deals for the Weekend
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Save on stays for 11 July – 13 July
      </p>
  
      <div className="relative">
        {/* Back Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-md hover:bg-gray-100 p-2 rounded-full z-10"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
  
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-3 px-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                {hotel.badge && (
                  <div className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded mb-2">
                    {hotel.badge}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-1">
                  {hotel.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{hotel.location}</p>
                <div className="flex items-center mb-2">
                  <span className="bg-blue-900 text-white text-sm font-bold px-2 py-1 rounded mr-2">
                    {hotel.rating}
                  </span>
                  <p className="text-sm text-gray-800">
                    {hotel.reviewLabel}{" "}
                    <span className="text-gray-500">({hotel.reviewCount} reviews)</span>
                  </p>
                </div>
                {hotel.extraTag && (
                  <span className="inline-block mb-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-semibold">
                    {hotel.extraTag}
                  </span>
                )}
                <div className="text-sm">
                  <p>
                    <span className="text-gray-700">{hotel.nights} nights</span>{" "}
                    {hotel.priceOld && (
                      <span className="line-through text-gray-500 ml-1">
                        {hotel.priceOld}
                      </span>
                    )}{" "}
                    <span className="text-black font-bold text-base ml-1">
                      {hotel.priceNew}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Forward Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-md hover:bg-gray-100 p-2 rounded-full z-10"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  
    {/* Hide scrollbar */}
    <style jsx>{`
      .flex::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  </section>
  
  );
}