import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import Login from "./Login";
import Cart from "./Cart";
import { CartIcon } from "../assets";
import useCartContext from "../hooks/useCartContextProvider";
import { useMemo } from "react";

const Nav = () => {
  const isOnline = useOnlineStatus();
  const { itemsCount } = useCartContext();

  const totalCartItems = useMemo(
    () => Object.values(itemsCount).reduce((acc, count) => acc + count, 0),
    [itemsCount]
  );

  return (
    <div className="text-lg">
      <ul className="flex items-center p-4">
        <li className="p-3 m-3">Online status : {isOnline ? "🟢" : "🔴"}</li>
        <li className="p-3 m-3">
          <Link to="/">Home</Link>
        </li>
        <li className="p-3 m-3">
          <Link to="/about">About Us</Link>
        </li>
        <li className="p-3 m-3">
          <Link to="/contact">Contact Us</Link>
        </li>
        <Login />
        <li className="pr-3 mr-3 cursor-pointer">
          <Link to="/cart">
            <span className="fill-orange-600 relative">
              <CartIcon />
              {totalCartItems > 0 && (
                <span className="absolute -top-2 right-0 bg-orange-600 rounded-full text-xs text-white py-1 px-2">
                  {totalCartItems}
                </span>
              )}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
