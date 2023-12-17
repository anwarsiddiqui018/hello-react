import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props; // destructuring on the fly
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
      areaName,
      // deliveryTime,
      totalRatingsString,
      // sla.deliveryTime,
    } = resData?.info; // this is optional chaining

    const { deliveryTime, lastMileTravel, serviceability, slaString, lastMileTravelString, iconType } = sla;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{slaString}</h4>
        <h4>{totalRatingsString}</h4>
        
      </div>
    );
  };

  export default RestaurantCard;