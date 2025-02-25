import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, description, price, delivery_time, image } = resData;

  return (
    <div className="res-card">
      <img src={image} alt="food" className="card-img" width="100px" />
      <h3>{name}</h3>
      <h4>{description}</h4>
      <h4>{price}₹</h4>
      <h4>{delivery_time}</h4>
    </div>
  );
};

export default RestaurantCard;
