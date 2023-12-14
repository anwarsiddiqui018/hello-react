import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";





const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    return (
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={()=> {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.0
              );
              setListOfRestaurant(filteredList);
          }}
        >
           Top Rated Restaurant
          </button>
         </div>
        <div className="res-container">
          {listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
        {/* RestaurantCard separate component*/}
      </div>
    );
  };

  export default Body;