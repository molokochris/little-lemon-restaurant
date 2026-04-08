import { Link } from "react-router-dom";

const Logo = () => {
  const logo = "./Logo.svg";
  return (
    <Link to="/">
      <img src={logo} alt="Little Lemon Logo" />
    </Link>
  );
};

export default Logo;
