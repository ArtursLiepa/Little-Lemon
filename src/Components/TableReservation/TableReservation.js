import "./TableReservation.css";
import TableDetailsForm from "./TableDetailsForm/TableDetailsForm";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";

const TableReservation = ({ availableTimes, dispatch, setReservation }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const handleReservationDetailsSubmit = (data) => {
    setReservation(data);
    navigate("/reservation/client");
  };
  return (
    <div className={`tableReservation`}>
      <section className="reservationHero">
        <article>restaurant little lemon</article>
        <p>Reserve your table anytime, anywhere in just a few clicks</p>
      </section>

      <section
        className={`reservationDetails ${theme === "light" ? "light" : "dark"}`}
      >
        <TableDetailsForm
          onSubmit={handleReservationDetailsSubmit}
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
      </section>
    </div>
  );
};

export default TableReservation;
