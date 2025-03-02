import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { fakeFetch } from "../../utils/mockData";
import "./Main.css";
import Shimmer from "../Shimmer/Shimmer";

const Main = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [txtValue, setTxtValue] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const json = await fakeFetch("https://example.com/api/menu");
    console.log(json.data.menu);
    setListOfRestaurant(json.data.menu);
    setFilterRestaurant(json.data.menu);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="main-heading">
        {" "}
        <h2>Order food & groceries. Discover best restaurants.</h2>{" "}
      </div>

      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-btn"
            value={txtValue}
            onChange={(e) => {
              setTxtValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) =>
                res.name.toLowerCase().includes(txtValue.toLowerCase())
              );
              setFilterRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn-filter"
          onClick={() => {
            const filterData = listOfRestaurant.filter(
              (res) => res.avgRating > 4
            );
            setFilterRestaurant(filterData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Main;
