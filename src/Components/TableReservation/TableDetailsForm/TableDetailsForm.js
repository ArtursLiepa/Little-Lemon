import { useState } from "react";
import "./TableDetailsForm.css";

const TableDetailsForm = ({ onSubmit, availableTimes, dispatch }) => {
  const today = new Date();
  today.setDate(today.getDate());
  const formattedTomorrow = today.toISOString().split("T")[0];

  const clearForm = () => {
    setOccasion("Birthday");
    setDate("");
    setTime("");
    setPersons("");
  };

  const [occasion, setOccasion] = useState("Birthday");
  const [date, setDate] = useState(formattedTomorrow);
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      occasion: occasion,
      date: date,
      time: time,
      persons: persons,
    });
    clearForm();
  };

  return (
    <form
      data-testid="tabledetail-form"
      className="formview"
      onSubmit={handleSubmit}
    >
      <label className="formtitle">Reservation Details</label>
      {/* Occasion part */}
      <div className="dataview">
        <label htmlFor="occasion">Occasion</label>
        <select
          className="selectView"
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="other">Other</option>
        </select>
      </div>
      {/* Date part */}
      <div className="dataview">
        <label htmlFor="date">Date</label>
        <input
          className="inputGood"
          id="date"
          name="date"
          type="date"
          value={date}
          required
          onChange={(e) => {
            const selectedDate = e.target.value;
            setDate(selectedDate);
            dispatch({
              type: "UPDATE_TIMES",
              date: selectedDate,
            });
          }}
        />
      </div>
      {/* Time part */}
      <div className="dataview">
        <>
          <label htmlFor="time">Time</label>
          <select
            className="selectView"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Select time</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </>
      </div>

      {/* Persons part */}
      <div className="dataview">
        <label htmlFor="persons">Persons</label>
        <div className="setpersons">
          <button type="button" onClick={() => setPersons(Number(persons) - 1)}>
            -
          </button>
          <input
            className="inputpersons"
            id="persons"
            name="persons"
            type="number"
            value={persons}
            required
            onChange={(e) => setPersons(Number(e.target.value))}
          />
          <button
            type="button"
            className="setButton"
            onClick={() => setPersons(Number(persons) + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div>
        <button className="button" type="submit" name="confirm">
          Confirm details & Fill Reservation form
        </button>
      </div>
    </form>
  );
};

export default TableDetailsForm;
