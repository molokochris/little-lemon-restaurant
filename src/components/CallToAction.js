import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section id="hero">
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.{" "}
        </p>
        <button className="button" role="button" aria-label="Reserve a Table">
          <Link to="/booking">Reserve a Table</Link>
        </button>
      </article>
      <img
        src={require("../images/restauranfood.jpg")}
        alt="A table with a variety of Mediterranean dishes"
      />
    </section>
  );
};

export default CallToAction;
