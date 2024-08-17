import { useParams } from "react-router-dom";
import { CORS_PROXY, SWIGGY_MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(CORS_PROXY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: SWIGGY_MENU_API + resId,
      }),
    });

    const json = await data.json();
    setRestaurantInfo(json.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
