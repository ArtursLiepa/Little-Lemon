import "./AboutComponent.css";
import photo1 from "../../../../Assets/restaurant chef B.jpg";
import photo2 from "../../../../Assets/Mario and Adrian b.jpg";

const About = () => {
  return (
    <div id="about" className="aboutSection">
      <section className="titleSection">
        <article>About</article>
        <h3>Chicago</h3>
        <p>
          Visitors to the Little Lemon website will be viewing the content on
          different devices, from small devices such as mobile phones to large
          devices like desktops and tablets. Therefore, the owners of Little
          Lemon have requested that the website is responsive.
        </p>
      </section>
      <section className="photoSection">
        <div className="photoCard ">
          <img className="moveDown" src={photo1} alt="restaurant chief"></img>
        </div>
        <div className="photoCard">
          <img className="moveLeft" src={photo2} alt="mario and adrian"></img>
        </div>
      </section>
    </div>
  );
};

export default About;
