import "./HeaderComponent.css";
import logo from "../../Assets/Logo.svg";
import Navigation from "./NavComponent/NavigationComponent";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import { useState } from "react";

const Header = ({ navItems }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="headercontainer"
      style={{ background: theme === "light" ? "white" : "black" }}
    >
      <div className="themecontainer">
        <button
          disabled={theme === "light"}
          className={`lightthemepart ${theme === "light" ? "default" : "yellow"}`}
          onClick={toggleTheme}
        >
          Light
        </button>
        <button
          disabled={theme === "dark"}
          className={`darkthemepart ${theme === "light" ? "yellow" : "default"}`}
          onClick={toggleTheme}
        >
          Dark
        </button>
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="little lemon" />
        </Link>
      </div>

      <div className="headernav">
        <Navigation navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
