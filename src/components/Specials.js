const Specials = () => {
  const specialItemsImages = [
    require("../images/greek salad.jpg"),
    require("../images/bruschetta.svg"),
    require("../images/lemon dessert.jpg"),
  ];
  return (
    <section id="specials">
      <div className="specials-header">
        <h2>This week's specials!</h2>
        <button className="button" aria-label="Online Menu">
          Online Menu
        </button>
      </div>

      <div className="specials-container">
        <article className="special">
          <img src={specialItemsImages[0]} alt="Greek Salad" />
          <div className="special-content">
            <h3>Greek Salad</h3>
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives, and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <p className="price">$12.99</p>
          </div>
        </article>
        <article className="special">
          <img src={specialItemsImages[1]} alt="Bruschetta" />
          <div className="special-content">
            <h3>Bruschetta</h3>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil. Topped with a
              delicious tomato and basil mixture.
            </p>
            <p className="price">$5.99</p>
          </div>
        </article>
        <article className="special">
          <img src={specialItemsImages[2]} alt="Lemon Dessert" />
          <div className="special-content">
            <h3>Lemon Dessert</h3>
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <p className="price">$5.00</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Specials;
