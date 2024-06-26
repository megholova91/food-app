import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CORS_PROXY, SWIGGY_API } from "../utils/constants";
import Search from "./Search";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const isOnline = useOnlineStatus();

  //filter restaurants with 4+ rating
  const filterTopRatedRestaurants = () => {
    const filteredListOfRestaurants = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setFilteredRestaurants(filteredListOfRestaurants);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //search for restaurant
  const searchRestaurant = () => {
    const query = searchQuery.toLowerCase();
    if (!query) {
      setFilteredRestaurants(listOfRestaurants);
    } else {
      const filteredListOfRestaurants = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(query)
      );
      setFilteredRestaurants(filteredListOfRestaurants);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CORS_PROXY + SWIGGY_API);
    const jsonData = await data.json();
    const restaurantList =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  };

  if (!isOnline) return <h1>Looks like you are offline!</h1>;

  return (
    <div className="py-5 m-3">
      <div className="flex itemx-center h-12 gap-2 mb-4">
        <Search
          handleChange={handleChange}
          searchQuery={searchQuery}
          searchRestaurant={searchRestaurant}
        />
        <div className="h-full flex">
          <button
            className="h-full border border-solid border-black pointer rounded-md px-2 bg-red-400"
            onClick={filterTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((resData) => (
            <Link to={`/restaurant/${resData.info.id}`} key={resData.info.id}>
              <RestaurantCard resData={resData} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
