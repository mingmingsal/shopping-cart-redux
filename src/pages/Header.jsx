import { useState, useEffect } from "react";
import "./Header.css";
import profilePhoto from "../assets/images/account_circle_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import cartPhoto from "../assets/images/shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <>
      {matches && (
        <nav>
          <p className="logo">HANOVER AND TYKE</p>
          <ul className="links">
            <li>
              <Link to='/'>New Arrivals</Link>
            </li>
            <li>
            <Link to='/store/collections'>Collections</Link>
            </li>
            <li>
              <Link to='/store/products'>Shop</Link>
            </li>
          </ul>
          <ul className="accountLinks">
            <li>
              <a>
                <img className="icon" src={cartPhoto} />
              </a>
            </li>
            <li>
              <a>
                <img className="icon" src={profilePhoto} />
              </a>
            </li>
          </ul>
        </nav>
      )}
      {!matches && (
        <nav>
          <p className="logo">HANOVER AND TYKE</p>
          <ul className="links">
            <li>
              <a>Menu</a>
            </li>
            <li>
            <a>
                <img className="icon" src={cartPhoto} />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
