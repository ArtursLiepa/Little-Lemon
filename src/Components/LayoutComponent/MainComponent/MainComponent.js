import "./MainComponent.css";
import { Outlet } from "react-router";
import useSubmit from "../../.././hooks/useSubmit";

const MainComponent = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default MainComponent;
