import React from "react";
import "./RestaurantCard.css";
import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    description,
    costForTwo,
    sla: { slaString },
    cloudinaryImageId,
    avgRating,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="food"
        className="card-img"
        width="100px"
      />
      <h3>{name}</h3>
      <h4>{description}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
