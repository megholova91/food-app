import { useContext, useState } from "react";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import UserContext from "../utils/UserContext";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const closeLoginForm = () => {
    setIsOpen(false);
  };

  const handleSubmit = (username) => {
    setLoggedInUser(username);
    setIsLoggedIn(true);
    setIsOpen(false);
  };

  const handleLogin = () => {
    if (isLoggedIn) {
      setShowProfileMenu(true);
    } else {
      setIsOpen(true);
    }
  };

  const handleLogout = (e) => {
    e.stopPropagation();
    setShowProfileMenu(false);
    setLoggedInUser("");
    setIsLoggedIn(false);
  };

  return (
    <>
      <li className="p-3 m-3 cursor-pointer relative" onClick={handleLogin}>
        {isLoggedIn ? loggedInUser : "Login"}
        {showProfileMenu && (
          <ul className="absolute border border-gray-500 p-4 right-0 mt-2 bg-white rounded-xl before:content-[''] before:absolute before:rotate-45 before:bg-white before:border-l before:border-l-gray-500 before:border-t before:border-t-gray-500 before:w-3 before:h-3 before:-top-[7px] before:right-6">
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        )}
      </li>
      <Modal
        open={isOpen}
        onClose={closeLoginForm}
        className="h-2/3 w-1/3 rounded-2xl shadow-lg"
      >
        <LoginForm onLogin={handleSubmit} />
      </Modal>
    </>
  );
};

export default Login;
