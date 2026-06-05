import "./TestimonialsComponent.css";
import Review from "./ReviewComponent/ReviewComponent";
import emilie from "../../../../Assets/Photos/1.jpg";
import michail from "../../../../Assets/Photos/2.jpg";
import nathan from "../../../../Assets/Photos/3.jpg";
import david from "../../../../Assets/Photos/4.jpg";
import { useTheme } from "../../../../Context/ThemeContext";

const Testimonials = () => {
  const { theme } = useTheme();
  const reviewList = [
    {
      id: 1,
      name: "Emily R.",
      review: "Absolutely amazing food and outstanding service. ",
      rating: 5,
      photo: emilie,
    },
    {
      id: 2,
      name: "Michael T.",
      review: "Staff were friendly and the reservation process was super easy.",
      rating: 5,
      photo: michail,
    },
    {
      id: 3,
      name: "Nathan L.",
      review: "The desserts were fantastic and beautifully presented.",
      rating: 5,
      photo: nathan,
    },
    {
      id: 4,
      name: "David K.",
      review:
        "Cozy atmosphere, quick service, and every dish tasted authentic..",
      rating: 4,
      photo: david,
    },
  ];

  return (
    <div className="testimonialsSection">
      <article
        className={`testimonialsSectionTitle ${theme === "light" ? "light" : "dark"}`}
      >
        Testimonials
      </article>
      <Review data={reviewList} />
    </div>
  );
};

export default Testimonials;
