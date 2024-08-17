import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CORS_PROXY, SWIGGY_API } from "../utils/constants";
import Search from "./Search";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { Link } from "react-router-dom";
import Close from "../assets";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [showTopRatedRestaurants, setShowTopRatedRestaurants] = useState(false);

  const isOnline = useOnlineStatus();

  //filter restaurants with 4+ rating
  const filterTopRatedRestaurants = () => {
    const filteredListOfRestaurants = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setFilteredRestaurants(filteredListOfRestaurants);
    setShowTopRatedRestaurants(true);
  };

  const resetTopRatedRestaurants = (e) => {
    e.stopPropagation();
    setShowTopRatedRestaurants(false);
    setFilteredRestaurants(listOfRestaurants);
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

  const handleResetSearchQuery = () => {
    setSearchQuery("");
    setFilteredRestaurants(listOfRestaurants);
  };

  const fetchData = async () => {
    const data = await fetch(CORS_PROXY + SWIGGY_API);
    const jsonData = await data.json();
    const restaurantList =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!isOnline) return <h1>Looks like you are offline!</h1>;

  return (
    <div className="py-5 m-3">
      <div className="flex flex-col item-center gap-8 mb-8">
        <Search
          handleChange={handleChange}
          searchQuery={searchQuery}
          searchRestaurant={searchRestaurant}
          resetSearchQuery={handleResetSearchQuery}
        />
        <div className="h-12 flex">
          <button
            className="h-full pointer px-2 bg-blue-700 mx-4 rounded-lg text-white p-3 font-bold flex items-center gap-4"
            onClick={filterTopRatedRestaurants}
          >
            Top Rated Restaurants
            {showTopRatedRestaurants && (
              <span onClick={resetTopRatedRestaurants} className="fill-white">
                <Close height={15} width={15} />
              </span>
            )}
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
