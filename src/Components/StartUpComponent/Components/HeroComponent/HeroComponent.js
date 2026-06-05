import "./HeroComponent.css";
import { Link } from "react-router-dom";
import restauratnFood from "../../../../Assets/restauranfood.jpg";

const Hero = () => {
  return (
    <div id="home" className="heroSection">
      <div className="heroTtitle">
        <article>Little Lemon</article>
        <h2>Chicago</h2>
      </div>
      <div className="heroImageContainer">
        <div className="heroImage">
          <img src={restauratnFood} alt="restaurant food"></img>
        </div>
      </div>
      <div className="heroDescription">
        <p>
          Little Lemon was born from a shared passion for authentic
          Mediterranean cuisine, warm hospitality, and bringing people together
          through unforgettable dining experiences.
        </p>

        <Link className="button" to="reservation/details">
          Reserve a Table
        </Link>
      </div>
    </div>
  );
};

export default Hero;
