export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/menu") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            menu: [
                {
                  info: {
                    id: "491475",
                    name: "Chinese Wok",
                    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
                    locality: "Ameerpet",
                    areaName: "Ameerpet",
                    costForTwo: "₹250 for two",
                    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
                    avgRating: 4.1,
                    parentId: "61955",
                    avgRatingString: "4.1",
                    totalRatingsString: "1K+",
                    sla: {
                      deliveryTime: 49,
                      lastMileTravel: 6.7,
                      serviceability: "SERVICEABLE",
                      slaString: "45-50 mins",
                      lastMileTravelString: "6.7 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 23:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹179",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/chinese-wok-ameerpet-hyderabad-491475",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "2770",
                    name: "Flavours of Taj Mahal Hotel",
                    cloudinaryImageId: "8aa874a03b5bd0804b6781b1fd13f02d",
                    locality: "SD Road",
                    areaName: "Kalasiguda",
                    costForTwo: "₹400 for two",
                    cuisines: ["South Indian", "North Indian", "Biryani", "Snacks"],
                    avgRating: 4.5,
                    veg: true,
                    parentId: "80508",
                    avgRatingString: "4.5",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 34,
                      lastMileTravel: 4.5,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "4.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 14:00:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      ],
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "pureveg",
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/flavours-of-taj-mahal-hotel-sd-road-kalasiguda-hyderabad-2770",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "7003",
                    name: "Almond House",
                    cloudinaryImageId: "sewngcxy3c0h9atmav2l",
                    locality: "Himayath Nagar",
                    areaName: "Himayath Nagar",
                    costForTwo: "₹500 for two",
                    cuisines: ["Sweets", "Desserts", "Snacks", "Beverages"],
                    avgRating: 3,
                    parentId: "40",
                    avgRatingString: "3",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 27,
                      lastMileTravel: 1.5,
                      serviceability: "SERVICEABLE",
                      slaString: "25-30 mins",
                      lastMileTravelString: "1.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 21:30:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "Rxawards/_CATEGORY-Mithai.png",
                          description: "Delivery!",
                        },
                        {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      ],
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "Delivery!",
                                imageId: "Rxawards/_CATEGORY-Mithai.png",
                              },
                            },
                            {
                              attributes: {
                                description: "pureveg",
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/almond-house-himayath-nagar-hyderabad-7003",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "4138",
                    name: "Grand Hotel",
                    cloudinaryImageId: "g1arzw6qd7g9affkmgzk",
                    locality: "Banjara Hills",
                    areaName: "Abids",
                    costForTwo: "₹300 for two",
                    cuisines: ["Biryani", "Chinese", "Kebabs", "Tandoor"],
                    avgRating: 4.3,
                    parentId: "4001",
                    avgRatingString: "4.3",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 32,
                      lastMileTravel: 3,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "3.0 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 11:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "10% OFF",
                      subHeader: "UPTO ₹40",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/grand-hotel-banjara-hills-abids-hyderabad-4138",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "344287",
                    name: "Varalakshmi Tiffins",
                    cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
                    locality: "Banjara Hills",
                    areaName: "Filmnagar",
                    costForTwo: "₹300 for two",
                    cuisines: ["South Indian"],
                    avgRating: 4.5,
                    veg: true,
                    parentId: "6482",
                    avgRatingString: "4.5",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 48,
                      lastMileTravel: 8.4,
                      serviceability: "SERVICEABLE",
                      slaString: "45-50 mins",
                      lastMileTravelString: "8.4 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 12:00:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                          description: "Delivery!",
                        },
                        {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "Delivery!",
                                imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                              },
                            },
                            {
                              attributes: {
                                description: "pureveg",
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "₹125 OFF",
                      subHeader: "ABOVE ₹399",
                      discountTag: "FLAT DEAL",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/varalakshmi-tiffins-banjara-hills-filmnagar-hyderabad-344287",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "690939",
                    name: "Ovenfresh Cakes And Desserts",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/c26c6443-2127-4c9b-a854-6349edc4d329_690939.JPG",
                    locality: "Vithalwadi",
                    areaName: "Himayath Nagar",
                    costForTwo: "₹200 for two",
                    cuisines: [
                      "Bakery",
                      "Desserts",
                      "Beverages",
                      "Ice Cream",
                      "Sweets",
                      "Juices",
                      "Bengali",
                      "Pizzas",
                    ],
                    avgRating: 4.2,
                    parentId: "1372",
                    avgRatingString: "4.2",
                    totalRatingsString: "100+",
                    sla: {
                      deliveryTime: 33,
                      lastMileTravel: 1.7,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "1.7 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 23:00:00",
                      opened: true,
                    },
                    badges: {
                      textExtendedBadges: [
                        {
                          iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                          shortDescription: "Perfect cake delivery",
                          fontColor: "#7E808C",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                                shortDescription: "Perfect cake delivery",
                              },
                            },
                          ],
                        },
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "60% OFF",
                      subHeader: "UPTO ₹120",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/ovenfresh-cakes-and-desserts-vithalwadi-himayath-nagar-hyderabad-690939",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "565287",
                    name: "Wendy's Burgers",
                    cloudinaryImageId: "f1aa621021a2826088089b89842d4e7c",
                    locality: "Mahesh Nagar",
                    areaName: "Abids",
                    costForTwo: "₹200 for two",
                    cuisines: ["Burgers", "American", "Fast Food", "Snacks", "Beverages"],
                    avgRating: 4.2,
                    parentId: "972",
                    avgRatingString: "4.2",
                    totalRatingsString: "1K+",
                    sla: {
                      deliveryTime: 43,
                      lastMileTravel: 2.2,
                      serviceability: "SERVICEABLE",
                      slaString: "40-45 mins",
                      lastMileTravelString: "2.2 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 23:59:00",
                      opened: true,
                    },
                    badges: {
                      textExtendedBadges: [
                        {
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "options available",
                          fontColor: "#7E808C",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                              },
                            },
                          ],
                        },
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "50% OFF",
                      subHeader: "UPTO ₹100",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/wendys-burgers-mahesh-nagar-abids-hyderabad-565287",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "395225",
                    name: "McDonald's Gourmet Burger Collection",
                    cloudinaryImageId: "d3eewg9jbq6a94fzzc8k",
                    locality: "Alto Trade Center",
                    areaName: "Himayatnagar",
                    costForTwo: "₹600 for two",
                    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
                    avgRating: 4.5,
                    parentId: "10761",
                    avgRatingString: "4.5",
                    totalRatingsString: "500+",
                    sla: {
                      deliveryTime: 35,
                      lastMileTravel: 1.5,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "1.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 23:45:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-alto-trade-center-himayatnagar-hyderabad-395225",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "376914",
                    name: "Theobroma",
                    cloudinaryImageId: "63dd75492c47fcec191132b8eb299ea5",
                    locality: "Central Zone",
                    areaName: "Somajiguda & Khairtabad",
                    costForTwo: "₹400 for two",
                    cuisines: ["Desserts"],
                    avgRating: 4.6,
                    parentId: "1040",
                    avgRatingString: "4.6",
                    totalRatingsString: "1K+",
                    sla: {
                      deliveryTime: 34,
                      lastMileTravel: 3.7,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "3.7 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 22:59:00",
                      opened: true,
                    },
                    badges: {
                      textExtendedBadges: [
                        {
                          iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                          shortDescription: "Perfect cake delivery",
                          fontColor: "#7E808C",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                                shortDescription: "Perfect cake delivery",
                              },
                            },
                          ],
                        },
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "20% OFF",
                      discountTag: "FLAT DEAL",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/theobroma-central-zone-somajiguda-and-khairtabad-hyderabad-376914",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "12046",
                    name: "Subway",
                    cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
                    locality: "Telangana",
                    areaName: "Himayath Nagar",
                    costForTwo: "₹350 for two",
                    cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
                    avgRating: 4.1,
                    parentId: "2",
                    avgRatingString: "4.1",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 29,
                      lastMileTravel: 1.5,
                      serviceability: "SERVICEABLE",
                      slaString: "25-30 mins",
                      lastMileTravelString: "1.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-06 00:00:00",
                      opened: true,
                    },
                    badges: {
                      textExtendedBadges: [
                        {
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "options available",
                          fontColor: "#7E808C",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                              },
                            },
                          ],
                        },
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "₹150 OFF",
                      subHeader: "ABOVE ₹299",
                      discountTag: "FLAT DEAL",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/subway-telangana-himayath-nagar-hyderabad-12046",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "23707",
                    name: "McDonald's",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/c11f57da-665b-4f6f-abda-c4db140d48d4_23707.jpg",
                    locality: "Himayath Nagar",
                    areaName: "Himayath Nagar",
                    costForTwo: "₹400 for two",
                    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
                    avgRating: 4.3,
                    parentId: "630",
                    avgRatingString: "4.3",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 27,
                      lastMileTravel: 1.5,
                      serviceability: "SERVICEABLE",
                      slaString: "25-30 mins",
                      lastMileTravelString: "1.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 23:45:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "Rxawards/_CATEGORY-Burger.png",
                          description: "Delivery!",
                        },
                      ],
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "Delivery!",
                                imageId: "Rxawards/_CATEGORY-Burger.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/mcdonalds-himayath-nagar-hyderabad-23707",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "32129",
                    name: "Burger King",
                    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                    locality: "Himayath Nagar",
                    areaName: "Himayath Nagar",
                    costForTwo: "₹350 for two",
                    cuisines: ["Burgers", "American"],
                    avgRating: 4.2,
                    parentId: "166",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 34,
                      lastMileTravel: 1.5,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "1.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-06 04:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "60% OFF",
                      subHeader: "UPTO ₹120",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/burger-king-himayath-nagar-hyderabad-32129",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "228215",
                    name: "Cafe Niloufer Premium Lounge",
                    cloudinaryImageId: "8407ef45d6d2283bf18037c3619cb733",
                    locality: "Ivine Banjara Hno8-2",
                    areaName: "Banjara Hills",
                    costForTwo: "₹200 for two",
                    cuisines: ["Bakery", "Beverages", "Snacks", "Desserts"],
                    avgRating: 4.6,
                    parentId: "392382",
                    avgRatingString: "4.6",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 48,
                      lastMileTravel: 7,
                      serviceability: "SERVICEABLE",
                      slaString: "45-50 mins",
                      lastMileTravelString: "7.0 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 23:45:00",
                      opened: true,
                    },
                    badges: {
                      textExtendedBadges: [
                        {
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "options available",
                          fontColor: "#7E808C",
                        },
                      ],
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                              },
                            },
                          ],
                        },
                      },
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/cafe-niloufer-premium-lounge-ivine-banjara-hno8-2-banjara-hills-hyderabad-228215",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "140117",
                    name: "Imperial Multi-Cusine Restaurant",
                    cloudinaryImageId: "ib97mlmkhuwwv51syyca",
                    locality: "Saroor Nagar West",
                    areaName: "Saroor Nagar West",
                    costForTwo: "₹400 for two",
                    cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
                    avgRating: 4.3,
                    parentId: "19254",
                    avgRatingString: "4.3",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 39,
                      lastMileTravel: 6.8,
                      serviceability: "SERVICEABLE",
                      slaString: "35-40 mins",
                      lastMileTravelString: "6.8 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 23:59:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "₹75 OFF",
                      subHeader: "ABOVE ₹299",
                      discountTag: "FLAT DEAL",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/imperial-multi-cusine-restaurant-saroor-nagar-west-hyderabad-140117",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "27739",
                    name: "Cafe Niloufer Classic",
                    cloudinaryImageId: "1171b83d63d7c203e5f1c3e16980cd89",
                    locality: "Oshiwara",
                    areaName: "Red Hills",
                    costForTwo: "₹150 for two",
                    cuisines: ["Bakery", "Beverages", "Snacks", "Desserts"],
                    avgRating: 4.6,
                    parentId: "466854",
                    avgRatingString: "4.6",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 37,
                      lastMileTravel: 3.5,
                      serviceability: "SERVICEABLE",
                      slaString: "35-40 mins",
                      lastMileTravelString: "3.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-06 00:00:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                          description: "Delivery!",
                        },
                      ],
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "Delivery!",
                                imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/cafe-niloufer-classic-oshiwara-red-hills-hyderabad-27739",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "233053",
                    name: "Firangi Bake",
                    cloudinaryImageId: "r6iqnxigr9e8hrezcgsm",
                    locality: "Mahesh Nagar",
                    areaName: "Abids",
                    costForTwo: "₹400 for two",
                    cuisines: [
                      "Pizzas",
                      "Pastas",
                      "Italian",
                      "Mexican",
                      "Healthy Food",
                      "Desserts",
                      "Beverages",
                    ],
                    avgRating: 4.1,
                    parentId: "3952",
                    avgRatingString: "4.1",
                    totalRatingsString: "500+",
                    sla: {
                      deliveryTime: 43,
                      lastMileTravel: 2.2,
                      serviceability: "SERVICEABLE",
                      slaString: "40-45 mins",
                      lastMileTravelString: "2.2 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 23:59:00",
                      opened: true,
                    },
                    badges: {
                      textExtendedBadges: [
                        {
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "options available",
                          fontColor: "#7E808C",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                              },
                            },
                          ],
                        },
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "50% OFF",
                      subHeader: "UPTO ₹100",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/firangi-bake-mahesh-nagar-abids-hyderabad-233053",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "57903",
                    name: "Capital Multi Cuisine Restaurant",
                    cloudinaryImageId: "ijy2jxi7lfwsebdtazpi",
                    locality: "Malakpet",
                    areaName: "Malakpet",
                    costForTwo: "₹500 for two",
                    cuisines: ["Haleem", "Biryani", "Lebanese", "Arabian"],
                    avgRating: 4,
                    parentId: "19262",
                    avgRatingString: "4.0",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 44,
                      lastMileTravel: 7.5,
                      serviceability: "SERVICEABLE",
                      slaString: "40-45 mins",
                      lastMileTravelString: "7.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 23:59:00",
                      opened: true,
                    },
                    badges: {
                      textExtendedBadges: [
                        {
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "options available",
                          fontColor: "#7E808C",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                              },
                            },
                          ],
                        },
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "₹125 OFF",
                      subHeader: "ABOVE ₹249",
                      discountTag: "FLAT DEAL",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/capital-multi-cuisine-restaurant-malakpet-hyderabad-57903",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "17104",
                    name: "KFC",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/283329f9-5ad8-4c46-9177-6b23b6eb2966_17104.JPG",
                    locality: "Prime Plaza",
                    areaName: "Himayatnagar",
                    costForTwo: "₹400 for two",
                    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
                    avgRating: 4.2,
                    parentId: "547",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 34,
                      lastMileTravel: 1.5,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "1.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 23:45:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "Rxawards/_CATEGORY-Burger.png",
                          description: "Delivery!",
                        },
                      ],
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "Delivery!",
                                imageId: "Rxawards/_CATEGORY-Burger.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/kfc-prime-plaza-himayatnagar-hyderabad-17104",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "18012",
                    name: "Cafe Coffee Day",
                    cloudinaryImageId: "b70c7d23d197251b7b315b7e4d8173ae",
                    locality: "Sri Siva Rama Towers",
                    areaName: "Basheer Bagh",
                    costForTwo: "₹400 for two",
                    cuisines: [
                      "Beverages",
                      "Cafe",
                      "Snacks",
                      "Desserts",
                      "Burgers",
                      "Ice Cream",
                      "Bakery",
                      "Fast Food",
                    ],
                    avgRating: 4,
                    parentId: "1",
                    avgRatingString: "4.0",
                    totalRatingsString: "1K+",
                    sla: {
                      deliveryTime: 28,
                      lastMileTravel: 1.7,
                      serviceability: "SERVICEABLE",
                      slaString: "25-30 mins",
                      lastMileTravelString: "1.7 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2024-05-05 22:00:00",
                      opened: true,
                    },
                    badges: {
                      textExtendedBadges: [
                        {
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "options available",
                          fontColor: "#7E808C",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                              },
                            },
                          ],
                        },
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "₹150 OFF",
                      subHeader: "ABOVE ₹699",
                      discountTag: "FLAT DEAL",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                  },
                  analytics: {},
                  cta: {
                    link: "https://www.swiggy.com/restaurants/cafe-coffee-day-sri-siva-rama-towers-basheer-bagh-hyderabad-18012",
                    type: "WEBLINK",
                  },
                },
              ]
            // menu: [
            //   {
            //     id: 1,
            //     name: "Margherita Pizza",
            //     description: "Fresh mozzarella, tomato sauce, and basil.",
            //     price: 12.99,
            //     image:
            //       "https://media.istockphoto.com/id/1393150881/photo/italian-pizza-margherita-with-cheese-and-tomato-sauce-on-the-board-on-grey-table-macro-close.jpg?s=612x612&w=0&k=20&c=kL0Vhg2XKBjEl__iG8sFv31WTiahdpLc3rTDtNZuD2g=",
            //     is_vegetarian: true,
            //     is_spicy: false,
            //     delivery_time: 30,
            //     avgRating: 4.6
            //   },
            //   {
            //     id: 2,
            //     name: "Pepperoni Pizza",
            //     description: "Pepperoni, mozzarella, and tomato sauce.",
            //     price: 14.99,
            //     image:
            //       "https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_6240,h_4160,al_c,q_90/Pepperoni%20Pizza_1_compressed.jpg",
            //     is_vegetarian: false,
            //     is_spicy: true,
            //     delivery_time: 35,
            //     avgRating: 4.4
            //   },
            //   {
            //     id: 3,
            //     name: "Pesto Pasta",
            //     description: "Penne pasta with homemade pesto sauce.",
            //     price: 10.99,
            //     image:
            //       "https://silveroak.com/wp-content/uploads/2020/03/Recipe-Basil-Pesto-Pizza.jpg",
            //     is_vegetarian: true,
            //     is_spicy: false,
            //     delivery_time: 25,
            //     avgRating: 4.1
            //   },
            //   {
            //     id: 4,
            //     name: "Chicken Alfredo",
            //     description:
            //       "Fettuccine pasta with creamy Alfredo sauce and grilled chicken.",
            //     price: 13.99,
            //     image:
            //       "https://media.istockphoto.com/id/506916161/photo/homemade-fettucini-aflredo-pasta.jpg?s=612x612&w=0&k=20&c=Pa3dwlsqnPfOKgldMXuHVy5Aqmtbp8wThbj6V_4u5us=",
            //     is_vegetarian: false,
            //     is_spicy: false,
            //     delivery_time: 40,
            //     avgRating: 4
            //   },
            //   {
            //     id: 5,
            //     name: "Tiramisu",
            //     description:
            //       "Classic Italian dessert with ladyfingers, espresso, and mascarpone cream.",
            //     price: 6.99,
            //     image:
            //       "https://t3.ftcdn.net/jpg/03/28/01/60/360_F_328016056_Ro67OjyMT2dnGFL6v4VKKoAkIcakElTW.jpg",
            //     is_vegetarian: true,
            //     is_spicy: false,
            //     delivery_time: 15,
            //     avgRating: 3
            //   },
            // ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Food list not found.",
        });
      }
    }, 2000);
  });
};
