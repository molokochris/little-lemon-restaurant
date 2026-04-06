import Logo from "./Logo";
import Nav from "./Nav";

const Footer = () => {
  return (
    <footer>
      <Logo />
      <div>
        <h3>Doormat Navigation</h3>
        <Nav />
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>Admin</p>
        <p>+27 123 456 789</p>
        <p>info@littlelemon.com</p>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <p>Admin</p>
        <p>+27 123 456 789</p>
        <p>follow@littlelemon.com</p>
      </div>
    </footer>
  );
};

export default Footer;
