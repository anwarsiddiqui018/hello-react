import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  console.log("Component rendered!");

  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  
  console.log("Current resId:", resId);

  useEffect(() => {
    console.log("Effect triggered!");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines,  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs "} {item.card.info.defaultPrice / 100}
          </li>
        ))}
        <li>{itemCards.length}</li>
        
      </ul>
    </div>
  );
};

export default RestaurantMenu;
