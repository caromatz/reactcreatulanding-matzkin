// NavBar.jsx
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";


const NavBar = () => {
    return (
      <header>
        <nav>
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" className="logo" />
          <ul>
            <li>Maquillajes</li>
            <li>Cremas</li>
            <li>Jabones</li>
            <li>Velas</li>
          </ul>
        </nav>
  
        <div className="cart-widget-container">
          <CartWidget />
        </div>
      </header>
    );
  };
  
export default NavBar;
