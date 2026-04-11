import { Link } from "react-router-dom";
import logo from '../images/logo_white_yellow.svg';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Little Lemon Logo" />
    </Link>
  );
};

export default Logo;
