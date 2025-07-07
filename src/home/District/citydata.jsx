const cityData = {
    colombo: {
      cityName: "Colombo",
      heroImage: "https://your-hero-image.jpg",
      heroTitle: "Discover Vibrant Colombo",
      heroSubtitle: "Where tradition meets modernity.",
      footerDescription: "Experience the perfect blend of culture and city life.",
      
      hotels: [
        {
          name: 'Shangri-La Colombo',
          rating: 5,
          price: '$150',
          period: 'night',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
        },
        {
          name: 'Cinnamon Grand',
          rating: 5,
          price: '$120',
          period: 'night',
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'
        },
        {
          name: 'Galle Face Hotel',
          rating: 4,
          price: '$95',
          period: 'night',
          image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800'
        },
        {
          name: 'Hilton Colombo',
          rating: 5,
          price: '$110',
          period: 'night',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
        }
      ],
  
      categories: ['Cultural Sites', 'Shopping Places', 'Museums'],
  
      categoryData: {
        'Cultural Sites': [
          {
            name: 'Gangaramaya Temple',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
            description: 'A magnificent Buddhist temple showcasing modern architecture and cultural heritage.'
          },
          {
            name: 'Galle Face Green',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
            description: 'Historic oceanside promenade perfect for evening strolls and street food.'
          },
          {
            name: 'Red Mosque',
            image: 'https://images.unsplash.com/photo-1564769625392-651b8bb44952?w=800',
            description: 'Beautiful Indo-Saracenic architecture mosque in the heart of Pettah.'
          }
        ],
        'Shopping Places': [
          {
            name: 'Odel Department Store',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
            description: 'Premier shopping destination for fashion, accessories, and local designer brands.'
          },
          {
            name: 'Pettah Market',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
            description: 'Bustling traditional market with spices, textiles, and authentic local goods.'
          },
          {
            name: 'One Galle Face Mall',
            image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800',
            description: 'Modern luxury shopping mall with international brands and fine dining.'
          }
        ],
        Museums: [
          {
            name: 'Colombo National Museum',
            image: 'https://images.unsplash.com/photo-1629795815383-17de897bf8b4?w=800',
            description: 'Sri Lanka\'s largest museum featuring ancient artifacts, royal regalia, and cultural exhibits.'
          },
          {
            name: 'Dutch Period Museum',
            image: 'https://images.unsplash.com/photo-1587923579033-51c77bfb6e0e?w=800',
            description: 'Showcases colonial Dutch heritage and artifacts from the 17th–18th centuries.'
          },
          {
            name: 'Independence Memorial Museum',
            image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=800',
            description: 'Commemorates Sri Lanka\'s independence with historical documents and exhibits.'
          }
        ]
      }
    },
  
    // Galle data
        galle: {
          cityName: "Galle",
          heroImage: "https://images.unsplash.com/photo-1601302148961-310aa60c8653?w=1920",
          heroTitle: "Explore Historic Galle",
          heroSubtitle: "Where colonial charm meets coastal beauty.",
          footerDescription: "Walk through centuries of history along Galle’s cobbled streets and beaches.",
          
          hotels: [
            {
              name: 'Le Grand Galle',
              rating: 5,
              price: '$180',
              period: 'night',
              image: 'https://images.unsplash.com/photo-1542315192-d09f207efb77?w=800'
            },
            {
              name: 'Jetwing Lighthouse',
              rating: 5,
              price: '$150',
              period: 'night',
              image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800'
            },
            {
              name: 'Fort Bazaar',
              rating: 4,
              price: '$110',
              period: 'night',
              image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
            },
            {
              name: 'Tamarind Hill',
              rating: 5,
              price: '$130',
              period: 'night',
              image: 'https://images.unsplash.com/photo-1578898887932-5f274a0dbbcb?w=800'
            }
          ],
          
          categories: ['Outdoor Beaches', 'Shopping Places', 'Museums'],
          
          categoryData: {
            'Outdoor Beaches': [
              {
                name: 'Unawatuna Beach',
                image: 'https://images.unsplash.com/photo-1601297183302-aaa00f3e8b55?w=800',
                description: 'A crescent-shaped beach known for its calm waters and snorkeling opportunities.'
              },
              {
                name: 'Jungle Beach',
                image: 'https://images.unsplash.com/photo-1540202404-3f3c0b54fda1?w=800',
                description: 'Secluded and peaceful beach surrounded by lush forest, ideal for swimming.'
              },
              {
                name: 'Hikkaduwa Beach',
                image: 'https://images.unsplash.com/photo-1580934444393-c1b58e33b9e8?w=800',
                description: 'A popular beach with surf-friendly waves, coral reefs, and vibrant nightlife.'
              }
            ],
            'Shopping Places': [
              {
                name: 'Galle Antiques',
                image: 'https://images.unsplash.com/photo-1618221000979-03f971ff04f1?w=800',
                description: 'Discover colonial-era treasures and vintage collectibles in the heart of Galle Fort.'
              },
              {
                name: 'Sooriya Weaving',
                image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800',
                description: 'Handwoven textiles and traditional Sri Lankan fabrics made by local artisans.'
              },
              {
                name: 'The Factory Outlet',
                image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800',
                description: 'Budget-friendly shopping spot with branded clothing and local products.'
              }
            ],
            Museums: [
              {
                name: 'National Museum of Galle',
                image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800',
                description: 'Colonial-era museum featuring exhibits on Dutch influence and local history.'
              },
              {
                name: 'Martin Wickramasinghe Folk Museum',
                image: 'https://images.unsplash.com/photo-1617196035098-6d9ce2adcf6d?w=800',
                description: 'Celebrates the life and works of a renowned Sri Lankan author and cultural heritage.'
              }
            ]
          }
        }
      };
      
      
      

  
  export default cityData;
  