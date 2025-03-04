import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utils/constant";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_URL + resId);

    const data = await response.json();
    console.log(data);
    setRestaurantInfo(data.data);
  };

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card.info;
  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <img src={cloudinaryImageId} alt="menu" />
      <h2>Menu List</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {item?.card?.info?.price} ₹
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
