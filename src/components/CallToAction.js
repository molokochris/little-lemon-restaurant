import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section id="hero">
      <article className="hero-text">
        <h1>Little Lemon</h1>
        <h2 style={{ color: "rgb(237, 239, 238)" }}>Chicago</h2>
        <p style={{ color: "rgb(237, 239, 238)" }}>
          We are a family-owned Mediterranean restaurant, focused on traditional recipes served with
          a modern twist.</p>
        <br />
        <a className="button" role="button" aria-label="Reserve a Table" href="#/booking" data-discover="true" style={{ display: "inline-block", marginTop: "1rem" }}>Reserve a Table</a>
      </article>
      <div className="hero-image-container">
        <img alt="A table with a variety of Mediterranean dishes"
          src={require("../images/restauranfood.jpg")}
        />
      </div>
    </section>
  );
};

export default CallToAction;
