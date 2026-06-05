import "./HighlightsComponent.css";
import bruchetta from "../../../../Assets/bruchetta.svg";
import greeksalads from "../../../../Assets/greek salad.jpg";
import lemonsdesert from "../../../../Assets/lemon dessert.jpg";
import Cards from "./CardsComponent/CardsComponent";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../Context/ThemeContext";

const Highlights = () => {
  const specialList = [
    {
      id: 1,
      name: "Greek salads",
      info: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      price: 12.99,
      image: greeksalads,
    },
    {
      id: 2,
      name: "Bruchetta",
      info: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
      price: 5.99,
      image: bruchetta,
    },
    {
      id: 3,
      name: "Lemon Desert",
      info: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: 5.0,
      image: lemonsdesert,
    },
  ];

  const { theme } = useTheme();
  return (
    <div
      className={`highlightsSection ${theme === "light" ? "light" : "dark"}`}
    >
      <div className="specialTtitle">
        <article>This weeks specials</article>
        <div className="menuButton" aria-label="Online Menu" role="button">
          <Link className="button" to="menu">
            Online menu
          </Link>
        </div>
      </div>
      <>
        <Cards data={specialList}></Cards>
      </>
    </div>
  );
};

export default Highlights;
