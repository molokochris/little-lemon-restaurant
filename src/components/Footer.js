import { Link } from "react-router-dom";
import Logo from "./Logo";
import Nav from "./Nav";

const Footer = () => {
  return (
    <footer>
      <Logo />
      <div>
        <h2>Navigation</h2>

        <ul className="footer-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>Contact Us</h2>
        <p>123 Main Street, Chicago, IL 60601</p>
        <p>(123) 456-7890</p>
        <p>info@littlelemon.com</p>
      </div>
      <div>
        <h2>Follow Us</h2>
        <ul className="footer-links">
          <li>
            <Link to="https://www.facebook.com/littlelemon">Facebook</Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/littlelemon">Instagram</Link>
          </li>
          <li>
            <Link to="https://www.twitter.com/littlelemon">Twitter</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
