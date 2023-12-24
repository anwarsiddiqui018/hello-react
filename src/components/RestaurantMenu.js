import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  console.log("Component rendered!");

  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    console.log("Effect triggered!");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log("Restaurant menu", json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, totalRatingsString, avgRatingString } =
    resInfo?.cards[0]?.card?.card?.info;

  const { title : title1 } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const { title : title2 } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  const { title : title3 } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  const { infoOffers } =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[0];

  const { itemCards: itemCards1 } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const { itemCards: itemCards2 } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  const { itemCards: itemCards3 } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{totalRatingsString}</p>
      <p>{avgRatingString}</p>
      <h1>Default</h1>
      <p>{infoOffers?.couponCode}</p>
      <p>{infoOffers?.description}</p>
      <p>{infoOffers?.header}</p>
      <h3>{title1}</h3>
      <ul>
        {itemCards1.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs "} {item.card.info.defaultPrice / 100}
            category ----- {item.card.info.category}
          </li>
        ))}
      </ul>
      <h3>{title2}</h3>
      <ul>
        {itemCards2 &&
          itemCards2.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
      </ul>
      <h3>{title3}</h3>
      <ul>
        {itemCards3 &&
          itemCards3.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
