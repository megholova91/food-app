import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://crossproxy.io/?" + SWIGGY_API);
    const jsonData = await data.json();
    const restaurantList =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurantList);
  };

  return (
    <div className="py-5 m-3">
      <div className="flex flex-wrap">
        {listOfRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          listOfRestaurants.map((resData) => (
            <RestaurantCard resData={resData} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
