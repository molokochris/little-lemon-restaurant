import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
  const navigate = useNavigate()
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
          {/* <Link to="/order-online">
            <li>Order Online</li>
          </Link> */}
        </ul>
      </nav>
      <button
        className="btn"
        style={{ fontWeight: "400", padding: ".4rem 1.6rem" }}
        onClick={() => navigate("/reservations")}>Book a Table</button>
    </header>
  );
};

export default Nav;
