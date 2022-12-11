import s from "./Review.module.css";
import img from "../images/9781250236210_200x_a-psalm-for-the-wild-built.jpeg";

const Review = () => {
  return (
    <div className={s.pageWrapper}>
      <article className={s.reviewContainer}>
        <div className={s.bookContainer}>
          <div className={s.coverImg}>
            <img src={img} alt="Book cover" className={s.bookcover} />
          </div>
          <div className={s.titleContainer}>
            <h2 className={s.title}>Titel</h2>
            <h3 className={s.subtitle}>Undertitel</h3>
            <h3 className={s.author}>Författare</h3>
            <p className={s.year}>Årtal</p>
            <p className={s.publisher}>Förlag</p>
          </div>
        </div>
        <div className={s.textContainer}>
          <h4 className={s.reviewHeading}>Recensionens rubrik</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className={s.writtenBy}>Skribentens namn</p>
          <p className={s.publishedAt}>Publicerad DD-MM-YY</p>
        </div>
      <div className={s.bookInfo}>
        <ul>
          <li>Utgivningsår</li>
          <li>ISBN</li>
          <li>Sidor</li>
          <li>Originalspråk</li>
        </ul>
        <h5>Etiketter</h5>
        <ul>
          <li>Deckare</li>
          <li>Skönlitteratur</li>
          <li>Spänning</li>
        </ul>
        </div>
      </article>
      </div>
  );
};

export default Review;
