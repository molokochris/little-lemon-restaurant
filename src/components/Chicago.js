const Chicago = () => {
  return (
    <section id="about">
      <article className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Little Lemon is a family owned Mediterranean
          restaurant located in the heart of Chicago.
          We are passionate about serving traditional recipes
          with a modern twist, using fresh and locally sourced
          ingredients. Our mission is to provide our customers
          with an unforgettable dining experience that combines
          delicious food, warm hospitality, and a cozy atmosphere.</p>
      </article>
      <div className="about-images">
        <img alt="Restaurant Food" className="about-img-1"
          src={require("../images/restauranfood.jpg")} />
        <img alt="Greek Salad" className="about-img-2"
          src={require("../images/greek salad.jpg")} />
      </div>
    </section>
  );
};

export default Chicago;
