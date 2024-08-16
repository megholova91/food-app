import { Link } from "react-router-dom";
import { EmptyCart } from "../assets";
import ItemList from "./ItemList";
import useCartContext from "../hooks/useCartContextProvider";

const Cart = () => {
  const { items, clearCart } = useCartContext();

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="w-1/2 mx-auto">
        {/* <button
          className="h-full border border-solid border-black pointer rounded-md px-2 bg-red-400"
          onClick={handleClearCart}
        >
          Clear cart
        </button> */}
        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={EmptyCart} />
            <h1 className="font-extrabold text-lg">
              Looks like your cart is empty!
            </h1>
            <Link
              to="/"
              className="py-2 px-8 bg-orange-600 rounded-lg text-white shadow-lg font-bold"
            >
              Go to home page to view restaurants
            </Link>
          </div>
        )}
        <ItemList items={items} isCartView />
      </div>
    </div>
  );
};

export default Cart;
