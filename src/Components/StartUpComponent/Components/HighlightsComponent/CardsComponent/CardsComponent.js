import "./CardsComponent.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../../Context/ThemeContext";
import { FaTruckMoving } from "react-icons/fa";

const Cards = (props) => {
  const { theme } = useTheme();
  const List = props.data.map((items) => {
    return (
      <div
        className={`cardView ${theme === "light" ? "lightcards" : "darkcards"}`}
        key={items.id}
      >
        <section className="cardImage">
          <img src={items.image} alt="meal"></img>
        </section>
        <section className="cardInfo">
          <div className="cardsHead">
            <div className="cardsTitle">{items.name}</div>
            <div className="cardsPrice">${items.price}</div>
          </div>

          <p>{items.info}</p>
          <Link className="deliverySection" to="underconstruction">
            Order a delivery
            <FaTruckMoving />
          </Link>
        </section>
      </div>
    );
  });
  return <div className={`cardsList`}>{List}</div>;
};

export default Cards;
