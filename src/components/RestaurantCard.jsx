import { Star } from "../assets";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div
      data-testid="res-card"
      className="w-[250px] h-[450px] bg-gray-100 cursor-pointer m-2 border border-solid border-transparent rounded hover:bg-gray-200"
    >
      <img
        className="w-full h-48 p-2 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="p-4">
        <h3 className="font-extrabold mb-2">{name}</h3>
        <span className="flex gap-4 mb-2">
          <span className="fill-orange-600 flex">
            <Star height={25} width={25} />
            <h4>{avgRating}</h4>
          </span>
          <h4 className="before:content-['•'] before:pr-2">{sla?.slaString}</h4>
        </span>
        <h4>{costForTwo}</h4>
        <h4 className="text-sm">{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
