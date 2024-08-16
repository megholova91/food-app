import { useContext, useState } from "react";
import { createContext } from "react";

/**
 * Each unique item is added to the items array
 * Count of each unique item is maintained in the itemsCount mapper
 */
const CartContext = createContext({
  items: [],
  itemsCount: {},
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState({});

  const addItem = (item) => {
    //check if item is already present & add its count to mapper
    const { id } = item.card.info;
    const prevItemsCount = { ...itemsCount };
    if (prevItemsCount[id]) {
      prevItemsCount[id]++;
    } else {
      prevItemsCount[id] = 1;
    }
    setItemsCount(prevItemsCount);

    //add item to cart list only if it is a new item
    if (prevItemsCount[id] === 1) {
      const prevItems = [...items];
      prevItems.push(item);
      setItems(prevItems);
    }
  };

  const removeItem = (item) => {
    //check if item is already present & subtract its count to mapper
    const { id } = item.card.info;
    const prevItemsCount = { ...itemsCount };
    if (prevItemsCount[id]) {
      prevItemsCount[id]--;
    }
    if (prevItemsCount[id] === 0) {
      delete prevItemsCount[id];
    }
    setItemsCount(prevItemsCount);

    //remove item from cart list only if the count has become 0
    if (!prevItemsCount[id]) {
      const idx = items.findIndex(
        (it) => it.card.info.id === item.card.info.id
      );
      console.log("item to be deleted is at index : ", idx);
      const prevItems = [...items];
      prevItems.splice(idx, 1);
      console.log("updated items list : ", prevItems);
      setItems(prevItems);
    }
  };

  const clearCart = () => {
    setItems([]);
    setItemsCount({});
  };

  return (
    <CartContext.Provider
      value={{ items, itemsCount, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const { items, itemsCount, addItem, removeItem, clearCart } =
    useContext(CartContext);

  return {
    items,
    itemsCount,
    addItem,
    removeItem,
    clearCart,
  };
};

export default useCartContext;
