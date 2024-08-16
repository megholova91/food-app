import { Down, Up } from "../assets";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, toggleCategory }) => {
  const { title, itemCards } = data;
  return (
    <div className="shadow-lg p-4 w-2/3 mx-auto bg-gray-50 my-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleCategory}
      >
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        <span>
          {showItems ? (
            <Up height={15} width={15} />
          ) : (
            <Down height={15} width={15} />
          )}
        </span>
      </div>
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
