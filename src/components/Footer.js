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
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="menu.html">Menu</a>
          </li>
          <li>
            <a href="reservations.html">Reservations</a>
          </li>
          <li>
            <a href="order.html">Order Online</a>
          </li>
          <li>
            <a href="login.html">Login</a>
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
            <a href="https://www.facebook.com/littlelemon">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/littlelemon">Instagram</a>
          </li>
          <li>
            <a href="https://www.twitter.com/littlelemon">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
