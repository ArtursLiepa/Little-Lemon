import "./NavigationComponent.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navigation = (props) => {
  const List = props.navItems.map((items) => {
    return (
      <li className="navItem" key={items.id}>
        {items.pathType === "inner" ? (
          <a href={`/#${items.path}`}>{items.name}</a>
        ) : (
          <Link to={items.path}>{items.name}</Link>
        )}
      </li>
    );
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button
        className="hamburger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <FaBars />
      </button>
      <ul className={`naviList ${isOpen ? "open" : ""}`}>{List}</ul>
    </nav>
  );
};

export default Navigation;
