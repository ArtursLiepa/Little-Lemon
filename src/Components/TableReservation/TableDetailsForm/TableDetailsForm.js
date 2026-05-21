import { useState } from "react";
import "./TableDetailsForm.css";
import { isPersonsValid, isTimeValid } from "../../../utils";

const TableDetailsForm = ({ onSubmit, availableTimes, dispatch }) => {
  const today = new Date();
  today.setDate(today.getDate());
  const formattedTomorrow = today.toISOString().split("T")[0];

  const PersonsErrorMessage = () => {
    return (
      <p className="errorclass">
        {persons.isTouched && !isPersonsValid(persons.value)
          ? "Persons can't be less tan 1"
          : "Required"}
      </p>
    );
  };

  const TimeErrorMeassage = () => {
    return (
      <p className="errorclass">
        {time.isTouched && !time.value
          ? "Please choose one time from all available times"
          : "Required"}
      </p>
    );
  };

  const Maxpersonsreached = () => {
    return (
      <p className="maxpersons">
        You reached the maximum number of persons to book online, Please call us
        +370 26838555
      </p>
    );
  };

  const isFormTouched = () => {
    return persons.isTouched;
  };

  const isFormValid = () => {
    return isPersonsValid(persons.value) && isTimeValid(time.value);
  };

  const clearForm = () => {
    setOccasion("");
    setDate("");
    setTime({ value: "", isTouched: false });
    setPersons({ value: 1, isTouched: false });
  };

  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState(formattedTomorrow);
  const [time, setTime] = useState({ value: "", isTouched: false });
  const [persons, setPersons] = useState({
    value: 1,
    isTouched: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      occasion: occasion,
      date: date,
      time: time.value,
      persons: persons.value,
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
          type="text"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="other">Other</option>
        </select>
      </div>
      {/* Date part */}
      <div className="dataview">
        <label htmlFor="date">Date *</label>
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
          <label htmlFor="time">Time *</label>
          <select
            className={
              time.isTouched && !time.value
                ? "selectTouchedButEmpty"
                : "selectView"
            }
            // className="selectView"
            id="time"
            name="time"
            value={time.value}
            required
            type="text"
            onChange={(e) => setTime({ ...time, value: e.target.value })}
            onBlur={(e) => {
              setTime({ ...time, isTouched: true });
            }}
          >
            <option value="">Select time</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </>
        {time.isTouched && !time.value ? <TimeErrorMeassage /> : null}
      </div>

      {/* Persons part */}
      <div className="dataview">
        <label htmlFor="persons">Persons *</label>
        <div className="setpersons">
          <button
            disabled={persons.value === 0}
            type="button"
            onClick={() =>
              setPersons({ ...persons, value: Number(persons.value - 1) })
            }
          >
            -
          </button>
          <input
            className="inputpersons"
            id="persons"
            name="persons"
            type="number"
            min="1"
            max="20"
            value={persons.value}
            required
            onChange={(e) =>
              setPersons({ ...persons, value: Number(e.target.value) })
            }
          />
          <button
            disabled={persons.value > 20}
            type="button"
            className="setButton"
            onClick={() =>
              setPersons({ ...persons, value: Number(persons.value + 1) })
            }
            onBlur={(e) => setPersons({ ...persons, isTouched: true })}
          >
            +
          </button>
        </div>
        {persons.isTouched && persons.value === 0 ? (
          <PersonsErrorMessage />
        ) : null}
        {persons.value > 20 ? <Maxpersonsreached /> : null}
      </div>

      <div>
        <button
          className={isFormValid() ? "buttongo" : isFormTouched() ? "red" : ""}
          disabled={!isFormValid()}
          type="submit"
          name="confirm"
        >
          Confirm details & Fill Reservation form
        </button>
      </div>
    </form>
  );
};

export default TableDetailsForm;
