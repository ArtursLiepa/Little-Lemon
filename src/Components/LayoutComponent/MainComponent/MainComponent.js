import "./MainComponent.css";
import { Outlet } from "react-router";

const MainComponent = () => {
  return (
    <main className="mainsection">
      <Outlet />
    </main>
  );
};

export default MainComponent;
