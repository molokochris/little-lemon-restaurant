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
            <Link to="/booking">Reservations</Link>
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
        <a href="tel:+27823456789"><p>(27) 823456789</p></a>
        <a href="mailto:molokochrisp742@gmail.com"><p>
          admin@littlelemon.com
        </p></a>
      </div>
      <div>
        <h2>Follow Us</h2>
        <ul className="footer-links">
          <li>
            <a href="https://www.linkedin.com/in/molokochris" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.instagram.com/molokochris" target="_blank" rel="noreferrer">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/bigsmok3z" target="_blank" rel="noreferrer">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
