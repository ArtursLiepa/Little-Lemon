import "./UnderConstructionComponent.css";
import underconstruction from "../../Assets/Photos/underconstruction.png";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";

const UnderConstructionComponent = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`attentionContainer ${theme === "light" ? "light" : "dark"}`}
    >
      <div className="attentionHero">
        <article className="restaurantTittle">restaurant little lemon</article>
        <div className="attentionBanner">
          <p className="attentionText">Attention!</p>
        </div>
      </div>

      <section className="attentionLogSection">
        <div className="attentionLog logBorder">
          <div className="undercontructionImageArea">
            <div className="underconstructImage">
              <img src={underconstruction} alt="confirmation"></img>
            </div>
          </div>

          <div className="thanksInfo">Thank you for visting our website!</div>
          <div className="attentionMeassage">
            Right now this page is underconstruction!
          </div>
          <div className="reservationInfo">
            You are welcome to take reservation or take an online food delivery
          </div>
          <div className="backToHomeArea backToHomeAreaButton">
            <Link to="/">Back to Homepage</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnderConstructionComponent;
