import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const restaurantInfo = useRestaurantMenu();
  const [expandedCategoryIdx, setExpandedCategoryIdx] = useState(null);

  if (!restaurantInfo) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    restaurantInfo?.cards[2]?.card.card.info;

  const categories =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const toggleCategory = (index) => {
    if (expandedCategoryIdx === index) setExpandedCategoryIdx(null);
    else setExpandedCategoryIdx(index);
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {categories.map((category, idx) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={idx === expandedCategoryIdx ? true : false}
          toggleCategory={() => toggleCategory(idx)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
