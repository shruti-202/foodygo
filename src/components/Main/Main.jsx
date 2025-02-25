import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { fakeFetch } from "../../utils/mockData";
import "./Main.css";
import Shimmer from "../Shimmer/Shimmer";

const Main = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const json = await fakeFetch("https://example.com/api/menu");
    console.log(json.data.menu);
    setListOfRestaurant(json.data.menu);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            const filterData = listOfRestaurant.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurant(filterData);
            console.log("clicked");
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Main;
