import Logo from "./Logo";

const Nav = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
          <a href="/menu">
            <li>Menu</li>
          </a>
          <a href="/reservations">
            <li>Reservations</li>
          </a>
          <a href="/order-online">
            <li>Order Online</li>
          </a>
          <a href="/login">
            <li>Logins</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
