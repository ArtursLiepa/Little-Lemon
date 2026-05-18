import "./MainComponent.css";
import { Outlet } from "react-router";

const MainComponent = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default MainComponent;
