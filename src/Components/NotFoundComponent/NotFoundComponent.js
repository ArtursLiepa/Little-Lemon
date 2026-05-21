import "./NotFoundComponent.css";
import attention from "../../Assets/Photos/attention.png";
import { Link } from "react-router-dom";

const NotFoundComponent = () => {
  return (
    <div className="confirmationsection">
      <div className="confirmationHero">
        <article className="confirmationTtitle">
          restaurant little lemon
        </article>
        <div className="confirmationinfo">
          <p className="confirmationSuccess">Opsssss.....!</p>
        </div>
      </div>

      <div className="confirmationarea">
        <div className="log">
          <div className="underconstructionmage">
            <img src={attention} alt="confirmation"></img>
          </div>
          <div className="thanksinfo">Something went wrong!</div>
          <div className="clientsdata">
            Click on the button below to return to Homepage
          </div>
          <div className="reservationdate">
            You are welcome to take reservation or take an online food delivery
          </div>
          <div className="confirmationmessage confirmationmessagebutton">
            <Link to="/">Back to Homepage</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundComponent;
