import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";
import TableDetailsForm from "./Components/TableReservation/TableDetailsForm/TableDetailsForm";
import { initializeTimes, updateTimes } from "./utils";

describe("Table detail reservation form", () => {
  test("Renders the table details form heading", () => {
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

describe("reservation state testing", () => {
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
