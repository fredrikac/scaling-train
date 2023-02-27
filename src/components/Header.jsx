import menuIcon from '../assets/menu.png';
import searchIcon from '../assets/search.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='d-flex p-3 container-fluid border-bottom shadow-sm'>
      <div className='d-flex align-items-center justify-content-center align-self-center justify-self-center'>
        
        <nav className='navbar-nav'>
          <a className='dropdown d-flex bg-body-secondary rounded-circle p-2' href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={menuIcon} alt='menu-hamburger' height='15px' width='15px'>
            </img>
          </a>
      
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Hem</Link></li>
            <li><Link className="dropdown-item" to="">Krönikor</Link></li>
            <li><Link className="dropdown-item"to="">Teman</Link></li>
            <li><Link className="dropdown-item" to="">Intervjuer</Link></li>
            <li><Link className="dropdown-item" to="">FAQ</Link></li>
            <li><Link className="dropdown-item" to="/redaktionen">Redaktionen</Link></li>
            <li><Link className="dropdown-item" to="">Arkivet</Link></li>
          </ul>
        </nav>
      </div>

      <h1 className='d-flex align-items-center justify-content-center vw-100'>
        <Link className='text-decoration-none text-black font-1' to="/" >DAGENSBOK.COM</Link>
      </h1>

      <div className='d-flex align-items-center justify-content-center align-self-center justify-self-center'>
      <a className='dropdown d-flex justify-content-end bg-body-secondary rounded-circle p-2' href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={searchIcon} alt='search-icon' height='15px' width='15px' />
      </a>
      </div>

    </header>
  )
}

export default Header;

