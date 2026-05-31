import "./HeaderComponent.css";
import logo from "../../Assets/Logo.svg";
import Navigation from "./NavComponent/NavigationComponent";
import { Link } from "react-router-dom";

const Header = ({ navItems }) => {
  return (
    <header className="headercontainer">
      <Link to="/">
        <img src={logo} alt="little lemon" className="logo" />
      </Link>
      <Navigation navItems={navItems} />
    </header>
  );
};

export default Header;
