import "./ReviewComponent.css";
import { useTheme } from "../../../../../Context/ThemeContext";

const Review = (props) => {
  const { theme } = useTheme();
  const List = props.data.map((items) => {
    return (
      <div
        className={`reviewCard ${theme === "light" ? "lightcards" : "darkcards"}`}
        key={items.id}
      >
        <section className="reviewRating"> Rate Score: {items.rating}</section>
        <section className="reviewAuthor">
          <div className="authorPhoto">
            <img src={items.photo} alt="reviw author"></img>
          </div>
          <div className="authorName">{items.name}</div>
        </section>
        <section className="reviewText">{items.review}</section>
      </div>
    );
  });
  return <div className="reviewList">{List}</div>;
};

export default Review;
