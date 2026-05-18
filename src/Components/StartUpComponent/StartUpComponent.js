import "./StartUpComponent.css";
import Hero from "./Components/HeroComponent/HeroComponent";
import About from "./Components/AboutComponent/AboutComponent";
import Testimonials from "./Components/TestimonialsComponent/TestimonialsComponent";
import Highlights from "./Components/HighlightsComponent/HighlightsComponent";

const StartUp = () => {
  return (
    <div className="startupSection">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </div>
  );
};

export default StartUp;
