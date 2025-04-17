import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/texanas">Texanas</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/botas">Botas</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/borcegos">Borcegos</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/zapatillas">Zapatillas</NavLink>
          </li>
        </ul>
      </nav>
      <div className="cart-widget-container">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
