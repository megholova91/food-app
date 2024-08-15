import { useContext, useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import UserContext from "../utils/UserContext";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const loginContainer = useRef(null);

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const closeLoginForm = () => {
    setIsLoginModalOpen(false);
  };

  const handleSubmit = (username) => {
    setLoggedInUser(username);
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogin = () => {
    if (isLoggedIn) {
      setShowProfileMenu((showProfileMenu) => !showProfileMenu);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLogout = (e) => {
    e.stopPropagation();
    setShowProfileMenu(false);
    setLoggedInUser("");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const mouseDownHandler = (evt) => {
      if (!loginContainer?.current?.contains(evt.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", mouseDownHandler);

    return () => {
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  }, [loginContainer]);

  return (
    <>
      <li
        className="p-3 m-3 cursor-pointer relative"
        onClick={handleLogin}
        ref={loginContainer}
      >
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
        open={isLoginModalOpen}
        onClose={closeLoginForm}
        className=" w-1/3 rounded-2xl shadow-lg"
      >
        <LoginForm onLogin={handleSubmit} />
      </Modal>
    </>
  );
};

export default Login;
