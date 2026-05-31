import "./StartUpComponent.css";
import Hero from "./Components/HeroComponent/HeroComponent";
import Testimonials from "./Components/TestimonialsComponent/TestimonialsComponent";
import Highlights from "./Components/HighlightsComponent/HighlightsComponent";

const StartUp = () => {
  return (
    <div className="startupSection">
      <Hero />
      <Highlights />
      <Testimonials />
    </div>
  );
};

export default StartUp;
