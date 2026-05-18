import "./StartUpComponent.css";
import Hero from "./Components/HeroComponent/HeroComponent";
import About from "./Components/AboutComponent/AboutComponent";
import Menu from "./Components/MenuComponent/MenuComponent";
import Orders from "./Components/OrdersComponent/OrdersComponent";
import Reservation from "./Components/ReservationsComponent/ReservationsComponent";

const StartUp = () => {
  return (
    <div className="startupSection">
      <Hero />
      <About />
      <Menu />
      <Orders />
      <Reservation />
    </div>
  );
};

export default StartUp;
