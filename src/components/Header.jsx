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
        <a className={s.headerLinks} href="">Hem</a>
        <a className={s.headerLinks} href="">Krönikor</a>
        <a className={s.headerLinks} href="">Intervjuer</a>
        <a className={s.headerLinks} href="">FAQ</a>
        <a className={s.headerLinks} href="">Redaktionen</a>
        <a className={s.headerLinks} href="">Arkivet</a>
      </nav>
        <img src={menuIcon} className={s.menuIcon} onClick={toggleNavbar} alt='menu-hamburger'>
        </img>
      </div>
    </header>
  )
}

export default Header;

