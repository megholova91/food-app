import { Logo as LogoImg } from "../assets";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-lg">
      <img className="w-32" src={LogoImg} />
      <Nav />
    </div>
  );
};

export default Header;
