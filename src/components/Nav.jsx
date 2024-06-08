import useOnlineStatus from "../hooks/useOnlineStatus";

const Nav = () => {
  const isOnline = useOnlineStatus();
  return (
    <div className="text-lg">
      <ul className="flex p-4">
        <li className="p-3 m-3">Online status : {isOnline ? "🟢" : "🔴"}</li>
        <li className="p-3 m-3">Home</li>
        <li className="p-3 m-3">About us</li>
        <li className="p-3 m-3">Contact Us</li>
        <li className="p-3 m-3">Login</li>
        <li className="p-3 m-3">Cart</li>
      </ul>
    </div>
  );
};

export default Nav;
