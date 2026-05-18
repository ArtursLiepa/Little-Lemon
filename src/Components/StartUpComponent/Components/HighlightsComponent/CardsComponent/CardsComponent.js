import "./CardsComponent.css";
import delivery from "../../../../../Assets/delivery.jpg";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const List = props.data.map((items) => {
    return (
      <div className="cardView" key={items.id}>
        <section className="cardImage">
          <img src={items.image}></img>
        </section>
        <section className="cardInfo">
          <div className="cardsHead">
            <div className="cardsTitle">{items.name}</div>
            <div className="cardsPrice">${items.price}</div>
          </div>

          <p>{items.info}</p>
          <Link className="deliverySection">
            Order a delivery
            <span className="deliveryIcon">
              <img src={delivery}></img>
            </span>
          </Link>
        </section>
      </div>
    );
  });
  return <div className="cardsList">{List}</div>;
};

export default Cards;
