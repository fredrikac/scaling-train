import s from './Header.module.css';
import menuIcon from '../icons/menu.png';
import cx from 'classnames';
import { Link } from 'react-router-dom';

const Header = () => {
  const toggleNavbar = () => {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <header>
    <div className={cx(s.topnav)}>
      <h1 className={s.h1Heading}><Link to="/" className={s.h1HeaderLink}>dagensbok.com</Link></h1>
      <nav id="myLinks" className={s.myLinks}>
        <Link className={s.headerLinks} to="/">Hem</Link>
        <Link className={s.headerLinks} to="">Krönikor</Link>
        <Link className={s.headerLinks} to="">Teman</Link>
        <Link className={s.headerLinks} to="">Intervjuer</Link>
        <Link className={s.headerLinks} to="">FAQ</Link>
        <Link className={s.headerLinks} to="/redaktionen">Redaktionen</Link>
        <Link className={s.headerLinks} to="">Arkivet</Link>
      </nav>
        <img src={menuIcon} className={s.menuIcon} onClick={toggleNavbar} alt='menu-hamburger'>
        </img>
      </div>
    </header>
  )
}

export default Header;

