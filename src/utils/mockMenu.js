const mockMenu = 
{
  data: {
    cards: [
      {
        card: {
          card: {
            info: {
              id: "1",
              name: "KFC",
              costForTwoMessage: "₹400 for two",
              cuisines: ["Burgers", "Fast Food", "American"],
              avgRating: "4.2",
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "kfc101",
                              name: "Chicken Zinger Burger",
                              description: "Crispy chicken fillet with mayo and lettuce",
                              imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/8/629d0ad6-57bc-4e-b84e",
                              price: 18900,
                              isVeg: false,
                              avgRating: "4.5",
                              ratingCount: "245",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "kfc102",
                              name: "Hot & Crispy Chicken (6 Pcs)",
                              description: "6 pieces of signature hot & crispy chicken",
                              imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/8/2226d781-a399-4a",
                              price: 39900,
                              isVeg: false,
                              avgRating: "4.7",
                              ratingCount: "189",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "kfc103",
                              name: "Veg Zinger Burger",
                              description: "Crispy veg patty with special sauces",
                              imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/8/451c16a2-a630-497b",
                              price: 15900,
                              isVeg: true,
                              avgRating: "4.2",
                              ratingCount: "156",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};

// McDonald's Menu
export const mcdonaldsMenu = {
  data: {
    cards: [
      {
        card: {
          card: {
            info: {
              id: "2",
              name: "McDonald's",
              costForTwoMessage: "₹350 for two",
              cuisines: ["Burgers", "American", "Fast Food"],
              avgRating: "4.5",
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Value Meals",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "mcd101",
                              name: "McAloo Tikki Burger",
                              description: "Our signature aloo tikki burger",
                              imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/8/629d0ad6-57bc-4e-b84e",
                              price: 4900,
                              isVeg: true,
                              avgRating: "4.3",
                              ratingCount: "456",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "mcd102",
                              name: "McChicken Burger",
                              description: "Tender chicken patty with fresh lettuce",
                              imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/8/2226d781-a399-4a",
                              price: 12900,
                              isVeg: false,
                              avgRating: "4.6",
                              ratingCount: "312",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};

// Burger King Menu
export const burgerKingMenu = {
  data: {
    cards: [
      {
        card: {
          card: {
            info: {
              id: "3",
              name: "Burger King",
              costForTwoMessage: "₹300 for two",
              cuisines: ["Burgers", "Fast Food"],
              avgRating: "4.0",
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Whopper Range",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "bk101",
                              name: "Whopper Burger",
                              description: "Flame-grilled beef patty with fresh veggies",
                              imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/8/629d0ad6-57bc-4e-b84e",
                              price: 19900,
                              isVeg: false,
                              avgRating: "4.4",
                              ratingCount: "287",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "bk102",
                              name: "Veg Whopper",
                              description: "Flame-grilled veg patty with fresh veggies",
                              imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/8/2226d781-a399-4a",
                              price: 17900,
                              isVeg: true,
                              avgRating: "4.2",
                              ratingCount: "198",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};

// Domino's Pizza Menu
export const dominosMenu = {
  data: {
    cards: [
      {
        card: {
          card: {
            info: {
              id: "4",
              name: "Domino's Pizza",
              costForTwoMessage: "₹500 for two",
              cuisines: ["Pizzas", "Italian", "Fast Food"],
              avgRating: "4.3",
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Veg Pizzas",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "dom101",
                              name: "Margherita",
                              description: "Classic cheese and tomato pizza",
                              imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/8/629d0ad6-57bc-4e-b84e",
                              price: 19900,
                              isVeg: true,
                              avgRating: "4.2",
                              ratingCount: "567",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "dom102",
                              name: "Farmhouse",
                              description: "Loaded with veggies and cheese",
                              imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/8/2226d781-a399-4a",
                              price: 29900,
                              isVeg: true,
                              avgRating: "4.5",
                              ratingCount: "432",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};

// Subway Menu
export const subwayMenu = {
  data: {
    cards: [
      {
        card: {
          card: {
            info: {
              id: "5",
              name: "Subway",
              costForTwoMessage: "₹250 for two",
              cuisines: ["Sandwiches", "Healthy Food", "Salads"],
              avgRating: "4.6",
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Signature Sandwiches",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "sub101",
                              name: "Veggie Delite",
                              description: "Fresh veggies on whole wheat bread",
                              imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/8/629d0ad6-57bc-4e-b84e",
                              price: 12900,
                              isVeg: true,
                              avgRating: "4.4",
                              ratingCount: "345",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "sub102",
                              name: "Chicken Teriyaki",
                              description: "Grilled chicken with teriyaki sauce",
                              imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/8/2226d781-a399-4a",
                              price: 19900,
                              isVeg: false,
                              avgRating: "4.7",
                              ratingCount: "289",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};

export default mockMenu;
