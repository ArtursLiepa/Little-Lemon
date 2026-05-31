import Header from "../HeaderComponent/HeaderComponent";
import MainComponent from "./MainComponent/MainComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import "./LayoutComponent.css";

const LayoutComponent = () => {
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
      pathType: "page",
      name: "About",
    },
    {
      id: 3,
      path: "underconstruction",
      pathType: "page",
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
      path: "underconstruction",
      pathType: "page",
      name: "Order online",
    },
    {
      id: 6,
      path: "underconstruction",
      pathType: "page",
      name: "Login",
    },
  ];
  return (
    <div className="appContainer">
      <Header navItems={navList} />
      <MainComponent />
      <FooterComponent navItems={navList} />
    </div>
  );
};

export default LayoutComponent;
