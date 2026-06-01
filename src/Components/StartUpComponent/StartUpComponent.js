import "./StartUpComponent.css";
import Hero from "./Components/HeroComponent/HeroComponent";
import Testimonials from "./Components/TestimonialsComponent/TestimonialsComponent";
import Highlights from "./Components/HighlightsComponent/HighlightsComponent";
import { useTheme } from "../../Context/ThemeContext";

const StartUp = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`startupSection ${theme === "light" ? "light" : "dark"}`}
      // style={{ background: theme === "light" ? "white" : "black" }}
    >
      <Hero />
      <Highlights />
      <Testimonials />
    </div>
  );
};

export default StartUp;
