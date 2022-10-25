import styles from './Header.module.css';
import menuIcon from '../icons/menu.png';

const Header = () => {

  //denna funkar SÅDÄR. När skärmen är <600px, ska ikonen synas och menyn döljas. 
  //när skärmen är >600px, ska ikonen döljas och menyn lägga sig längs skärmens fulla längd. 
  const toggleNavbar = ()=> {
    console.log('clicking the hamburger')
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <header>
    <div className={styles.topnav}>
    <h1 className={styles.h1Heading}><a href="/" className={styles.active}>dagensbok.com</a></h1>
    <nav id="myLinks" className={styles.myLinks}>
        <a className={styles.headerLinks} href="">Hem</a>
        <a className={styles.headerLinks} href="">Krönikor</a>
        <a className={styles.headerLinks} href="">Intervjuer</a>
        <a className={styles.headerLinks} href="">FAQ</a>
        <a className={styles.headerLinks} href="">Redaktionen</a>
        <a className={styles.headerLinks} href="">Arkivet</a>
    </nav>
      <img src={menuIcon} className={styles.menuIcon} onClick={()=>toggleNavbar()}>
      </img>
  </div>






  
      {/* <nav className={styles.headerNav}>
        <a className={styles.headerLinks} href="">Hem</a>
        <a className={styles.headerLinks} href="">Krönikor</a>
        <a className={styles.headerLinks} href="">Intervjuer</a>
        <a className={styles.headerLinks} href="">FAQ</a>
        <a className={styles.headerLinks} href="">Redaktionen</a>
        <a className={styles.headerLinks} href="">Arkivet</a>
      </nav> */}
    </header>
  )
}

export default Header;

/* <a href="https://www.flaticon.com/free-icons/open-menu" title="open menu icons">Open menu icons created by Pixel perfect - Flaticon</a> */