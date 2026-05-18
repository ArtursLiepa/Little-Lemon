import "./HeroComponent.css";
import { Link } from "react-router-dom";
import restauratnFood from "../../../../Assets/restauranfood.jpg";

const Hero = () => {
  return (
    <div id="home" className="heroSection">
      <div className="heroDescription">
        <section>
          <article>Little Lemon</article>
          <h2>Chicago</h2>
          <p>
            Visitors to the Little Lemon website will be viewing the content on
            different devices, from small devices such as mobile phones to large
            devices like desktops and tablets. Therefore, the owners of Little
            Lemon have requested that the website is responsive.
          </p>
        </section>

        <Link className="button" to="tableReservation">
          Reserve a Table
        </Link>
      </div>
      <div className="heroImage">
        <img src={restauratnFood} alt="restaurant food"></img>
      </div>
    </div>
  );
};

export default Hero;
