import "./HeaderComponent.css";
import logo from "../../Assets/Logo.svg";
import Navigation from "./NavComponent/NavigationComponent";
import { Link } from "react-router-dom";

const Header = () => {
  const navList = [
    {
      id: 1,
      path: "/",
      pathType: "page",
      name: "Home",
    },
    {
      id: 2,
      path: "about",
      pathType: "inner",
      name: "About",
    },
    {
      id: 3,
      path: "testimonials",
      pathType: "inner",
      name: "Menu",
    },
    {
      id: 4,
      path: "reservation/details",
      pathType: "page",
      name: "Reservations",
    },
    {
      id: 5,
      path: "/#orders",
      pathType: "inner",
      name: "Order online",
    },
    {
      id: 5,
      path: "underconstruction",
      pathType: "page",
      name: "Login",
    },
  ];

  return (
    <header className="headerClass">
      <Link to="/">
        <img src={logo} alt="little lemon" className="titleImage" />
      </Link>

      <Navigation navItems={navList} />
    </header>
  );
};

export default Header;
