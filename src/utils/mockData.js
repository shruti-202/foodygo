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
                id: 1,
                name: "Margherita Pizza",
                description: "Fresh mozzarella, tomato sauce, and basil.",
                price: 12.99,
                image:
                  "https://media.istockphoto.com/id/1393150881/photo/italian-pizza-margherita-with-cheese-and-tomato-sauce-on-the-board-on-grey-table-macro-close.jpg?s=612x612&w=0&k=20&c=kL0Vhg2XKBjEl__iG8sFv31WTiahdpLc3rTDtNZuD2g=",
                is_vegetarian: true,
                is_spicy: false,
                delivery_time: 30,
                avgRating: 4.6,
              },
              {
                id: 2,
                name: "Pepperoni Pizza",
                description: "Pepperoni, mozzarella, and tomato sauce.",
                price: 14.99,
                image:
                  "https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_6240,h_4160,al_c,q_90/Pepperoni%20Pizza_1_compressed.jpg",
                is_vegetarian: false,
                is_spicy: true,
                delivery_time: 35,
                avgRating: 4.4,
              },
              {
                id: 3,
                name: "Pesto Pasta",
                description: "Penne pasta with homemade pesto sauce.",
                price: 10.99,
                image:
                  "https://silveroak.com/wp-content/uploads/2020/03/Recipe-Basil-Pesto-Pizza.jpg",
                is_vegetarian: true,
                is_spicy: false,
                delivery_time: 25,
                avgRating: 4.1,
              },
              {
                id: 4,
                name: "Chicken Alfredo",
                description:
                  "Fettuccine pasta with creamy Alfredo sauce and grilled chicken.",
                price: 13.99,
                image:
                  "https://media.istockphoto.com/id/506916161/photo/homemade-fettucini-aflredo-pasta.jpg?s=612x612&w=0&k=20&c=Pa3dwlsqnPfOKgldMXuHVy5Aqmtbp8wThbj6V_4u5us=",
                is_vegetarian: false,
                is_spicy: false,
                delivery_time: 40,
                avgRating: 4,
              },
              {
                id: 5,
                name: "Tiramisu",
                description:
                  "Classic Italian dessert with ladyfingers, espresso, and mascarpone cream.",
                price: 6.99,
                image:
                  "https://t3.ftcdn.net/jpg/03/28/01/60/360_F_328016056_Ro67OjyMT2dnGFL6v4VKKoAkIcakElTW.jpg",
                is_vegetarian: true,
                is_spicy: false,
                delivery_time: 15,
                avgRating: 3,
              },
            ],
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
