import s from './Review.module.css';
import img from '../images/9781250236210_200x_a-psalm-for-the-wild-built.jpeg';

const Review = () => {
  return (
    <div>
      <span className={s.dateSpan}><button>Bakåt</button><p>Veckodag datum</p><button>Framåt</button></span>
      <article>
        <div className={s.bookContainer}>
      <div className={s.coverImg}>
          <img src={img} alt="Book cover" className={s.bookcover}/>
      </div>
      <div className={s.titleContainer}>
      <h2>Titel</h2>
      <h3>Undertitel</h3>
      <h3>Författare</h3>
      <p>Årtal</p>
      <p>Förlag</p>
      </div>
      </div>
      <div className={s.textContainer}>
      <h4>Recensionens rubrik</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>Skribentens namn</p>
        <p>Publicerad DD-MM-YY</p>
        </div>
      </article>
      <article>
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
      </article>
     </div>
  )
}

export default Review;