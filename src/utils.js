const isEmailValid = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

const isNameValid = (name) => {
  const isValid = !/\d/.test(name) && name.length > 2;
  return isValid;
};

const isPhoneValid = (phone) => {
  const phoneRule = /^[+]?[\d\s\-()]{8,20}$/.test(phone);
  return phoneRule;
};

const isPersonsValid = (number) => {
  const isValid = number >= 1;
  return isValid;
};
const isTimeValid = (time) => {
  return /^([0-1]\d|2[0-3]):([0-5]\d)$/.test(time);
};

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

export {
  isNameValid,
  isEmailValid,
  initializeTimes,
  updateTimes,
  isPersonsValid,
  isTimeValid,
  isPhoneValid,
};
