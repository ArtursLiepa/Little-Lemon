import "./BookingList.css";
import BookingSlot from "../BookingSlot/BookingSlot";

const BookingList = ({ availableTimes }) => {
  return (
    <div className="bookingSection">
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
