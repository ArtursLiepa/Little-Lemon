import "./NavigationComponent.css";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const List = props.navItems.map((items) => {
    return (
      <li className="navItem" key={items.id}>
        <a href={`${items.path}`}>{items.name}</a>
        {/* <Link to={`#${items.path}`}>{items.name}</Link> */}
      </li>
    );
  });

  return (
    <nav>
      <ul className="naviList">{List}</ul>
    </nav>
  );
};

export default Navigation;
