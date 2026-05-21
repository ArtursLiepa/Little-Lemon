import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";
import TableDetailsForm from "./Components/TableReservation/TableDetailsForm/TableDetailsForm";
import ReservationForm from "./Components/TableReservation/ReservationForm/ReservationForm";
import { initializeTimes, updateTimes } from "./utils";
import { MemoryRouter } from "react-router-dom";
import {
  isEmailValid,
  isNameValid,
  isPersonsValid,
  isPhoneValid,
  isTimeValid,
} from "../src/utils";

describe("TableDetailsForm component", () => {
  test("Renders the Table details form heading", () => {
    render(<TableDetailsForm availableTimes={[]} dispatch={() => {}} />);

    const headingElement = screen.getByText("Reservation Details");

    expect(headingElement).toBeInTheDocument();
  });
  test("Does the TableDetailsForm component can be submitted by the user", () => {
    const occasion = "Birthday";
    const date = "2026-05-19";
    const time = "18:00";
    const persons = 4;
    const handleSubmit = jest.fn();

    render(
      <TableDetailsForm
        onSubmit={handleSubmit}
        availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00"]}
        dispatch={() => {}}
      />,
    );

    const occasionInput = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionInput, { target: { value: occasion } });
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: date } });
    const timeInput = screen.getByLabelText(/time/i);
    fireEvent.change(timeInput, { target: { value: time } });
    const personsInput = screen.getByLabelText(/persons/i);
    fireEvent.change(personsInput, { target: { value: persons } });

    const form = screen.getByTestId("tabledetail-form");
    const submitButton = screen.getByText(
      /confirm details & fill reservation form/i,
    );
    // const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      occasion,
      date,
      time,
      persons,
    });
  });
});

describe("TableDetailsForm component reservation state testing", () => {
  test("Test for the initializeTimes function to validate that it returns the correct expected value", () => {
    const mockFetchAPI = jest.fn(() => ["17:00", "18:00"]);

    const result = initializeTimes(mockFetchAPI);

    expect(result).toEqual(["17:00", "18:00"]);
    expect(mockFetchAPI).toHaveBeenCalledTimes(1);
  });
  test("Test for the updateTime reducer to validate that it, if returns the times based on selected date in action", () => {
    const mockAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);

    const reservations = [{ date: "2026-05-21", time: "18:00" }];

    const initialState = [];

    const action = {
      type: "UPDATE_TIMES",
      date: "2026-05-21",
      reservations,
      fetchAPI: mockAPI,
    };

    const result = updateTimes(initialState, action);

    expect(result).toEqual(["17:00", "19:00"]);
  });
});

describe("Does the TableDetails component form HTML elements input and select fields are applied with correct attributes", () => {
  test("Does the occasion select element are applied with correct attributes", () => {
    render(<TableDetailsForm availableTimes={[]} dispatch={() => {}} />);
    const emailInput = screen.getByLabelText(/occasion/i);
    expect(emailInput).toHaveAttribute("type", "text");
    // expect(emailInput).toHaveAttribute("required");
    expect(emailInput).toHaveAttribute("name", "occasion");
    expect(emailInput).toHaveAttribute("id", "occasion");
  });
  test("Does the date select element are applied with correct attributes", () => {
    render(<TableDetailsForm availableTimes={[]} dispatch={() => {}} />);
    const dateSelect = screen.getByLabelText(/date/i);
    expect(dateSelect).toHaveAttribute("type", "date");
    expect(dateSelect).toHaveAttribute("required");
    expect(dateSelect).toHaveAttribute("name", "date");
    expect(dateSelect).toHaveAttribute("id", "date");
  });
  test("Does the time select element are applied with correct attributes", () => {
    render(<TableDetailsForm availableTimes={[]} dispatch={() => {}} />);
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toHaveAttribute("type", "text");
    expect(timeSelect).toHaveAttribute("required");
    expect(timeSelect).toHaveAttribute("name", "time");
    expect(timeSelect).toHaveAttribute("id", "time");
  });
  test("Does the persons input element are applied with correct attributes", () => {
    render(<TableDetailsForm availableTimes={[]} dispatch={() => {}} />);
    const personsInput = screen.getByLabelText(/persons/i);
    expect(personsInput).toHaveAttribute("type", "number");
    expect(personsInput).toHaveAttribute("required");
    expect(personsInput).toHaveAttribute("name", "persons");
    expect(personsInput).toHaveAttribute("id", "persons");
  });
});

describe("ReservationForm component", () => {
  const mockReservation = {
    occasion: "Birthday",
    date: "2026-05-21",
    time: "18:00",
    persons: 2,
  };
  test("Renders the Reservation form heading", () => {
    render(
      <MemoryRouter>
        <ReservationForm
          reservation={mockReservation}
          onSubmit={() => {}}
          confirm={0}
        />
      </MemoryRouter>,
    );

    const headingElement = screen.getByText("Reservation Form");

    expect(headingElement).toBeInTheDocument();
  });
  test("Does the ReservationForm component can be submitted by the user", () => {
    const firstname = "Arturs";
    const lastname = "Liepa";
    const phonenumber = "99999999999";
    const email = "arturs.liepa@gmail.com";
    const handleSubmit = jest.fn();

    render(
      <MemoryRouter>
        <ReservationForm
          reservation={mockReservation}
          onSubmit={handleSubmit}
          confirm={0}
        />
      </MemoryRouter>,
    );

    const firstnameInput = screen.getByLabelText(/first name/i);
    fireEvent.change(firstnameInput, { target: { value: firstname } });
    const lastnameInput = screen.getByLabelText(/last name/i);
    fireEvent.change(lastnameInput, { target: { value: lastname } });
    const ponenumberInput = screen.getByLabelText(/phone number/i);
    fireEvent.change(ponenumberInput, { target: { value: phonenumber } });
    const emailInput = screen.getByLabelText(/email address/i);
    fireEvent.change(emailInput, { target: { value: email } });

    const form = screen.getByTestId("reservationdata-form");
    const submitButton = screen.getByText(/Confirm Reservation/i);
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      firstname,
      lastname,
      phonenumber,
      email,
    });
  });
});

