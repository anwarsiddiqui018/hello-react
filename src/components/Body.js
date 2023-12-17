import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9918107&lng=77.67329749999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)
    setListOfRestaurant(json?.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurant(json?.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  }

  
    return listOfRestaurant.length === 0 ? <Shimmer/> :
    (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input 
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e)=> {
                setSearchText(e.target.value)

              }}
            />
            <button onClick={()=> {
                console.log(searchText);
                const filteredRestaurant = listOfRestaurant.filter(
                  (res) => res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              Search 
            </button>

          </div>
          <button
            className="filter-btn"
            onClick={()=> {
              const filteredRestaurant = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.0
              );
              setListOfRestaurant(filteredRestaurant);
          }}
        >
           Top Rated Restaurant
          </button>
         </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
        {/* RestaurantCard separate component*/}
      </div>
    );
  };

  export default Body;