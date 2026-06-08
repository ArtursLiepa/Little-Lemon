import "./BookingList.css";
import BookingSlot from "../BookingSlot/BookingSlot";
import { useTheme } from "../../../Context/ThemeContext";

const BookingList = ({ availableTimes }) => {
  const { theme } = useTheme();
  return (
    <div className={`bookingSection ${theme === "light" ? "light" : "dark"}`}>
      <article className="bookingsectiontitle">Available booking times</article>
      <ul className="bookingsectionlist">
        {availableTimes.map((t) => (
          <BookingSlot key={t} time={t} />
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
