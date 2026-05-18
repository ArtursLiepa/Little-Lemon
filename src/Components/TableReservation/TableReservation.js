import "./TableReservation.css";
import { Link } from "react-router-dom";

const TableReservation = () => {
  return (
    <div className="tableReservation">
      Table reservation details
      <Link to="/">Back</Link>
    </div>
  );
};

export default TableReservation;
