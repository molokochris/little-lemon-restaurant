import { Link } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/menu">
            <li>Menu</li>
          </Link>
          <Link to="/reservations">
            <li>Reservations</li>
          </Link>
          <Link to="/order-online">
            <li>Order Online</li>
          </Link>
          <Link to="/login">
            <li>Logins</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
