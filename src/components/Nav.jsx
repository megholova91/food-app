import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import Login from "./Login";

const Nav = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="text-lg">
      <ul className="flex p-4">
        <li className="p-3 m-3">Online status : {isOnline ? "🟢" : "🔴"}</li>
        <li className="p-3 m-3">
          <Link to="/">Home</Link>
        </li>
        <li className="p-3 m-3">
          <Link to="/about">About us</Link>
        </li>
        <li className="p-3 m-3">
          <Link to="/contact">Contact Us</Link>
        </li>
        <Login />
        <li className="p-3 m-3">Cart</li>
      </ul>
    </div>
  );
};

export default Nav;
