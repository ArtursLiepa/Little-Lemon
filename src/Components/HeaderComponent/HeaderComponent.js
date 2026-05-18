import "./HeaderComponent.css";
import logo from "../../Assets/Logo.svg";
import Navigation from "./NavComponent/NavigationComponent";
import { Link } from "react-router-dom";

const Header = () => {
  const navList = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/#about",
      name: "About",
    },
    {
      id: 3,
      path: "/#menu",
      name: "Menu",
    },
    {
      id: 4,
      path: "/#reservation",
      name: "Reservations",
    },
    {
      id: 5,
      path: "/#orders",
      name: "Order online",
    },
    {
      id: 5,
      path: "login",
      name: "Login",
    },
  ];

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="little lemon" className="titleImage" />
      </Link>

      <Navigation navItems={navList} />
    </header>
  );
};

export default Header;
