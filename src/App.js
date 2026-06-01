import { BrowserRouter, Routes, Route } from "react-router-dom";
import useSubmit from "./hooks/useSubmit";
import { useState, useReducer } from "react";
// Custom Components
import "./App.css";
import LayoutComponent from "./Components/LayoutComponent/LayoutComponent";
import StartUp from "./Components/StartUpComponent/StartUpComponent";
import TableReservation from "./Components/TableReservation/TableReservation";
import ReservationForm from "./Components/TableReservation/ReservationForm/ReservationForm";
import ConfirmReservation from "./Components/TableReservation/ConfirmReservation/ConfirmReservation";
import UnderConstructionComponent from "./Components/UnderConstructionComponent/UnderConstructionComponent";
import NotFoundComponent from "./Components/NotFoundComponent/NotFoundComponent";
import AboutComponent from "./Components/AboutComponent/AboutComponent";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  const { fetchAPI, submitAPI } = useSubmit();
  const initializeTimes = () => {
    return fetchAPI(new Date());
  };
  const [approve, setApprove] = useState(0);
  const [reservations, setReservations] = useState([]);
  const [reservation, setReservation] = useState(null);

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES": {
        const bookedTimes = reservations
          .filter((r) => r.date === action.date)
          .map((r) => r.time);

        const baseTimes = fetchAPI(new Date(action.date));

        return baseTimes.filter((time) => !bookedTimes.includes(time));
      }

      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes,
  );

  const reservationsubmit = (data) => {
    const finalBooking = {
      ...reservation,
      firstname: data.firstname,
      lastname: data.lastname,
      phonenumber: data.phonenumber,
      email: data.email,
    };

    setReservation(finalBooking);

    const success = submitAPI(finalBooking);
    if (success) {
      setApprove((prev) => prev + 1);
      setReservations((prev) => [
        ...prev,
        finalBooking, // ADD to existing data
      ]);
    }
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutComponent />}>
            <Route index element={<StartUp />} />
            <Route
              path="reservation/details"
              element={
                <TableReservation
                  availableTimes={availableTimes}
                  dispatch={dispatch}
                  setReservation={setReservation}
                />
              }
            ></Route>
            <Route
              path="reservation/client"
              element={
                <ReservationForm
                  reservation={reservation}
                  onSubmit={reservationsubmit}
                  confirm={approve}
                />
              }
            />
            <Route
              path="reservation/confirm"
              element={
                <ConfirmReservation
                  reservation={reservation}
                  reset={setApprove}
                />
              }
            />
            <Route path="about" element={<AboutComponent />}></Route>
            <Route
              path="underconstruction"
              element={<UnderConstructionComponent />}
            />
            <Route path="*" element={<NotFoundComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
