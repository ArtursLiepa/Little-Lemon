import "./ReservationForm.css";
import { useState, useEffect } from "react";
import { isNameValid, isEmailValid, isPhoneValid } from "../../../utils";
import { useNavigate } from "react-router-dom";

const ReservationForm = ({ reservation, onSubmit, confirm }) => {
  const navigate = useNavigate();

  const NameErrorMessage = () => {
    return (
      <p className="errorclass">
        {firstname.isTouched && !firstname.value
          ? "Required"
          : "Name should have at least 3 characters and without numbers"}
      </p>
    );
  };

  const EmailErrorMessage = () => {
    return (
      <p className="errorclass">
        {email.isTouched && !email.value
          ? "Required"
          : "Check your typed email adress!"}
      </p>
    );
  };

  const PhoneErrorMessage = () => {
    return (
      <p className="errorclass">
        {phonenumber.isTouched && !phonenumber.value
          ? "Required"
          : "Check your typed phone number!"}
      </p>
    );
  };

  const isFormTouched = () => {
    return firstname.isTouched || lastname.isTouched || email.isTouched;
  };

  const isFormValid = () => {
    return (
      isNameValid(firstname.value) &&
      isNameValid(lastname.value) &&
      isEmailValid(email.value) &&
      isPhoneValid(phonenumber.value)
    );
  };

  const clearForm = () => {
    setFirstname({ value: "", isTouched: false });
    setLastname({ value: "", isTouched: false });
    setPhonenumber({ value: "", isTouched: false });
    setEmail({ value: "", isTouched: false });
  };

  const [firstname, setFirstname] = useState({
    value: "",
    isTouched: false,
  });
  const [lastname, setLastname] = useState({
    value: "",
    isTouched: false,
  });
  const [phonenumber, setPhonenumber] = useState({
    value: "",
    isTouched: false,
  });
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });

  useEffect(() => {
    if (confirm > 0) {
      navigate("/reservation/confirm");
      clearForm();
    }
  }, [confirm]);

  const formhandleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      firstname: firstname.value,
      lastname: lastname.value,
      phonenumber: phonenumber.value,
      email: email.value,
    });
  };

  return (
    <div className="clientformcomponent">
      <section className="clientFormHero">
        <article>restaurant little lemon</article>
        <p>Complete the form below and your reservation will be confirmed</p>
      </section>

      <div className="reservationoverview">
        <article className="reservationoverviewtitle">
          Your table reservation overview
        </article>
        <div className="reservationdetaillist">
          <ul className="overviewlist">
            <li className="overviewitem">
              <label>Occasion:</label>
              <p>{reservation.occasion}</p>
            </li>
            <li className="overviewitem">
              <label>Date:</label>
              <p>{reservation.date}</p>
            </li>
            <li className="overviewitem">
              <label>Time:</label>
              <p>{reservation.time}</p>
            </li>
            <li className="overviewitem">
              <label>Persons:</label>
              <p>{reservation.persons}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="clientformsection">
        <form
          data-testid="reservationdata-form"
          className="clientformview"
          onSubmit={formhandleSubmit}
        >
          <label className="formtitle">Reservation Form</label>
          {/* First name input */}
          <div className="dataview">
            <label htmlFor="firstname">First name *</label>
            <input
              className={
                firstname.isTouched && firstname.value.length < 3
                  ? "inputTouchedButEmpty"
                  : "inputGood"
              }
              id="firstname"
              name="firstname"
              type="text"
              value={firstname.value}
              required
              onChange={(e) =>
                setFirstname({ ...firstname, value: e.target.value })
              }
              onBlur={(e) => setFirstname({ ...firstname, isTouched: true })}
              placeholder="Enter your first name"
            />
            {firstname.isTouched && !isNameValid(firstname.value) ? (
              <NameErrorMessage />
            ) : null}
          </div>
          {/* Last name input */}
          <div className="dataview">
            <label htmlFor="lastname">Last Name *</label>
            <input
              className={
                lastname.isTouched && lastname.value.length < 3
                  ? "inputTouchedButEmpty"
                  : "inputGood"
              }
              id="lastname"
              name="lastname"
              type="text"
              value={lastname.value}
              required
              onChange={(e) =>
                setLastname({ ...lastname, value: e.target.value })
              }
              onBlur={(e) => setLastname({ ...lastname, isTouched: true })}
              placeholder="Enter your last name"
            />
            {lastname.isTouched && !isNameValid(lastname.value) ? (
              <NameErrorMessage />
            ) : null}
          </div>
          {/* Phone number input */}
          <div className="dataview">
            <label htmlFor="phonenumber">Phone number *</label>
            <input
              className={
                phonenumber.isTouched && phonenumber.value.length < 3
                  ? "inputTouchedButEmpty"
                  : "inputGood"
              }
              id="phonenumber"
              name="phonenumber"
              type="number"
              value={phonenumber.value}
              required
              onChange={(e) =>
                setPhonenumber({
                  ...phonenumber,
                  value: e.target.value,
                })
              }
              onBlur={(e) =>
                setPhonenumber({ ...phonenumber, isTouched: true })
              }
              placeholder="Enter phone number"
            />
            {phonenumber.isTouched && !isPhoneValid(phonenumber.value) ? (
              <PhoneErrorMessage />
            ) : null}
          </div>

          {/* e-mail input */}
          <div className="dataview">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email.value}
              required
              onChange={(e) => setEmail({ ...email, value: e.target.value })}
              onBlur={(e) => setEmail({ ...email, isTouched: true })}
              placeholder="Enter your email adress"
            />
            {email.isTouched && !isEmailValid(email.value) ? (
              <EmailErrorMessage />
            ) : null}
          </div>

          <div>
            <button
              className={
                isFormValid() ? "buttongo" : isFormTouched() ? "red" : ""
              }
              disabled={!isFormValid()}
              type="submit"
            >
              Confirm Reservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
