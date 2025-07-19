const cityData = {
  colombo: {
    cityName: "Colombo",
    heroImage: "/assets/Colombo.jpg",
    heroTitle: "Discover Vibrant Colombo",
    heroSubtitle: "Where tradition meets modernity.",
    footerDescription: "Experience the perfect blend of culture and city life.",

    hotels: [
      {
        city: "Colombo",
        name: "Galle Face Hotel",
        type: "Luxury",
        link: "https://www.gallefacehotel.com/",
        image: "/assets/hotels/118292494.jpg",
        description: "Iconic beachfront colonial hotel in Colombo."
      },
      {
        city: "Colombo",
        name: "Shangri-La Colombo",
        type: "Luxury",
        link: "https://www.shangri-la.com/colombo/shangrila/",
        image: "/assets/hotels/shangrilla.jpg",
        description: "5-star hotel with stunning views and top amenities."
      },
      {
        city: "Colombo",
        name: "Cinnamon Grand",
        type: "Luxury",
        link: "https://www.cinnamonhotels.com/cinnamongrandcolombo",
        image: "/assets/hotels/cinmlm.webp",
        description: "Elegant hotel in the heart of the city with fine dining options."
      },
      {
        city: "Colombo",
        name: "Cinnamon Red",
        type: "Budget",
        link: "https://www.cinnamonhotels.com/cinnamonredcolombo",
        image: "/assets/hotels/red.jpg",
        description: "Trendy, affordable hotel with skyline views."
      },
      {
        city: "Colombo",
        name: "Clock Inn Colombo",
        type: "Budget",
        link: "https://www.clockinn.lk/",
        image: "/assets/hotels/Clock Inn Colombo.jpg",
        description: "Clean and affordable hostel for backpackers."
      },
      {
        city: "Colombo",
        name: "Hotel Nippon",
        type: "Boutique",
        link: "http://www.hotelnippon.lk/",
        image: "/assets/hotels/Hotel Nippon.jpg",
        description: "Historic boutique hotel with colonial charm."
      },
      {
        city: "Colombo",
        name: "The Steuart by Citrus",
        type: "Boutique",
        link: "https://www.citrusleisure.com/thesteuart/",
        image: "/assets/hotels/The Steuart by Citrus.jpg",
        description: "Cozy boutique hotel with Scottish-themed decor."
      },
      {
        city: "Colombo",
        name: "Taj Samudra",
        type: "Luxury",
        link: "https://www.tajhotels.com/en-in/taj/taj-samudra-colombo/",
        image: "/assets/hotels/Taj Samudra.jpg",
        description: "Seaside luxury hotel with excellent restaurants."
      },
      {
        city: "Colombo",
        name: "Marino Beach",
        type: "Serviced Apartments",
        link: "https://marino.lk/",
        image: "/assets/hotels/Marino Residency.jpg",
        description: "Modern apartments for long and short stays."
      },
      {
        city: "Colombo",
        name: "Crescat Residencies",
        type: "Serviced Apartments",
        link: "https://crescatresidencies.lk/",
        image: "/assets/hotels/Crescat Residencies.jpeg",
        description: "Centrally located serviced apartments near shopping and dining."
      }
    ],

    categories: ["Cultural Sites", "Shopping Places", "Museums"],

    categoryData: {
      "Cultural Sites": [
        {
          name: "Gangaramaya Temple",
          image: "/assets/culture/Gangaramaya-Temple.jpeg",
          description: "A historic Buddhist temple mixing modern architecture and cultural relics.",
          link: "https://gangaramaya.com/"
        },
        {
          name: "Independence Square",
          image: "/assets/culture/Independence-Square.jpeg",
          description: "Colonial-era memorial and national landmark.",
          link: "https://en.wikipedia.org/wiki/Independence_Memorial_Hall"
        },
        
        {
          name: "Old Parliament Building",
          image: "/assets/culture/parliment.JPG",
          description: "Colonial-era building housing government offices.",
          link: "https://en.wikipedia.org/wiki/Old_Parliament_Building,_Colombo"
        },
        {
          name: "Jami Ul-Alfar Mosque",
          image: "/assets/culture/jami.jpeg",
          description: "Iconic red and white candy-striped mosque in Pettah.",
          link: "https://en.wikipedia.org/wiki/Jami_Ul-Alfar_Mosque"
        },
        {
          name: "Lighthouse Clock Tower",
          image: "/assets/culture/clock-towe.webp",
          description: "A combination lighthouse and clock tower built in 1857.",
          link: "https://en.wikipedia.org/wiki/Colombo_Lighthouse_Clock_Tower"
        }
      ],"Shopping Places": [
        {
          name: "One Galle Face Mall",
          image: "/assets/mall/OGF.jpg",
          description: "High-end shopping mall with fashion brands, food court and cinema.",
          link: "https://www.onegalleface.com/mall"
        },
        {
          name: "Colombo City Centre Mall",
          image: "/assets/mall/ccc.jpeg",
          description: "Modern mall with shopping, dining and entertainment options.",
          link: "https://www.colombocitycentre.lk/"
        },
        {
          name: "Liberty Plaza",
          image: "/assets/mall/Liberty-Plaza.jpg",
          description: "Long-standing shopping center with various stores and services.",
          link: "https://www.libertyplaza.lk/"
        }
      ],
      "Museums": [
        
        {
          name: "Traditional Puppet Art Museum",
          image: "/assets/museums/Puppet-museum.jpeg",
          description: "Unique museum showcasing Sri Lanka’s traditional puppet heritage.",
          link: "https://en.wikipedia.org/wiki/Traditional_Puppet_Art_Museum"
        },
        {
          name: "Railway Museum",
          image: "/assets/museums/Railway-Museum.jpeg",
          description: "Preserves history of Sri Lankan railways with vintage engines and carriages.",
          link: "https://en.wikipedia.org/wiki/National_Railway_Museum_(Sri_Lanka)"
        }
        
      ],
      // 📦 STEP 1: Update citydata.jsx (add under "colombo")






    

      
    },
    thingsToDo: [
      {
        name: "ZAZA Bar at Shangri-La",
        category: "Nightlife",
        image: "/assets/Events/ZAZA.jpeg",
        description: "Stylish cocktail bar popular with locals and tourists alike.",
        duration: "2-4 hrs",
        price: "$$",
        link: "https://www.shangri-la.com/colombo/shangrila/dining/bars-lounges/zaza-bar/"
      },
      {
        name: "Rhythm and Blues Club",
        category: "Nightlife",
        image: "/assets/Events/Rhythm.jpeg",
        description: "Lively club with DJs, live music, and dancing late into the night.",
        duration: "5 hrs",
        price: "$$$",
        link: "https://www.facebook.com/rnblanka/"
      },
      {
        name: "Colombo City Centre Cinema",
        category: "Movies",
        image: "/assets/Events/CCCscope.jpeg",
        description: "Modern multiplex offering the latest Hollywood and Bollywood hits.",
        duration: "2-3 hrs",
        price: "$",
        link: "https://www.colombocitycentre.lk/ccc-cinema/"
      },
      {
        name: "Botanik Rooftop Bistro",
        category: "Dining & Drinks",
        image: "/assets/Events/botanik-bistro-and-bar-600-8.jpg",
        description: "Trendy rooftop bar with skyline views and curated cocktails.",
        duration: "2-4 hrs",
        price: "$$$",
        link: "https://www.botanik.lk/"
      },
      {
        name: "Escape Room Colombo",
        category: "Entertainment",
        image: "/assets/Events/the-lower-level.jpg",
        description: "Test your wits in themed escape rooms perfect for friends and couples.",
        duration: "1-2 hrs",
        price: "$$",
        link: "https://escaperoom.lk/"
      },
      {
        name: "VR Gaming Zone",
        category: "Gaming",
        image: "/assets/Events/best-vr-gamee-in-2024.jpg",
        description: "Experience immersive VR games and simulators for all ages.",
        duration: "1-2 hrs",
        price: "$-$$",
        link: "https://www.vrcolombo.lk/"
      },
      
      {
        name: "Colombo Comedy Club",
        category: "Live Shows",
        image: "/assets/Events/Colombo comedy.jpeg",
        description: "Laugh out loud at Colombo’s top comedy acts every weekend.",
        duration: "2 hrs",
        price: "$$",
        link: "https://www.facebook.com/colombocomedy/"
      },
      {
        name: "Colombo Pub Crawl",
        category: "Bar Hopping",
        image: "/assets/Events/Colombo-Crawl.png",
        description: "Meet new people and explore Colombo’s buzzing bar scene.",
        duration: "4+ hrs",
        price: "$$",
        link: "https://www.instagram.com/colombopubcrawl/"
      },
      {
        name: "Cinnamon Life Events",
        category: "Events",
        image: "/assets/Events/GFmuNQYm20uc3LEMSgCrfQ_Exterior_5_Original_1_(1)_O.webp",
        description: "Concerts, festivals, and seasonal parties at the heart of the city.",
        duration: "Varies",
        price: "Varies",
        link: "https://www.cinnamonlife.com/events.html"
      }
    ]
    
  },

  galle: {
    cityName: "Galle",
    heroImage: "https://images.unsplash.com/photo-1601302148961-310aa60c8653?w=1920",
    heroTitle: "Explore Historic Galle",
    heroSubtitle: "Where colonial charm meets coastal beauty.",
    footerDescription: "Walk through centuries of history along Galle’s cobbled streets and beaches.",

    hotels: [
      {
        name: "Amari Galle",
        type: "Luxury",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f1/d0/95/amari-galle.jpg",
        rating: 4.7,
        price: 190,
        description: "Beachfront hotel with a rooftop bar, fine dining and scenic ocean views.",
        link: "https://www.amari.com/galle-srilanka",
        amenities: ["Oceanfront", "Bar", "Pool"]
      },
      {
        name: "Fort Bazaar",
        type: "Boutique",
        image: "https://www.teardrop-hotels.com/wp-content/uploads/2019/09/fort-bazaar-exterior.jpg",
        rating: 4.5,
        price: 140,
        description: "Charming boutique hotel within Galle Fort walls blending colonial design and luxury.",
        link: "https://www.teardrop-hotels.com/fort-bazaar/",
        amenities: ["Spa", "Free Wi-Fi", "Bar"]
      },
      {
        name: "Pilgrims Hostel Galle",
        type: "Budget",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/366978466.jpg",
        rating: 4.0,
        price: 25,
        description: "Cozy hostel perfect for backpackers and travelers exploring Galle Fort.",
        link: "https://www.booking.com/hotel/lk/pilgrims-hostel.en-gb.html",
        amenities: ["Shared Kitchen", "Lounge", "Wi-Fi"]
      }
    ],
    

    categories: ["Outdoor Beaches", "Shopping Places", "Museums"],

    categoryData: {
      "Cultural Sites": [
        {
          name: "Galle Fort",
          image: "https://www.tripsavvy.com/thmb/NaSBRxJUIg1OnCnPP7_4_j3RMeU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-931406436-5af9a6ef04d1cf003c2a1de3.jpg",
          description: "A UNESCO World Heritage Site with colonial-era architecture and scenic ramparts.",
          link: "https://en.wikipedia.org/wiki/Galle_Fort"
        }
      ],
      "Shopping Places": [
        {
          name: "Barefoot Galle",
          image: "https://barefootceylon.com/wp-content/uploads/2019/07/Galle-Shop-1.jpg",
          description: "Artisan shop with handwoven textiles, books and art.",
          link: "https://barefootceylon.com/"
        }
      ],
      "Museums": [
        {
          name: "National Maritime Museum",
          image: "https://galleheritage.gov.lk/wp-content/uploads/2021/12/Maritime-Museum.jpg",
          description: "Museum within the fort showcasing marine artifacts and shipwrecks.",
          link: "https://galleheritage.gov.lk/en/national-maritime-museum/"
        }
      ]
    }
    
  },
  Kandy: {
    cityName: "kandy",
    heroImage: "https://images.unsplash.com/photo-1601302148961-310aa60c8653?w=1920",
    heroTitle: "Explore Historic Galle",
    heroSubtitle: "Where colonial charm meets coastal beauty.",
    footerDescription: "Walk through centuries of history along Galle’s cobbled streets and beaches.",

    hotels: [
      {
        name: "Earl’s Regency",
        type: "Luxury",
        image: "https://www.aitkenspencehotels.com/earlsregency/wp-content/uploads/sites/3/2020/01/Kandy-Earls-Regency-1.jpg",
        rating: 4.6,
        price: 160,
        description: "Nestled in the hills with panoramic views, a perfect retreat with a pool and spa.",
        link: "https://www.aitkenspencehotels.com/earlsregency/",
        amenities: ["Hillside Views", "Spa", "Pool"]
      },
      {
        name: "Theva Residency",
        type: "Boutique",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/15/30/54/e7/theva-residency.jpg",
        rating: 4.4,
        price: 120,
        description: "A modern boutique hotel with personalized service and scenic mountain views.",
        link: "https://www.theva.lk/",
        amenities: ["Infinity Pool", "Sauna", "Wi-Fi"]
      },
      {
        name: "Kandy City Hostel",
        type: "Budget",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/341607440.jpg",
        rating: 4.0,
        price: 20,
        description: "Budget-friendly stay with communal areas and great access to the city.",
        link: "https://www.kandycityhostel.com/",
        amenities: ["Shared Kitchen", "Lounge", "Backpacker Friendly"]
      }
    ],
    
    

    categories: ["Outdoor Beaches", "Shopping Places", "Museums"],

    categoryData: {
      "Cultural Sites": [
        {
          name: "Temple of the Sacred Tooth Relic",
          image: "https://www.lovesrilanka.org/wp-content/uploads/2020/03/Temple-of-the-Tooth-1.jpg",
          description: "A revered Buddhist temple housing the sacred tooth relic of the Buddha.",
          link: "https://sridaladamaligawa.lk/"
        }
      ],
      "Shopping Places": [
        {
          name: "Kandy City Centre",
          image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Kandy_City_Centre.jpg",
          description: "Modern shopping complex with food, fashion and souvenirs.",
          link: "https://www.kandycitycentre.lk/"
        }
      ],
      "Museums": [
        {
          name: "Kandy National Museum",
          image: "https://www.lovesrilanka.org/wp-content/uploads/2020/03/National-Museum-Kandy.jpg",
          description: "Exhibits of Kandyan era artifacts, textiles and weapons.",
          link: "http://www.museum.gov.lk/web/index.php?option=com_regionalm&task=regionalmuseum&id=4&Itemid=77&lang=en"
        }
      ]
    }
    
    
  }
};

export default cityData;
