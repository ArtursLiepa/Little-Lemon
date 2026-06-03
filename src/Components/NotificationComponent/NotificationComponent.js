import "./NotificationComponent.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";

const NotificationComponent = ({ data }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`notificationContainer ${theme === "light" ? "light" : "dark"}`}
    >
      <div className="notificationHero">
        <article className="notificationTittle">{data.restaurant}</article>
        <div className="notificationBanner">
          <p className="notificationText">{data.meassageTitle}</p>
        </div>
      </div>

      <section className="notificationLogSection">
        <div className="notificationLog notificationlogBorder">
          <div className="notificationImageArea">
            <div className="notificationImage">
              <img src={data.image} alt={data.meassageTitle}></img>
            </div>
          </div>

          <div className="thanksInfo">{data.thanks}</div>
          <div className="notificationMeassage">{data.meassage}</div>
          <div className="reservationInfo">{data.forwardmeassage}</div>
          <div className="backToHomeArea backToHomeAreaButton">
            <Link to={data.link}>{data.linkname}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotificationComponent;
