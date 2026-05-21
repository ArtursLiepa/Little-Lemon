import "./UnderConstructionComponent.css";
import underconstruction from "../../Assets/Photos/underconstruction.png";
import { Link } from "react-router-dom";

const UnderConstructionComponent = () => {
  return (
    <div className="confirmationsection">
      <div className="confirmationHero">
        <article className="confirmationTtitle">
          restaurant little lemon
        </article>
        <div className="confirmationinfo">
          <p className="confirmationSuccess">Attention!</p>
        </div>
      </div>

      <div className="confirmationarea">
        <div className="log">
          <div className="underconstructionmage">
            <img src={underconstruction} alt="confirmation"></img>
          </div>
          <div className="thanksinfo">Thank you visting or website!</div>
          <div className="clientsdata">
            Right now this page is underconstruction!
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

export default UnderConstructionComponent;
