import Review from "./Review";
import s from "./Review.module.css";

const Reviews = () => {
  return (
    <div>
      <span className={s.dateSpan}>
  
        <p>Veckodag datum</p>

      </span>
      <Review />
    </div>
  );
};

export default Reviews;
