import Header from "../HeaderComponent/HeaderComponent";
import MainComponent from "./MainComponent/MainComponent";
import FooterComponent from "./FooterComponent/FooterComponent";

const LayoutComponent = () => {
  return (
    <div className="appContainer">
      <Header />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
