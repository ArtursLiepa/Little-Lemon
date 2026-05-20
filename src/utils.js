import useSubmit from "./hooks/useSubmit";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

const isNameValid = (name) => {
  const namerule = !/\d/.test(name) && name.length > 2;
  return namerule;
};

const { fetchAPI } = useSubmit();
const initializeTimes = (fetchAPI) => {
  return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES": {
      const { reservations, fetchAPI, date } = action;

      const bookedTimes = reservations
        .filter((r) => r.date === date)
        .map((r) => r.time);

      const baseTimes = fetchAPI(new Date(date));

      return baseTimes.filter((time) => !bookedTimes.includes(time));
    }

    default:
      return state;
  }
};

export { isNameValid, validateEmail, initializeTimes, updateTimes };
