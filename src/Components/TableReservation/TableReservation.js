import "./TableReservation.css";
import TableDetailsForm from "./TableDetailsForm/TableDetailsForm";
import { useState, useReducer } from "react";
// Test 1
// import useSubmit from "../../hooks/useSubmit";
import BookingList from "./BookingList/BookingList";
import { useNavigate } from "react-router-dom";

const TableReservation = ({ availableTimes, dispatch, setReservation }) => {
  const navigate = useNavigate();
  // const { fetchAPI } = useSubmit();

  // Test 1
  // const initializeTimes = () => {
  //   return fetchAPI(new Date());
  // };

  // Test 1
  // const updateTimes = (state, action) => {
  //   switch (action.type) {
  //     case "UPDATE_TIMES":
  //       return fetchAPI(new Date(action.date));

  //     default:
  //       return state;
  //   }
  // };

  // Test 1
  // const [availableTimes, dispatch] = useReducer(
  //   updateTimes,
  //   undefined,
  //   initializeTimes,
  // );

  // Tst 1
  // const [reservation, setReservation] = useState({
  //   occasion: "",
  //   date: "",
  //   time: "",
  //   persons: "",
  // });

  // const handleReservationDetailsSubmit = (data) => {
  //   setReservation({
  //     ...reservation,
  //     occasion: data.occasion,
  //     date: data.date,
  //     time: data.time,
  //     persons: data.persons,
  //   });

  // Test 1
  // navigate("/reservation/client", {
  //   state: data,
  // });

  const handleReservationDetailsSubmit = (data) => {
    setReservation(data);
    navigate("/reservation/client");
  };
  return (
    <div className="tableReservation">
      <section className="reservationHero">
        <article>restaurant little lemon</article>
        <p>Reserve your table anytime, anywhere in just a few clicks</p>
      </section>

      <section className="reservationDetails">
        <BookingList availableTimes={availableTimes} />
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
