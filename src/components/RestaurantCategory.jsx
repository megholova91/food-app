import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data, showItems, toggleCategory } = props;
  const { title, itemCards } = data;
  return (
    <div className="shadow-lg p-4 w-1/2 mx-auto bg-gray-50 my-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleCategory}
      >
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