describe("Does the ReservationForm component form HTML elements input fields are applied with correct attributes", () => {
  const mockReservation = {
    occasion: "Birthday",
    date: "2026-05-21",
    time: "18:00",
    persons: 2,
  };
  test("Does the Firstname input element are applied with correct attributes", () => {
    render(
      <MemoryRouter>
        <ReservationForm
          reservation={mockReservation}
          onSubmit={() => {}}
          confirm={0}
        />
      </MemoryRouter>,
    );

    const firstnameInput = screen.getByLabelText(/first name/i);
    expect(firstnameInput).toHaveAttribute("type", "text");
    expect(firstnameInput).toHaveAttribute("required");
    expect(firstnameInput).toHaveAttribute("name", "firstname");
    expect(firstnameInput).toHaveAttribute("id", "firstname");
    expect(firstnameInput).toHaveAttribute(
      "placeholder",
      "Enter your first name",
    );
  });
  test("Does the Lastname input element are applied with correct attributes", () => {
    render(
      <MemoryRouter>
        <ReservationForm
          reservation={mockReservation}
          onSubmit={() => {}}
          confirm={0}
        />
      </MemoryRouter>,
    );

    const lastnameInput = screen.getByLabelText(/last name/i);
    expect(lastnameInput).toHaveAttribute("type", "text");
    expect(lastnameInput).toHaveAttribute("required");
    expect(lastnameInput).toHaveAttribute("name", "lastname");
    expect(lastnameInput).toHaveAttribute("id", "lastname");
    expect(lastnameInput).toHaveAttribute(
      "placeholder",
      "Enter your last name",
    );
  });
  test("Does the Ponenumber input element are applied with correct attributes", () => {
    render(
      <MemoryRouter>
        <ReservationForm
          reservation={mockReservation}
          onSubmit={() => {}}
          confirm={0}
        />
      </MemoryRouter>,
    );

    const phonenumberInput = screen.getByLabelText(/phone number/i);
    expect(phonenumberInput).toHaveAttribute("type", "number");
    expect(phonenumberInput).toHaveAttribute("required");
    expect(phonenumberInput).toHaveAttribute("name", "phonenumber");
    expect(phonenumberInput).toHaveAttribute("id", "phonenumber");
    expect(phonenumberInput).toHaveAttribute(
      "placeholder",
      "Enter phone number",
    );
  });
  test("Does the Email input element are applied with correct attributes", () => {
    render(
      <MemoryRouter>
        <ReservationForm
          reservation={mockReservation}
          onSubmit={() => {}}
          confirm={0}
        />
      </MemoryRouter>,
    );

    const emailInput = screen.getByLabelText(/email Address/i);
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("required");
    expect(emailInput).toHaveAttribute("name", "email");
    expect(emailInput).toHaveAttribute("id", "email");
    expect(emailInput).toHaveAttribute(
      "placeholder",
      "Enter your email adress",
    );
  });
});

describe("Firstname and Lastname validation test", () => {
  const correctname = "Arturs";
  const inCorrectname = "arturs99";
  test("Validate Firstname and Lastname for correct name input", () => {
    expect(isNameValid(correctname)).toBe(true);
  });
  test("Validate Firstname and Lastname for incorrect name input", () => {
    expect(isPhoneValid(inCorrectname)).toBe(false);
  });
});

describe("Time validation test", () => {
  const correctTime = "14:00";
  const inCorrecTime = "0";
  test("Validate Time for correct name input", () => {
    expect(isTimeValid(correctTime)).toBe(true);
  });
  test("Validate Time for incorrect name input", () => {
    expect(isTimeValid(inCorrecTime)).toBe(false);
  });
});
describe("Persons validation test", () => {
  const correctPersons = 4;
  const inCorrectPersons = 0;
  test("Validate Persons for correct amount input", () => {
    expect(isPersonsValid(correctPersons)).toBe(true);
  });
  test("Validate Persons for incorrect amount input", () => {
    expect(isPersonsValid(inCorrectPersons)).toBe(false);
  });
});

describe("Phone number validation test", () => {
  const validphonenumber = "+370 999999999";
  const inValidphonenumber = "99999";
  test("Validate number for correct phone number input", () => {
    expect(isPhoneValid(validphonenumber)).toBe(true);
  });
  test("Validate number for incorrect phone number input", () => {
    expect(isPhoneValid(inValidphonenumber)).toBe(false);
  });
  test("Validate number for letters in input", () => {
    expect(isPhoneValid("abc123456789")).toBe(false);
  });
});
describe("E-mail validation test", () => {
  const validemail = "arturs.liepa@gmail.com";
  const inValidemail1 = "arturs.liepagmail.com";
  const inValidemail2 = "arturs.liepa@";
  const inValidemail3 = "ARTURS.LIEPA@GMAIL.COM";
  test("Validate E-mail for correct e-mail input", () => {
    expect(isEmailValid(validemail)).toBeTruthy();
  });
  test("Validate email for testing if it contain @", () => {
    expect(isEmailValid(inValidemail1)).toBeNull();
  });
  test("Validate email for testing if it contain domain", () => {
    expect(isEmailValid(inValidemail2)).toBeNull();
  });
  test("Validate email for testing if it case insensitive", () => {
    expect(isEmailValid(inValidemail3)).toBeTruthy();
  });
});
