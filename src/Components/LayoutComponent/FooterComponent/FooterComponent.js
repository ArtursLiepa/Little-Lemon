import "./FooterComponent..css";
import photo from "../../../Assets/Mario and Adrian b.jpg";
// import Navigation from "../../HeaderComponent/NavComponent/NavigationComponent";
import { FaFacebook, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterComponent = ({ navItems }) => {
  const footerList = navItems.map((items) => {
    return (
      <li className="footernavItem" key={items.id}>
        {items.pathType === "inner" ? (
          <a href={`/#${items.path}`}>{items.name}</a>
        ) : (
          <Link to={items.path}>{items.name}</Link>
        )}
      </li>
    );
  });
  return (
    <footer className="footersection ">
      {/* Footer image  */}
      <section className="imagesection">
        <div className="footerImage">
          <img src={photo} alt="Mario and Andrian A"></img>
        </div>
      </section>
      {/* Social media links */}
      <section className="socialmedialinks">
        <Link to="underconstruction">
          <FaFacebook />
        </Link>
        <Link to="underconstruction">
          <FaTwitter />
        </Link>
        <Link to="underconstruction">
          <FaPhone />
        </Link>
        <Link to="underconstruction">
          <FaEnvelope />
        </Link>
      </section>
      {/* Contacts */}
      <ul className="contactlinks links">
        <article>Contacts</article>
        <li>Adress: Latvia, Riga, Brīvības iela 45, LV-1022</li>
        <li>Phone: +371 999 999 999</li>
        <li>Email: email@email.com</li>
      </ul>
      {/* Doormat Navigation */}
      <section className="navigationlinks links">
        <article>Doormat Navigation</article>
        <ul>{footerList}</ul>
      </section>
    </footer>
  );
};

export default FooterComponent;
