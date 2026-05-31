import "./NavigationComponent.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Navigation = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const List = navItems.map((items) => {
    return (
      <li className="navItem" key={items.id}>
        {items.pathType === "inner" ? (
          <a href={`/#${items.path}`} onClick={() => setIsOpen(false)}>
            {items.name}
          </a>
        ) : (
          <Link to={items.path} onClick={() => setIsOpen(false)}>
            {items.name}
          </Link>
        )}
      </li>
    );
  });

  return (
    <nav>
      <button
        className="hamburger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <FaBars />
      </button>
      <ul ref={navRef} className={`naviList ${isOpen ? "open" : ""}`}>
        {List}
      </ul>
    </nav>
  );
};

export default Navigation;
