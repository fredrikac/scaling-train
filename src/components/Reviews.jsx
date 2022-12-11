import Review from "./Review";
import s from "./Review.module.css";

const Reviews = () => {
  return (
    <div>
      <span className={s.dateSpan}>
        <button>Bakåt</button>
        <p>Veckodag datum</p>
        <button>Framåt</button>
      </span>
      <Review />
    </div>
  );
};

export default Reviews;
