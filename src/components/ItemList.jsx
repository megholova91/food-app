import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item, idx, items) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item.card.info;
        const borderBottom = idx === items.length - 1 ? "" : "border-b-2";
        return (
          <div
            data-testid="menu-item"
            key={id}
            className={`flex gap-4 px-2 py-6 border-gray-200 ${borderBottom}`}
          >
            <div className="w-9/12">
              <div className="flex py-2 gap-2">
                <span>{name}</span>
                <span>- ₹{price ? price / 100 : defaultPrice / 100}</span>
              </div>
              <p className="text-left text-xs text-gray-700">{description}</p>
            </div>
            <div className="w-3/12 relative">
              <div className="absolute -bottom-4 right-1/2 translate-x-1/2">
                <button
                  className="py-2 px-8 bg-white rounded-lg text-green-700 shadow-lg font-bold"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
              <img src={CDN_URL + imageId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
