import "./FooterComponent..css";
import photo from "../../../Assets/Mario and Adrian b.jpg";
import Navigation from "../../HeaderComponent/NavComponent/NavigationComponent";

const FooterComponent = () => {
  return (
    <footer>
      <div className="footerImage">
        <img src={photo} alt="Mario and Andrian A"></img>
      </div>

      <ul className="links">
        <h4>Doormat Navigation</h4>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservation">Reservation</a>
        </li>
        <li>
          <a href="/order">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        {/* <Navigation /> */}
      </ul>
      <ul className="links">
        <h4>Contact</h4>
        <li>
          <a href="/adress">Adress</a>
        </li>
        <li>
          <a href="/phone">Phone Number</a>
        </li>
        <li>
          <a href="/email">email</a>
        </li>
      </ul>
      <ul className="links">
        <h4>Social Media Links</h4>
        <li>
          <a href="/adress">Adress</a>
        </li>
        <li>
          <a href="/phone">Phone Number</a>
        </li>
        <li>
          <a href="/email">email</a>
        </li>
      </ul>
    </footer>
  );
};

export default FooterComponent;
