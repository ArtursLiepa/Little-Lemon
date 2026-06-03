import "./AboutComponent.css";
import photo1 from "../../Assets/restaurant chef B.jpg";
import photo2 from "../../Assets/restaurant.jpg";
import { useTheme } from "../../Context/ThemeContext";

const AboutComponent = () => {
  const { theme } = useTheme();
  return (
    <div className={`aboutcontainer ${theme === "light" ? "light" : "dark"}`}>
      <article className="titlesection">About</article>
      <section className="aboutsection">
        <h3 className="sectiontitle">Chicago</h3>
        <div className="abouttext">
          <p>
            Welcome to Little Lemon, a family-owned Mediterranean restaurant
            located in the heart of Chicago.
          </p>
        </div>

        <div className="restaurantphotosection">
          <div className="restaurantphoto">
            <img src={photo2} alt="mario and adrian"></img>
          </div>
        </div>
        <h3 className="sectiontitle">Owners</h3>
        <section className="aboutbrothers">
          <div className="aboutbrotherstext">
            <p>
              Founded by brothers Mario and Adrian, Little Lemon was born from a
              shared passion for authentic Mediterranean cuisine, warm
              hospitality, and bringing people together through unforgettable
              dining experiences. Inspired by their Italian heritage and love
              for the diverse flavors of the Mediterranean, the brothers set out
              to create a restaurant that blends tradition with innovation.
            </p>
          </div>

          <div className="brothersphotosection">
            <div className="brothersphoto">
              <img src={photo1} alt="restaurant chief"></img>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutComponent;
