import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerLinks}>
      <p>2000-2022</p>
      <a href="">Facebook</a>
      <a href="">Instagram</a>
      <a href="https://www.flaticon.com/free-icons/open-menu" title="open menu icons">Open menu icon created by Pixel perfect - Flaticon</a> 
      </div>
    </footer>
  )
}

export default Footer;