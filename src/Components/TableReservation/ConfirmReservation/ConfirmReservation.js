import "./ConfirmReservation.css";
import { useLocation, useNavigate } from "react-router-dom";
import check from "../../../Assets/icons/check.png";
import { useEffect } from "react";

const ConfirmReservation = ({ reservation, reset }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // const booking = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
      reset(0);
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="confirmationsection">
      <div className="confirmationHero">
        <article className="confirmationTtitle">
          restaurant little lemon
        </article>
        <div className="confirmationinfo">
          <p className="confirmationSuccess">We can’t wait to welcome you!</p>
          <p className="welcominfo">
            Get ready to relax, enjoy the atmosphere, and treat yourself to a
            truly unforgettable meal.
          </p>
        </div>
      </div>

      <div className="confirmationarea">
        <div className="log">
          <div className="checkimage">
            <img src={check} alt="confirmation"></img>
          </div>
          <div className="thanksinfo">
            Thank you for your reservation request!
          </div>
          <div className="clientsdata">
            <span className="clientname">{reservation.firstname}</span>
            <span className="clientname">{reservation.lastname}</span>
          </div>
          <div className="reservationdate">
            Your reservation on <span>{reservation.date}</span> has been
            successfully submitted.
          </div>
          <div className="confirmationmessage">
            A confirmation message with your reservation details will be sent
            you shortly to <span>{reservation.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmReservation;
