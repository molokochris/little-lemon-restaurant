import { Link, useNavigate } from "react-router-dom";
import OrderCard from "./OrderCard";

const CallToAction = () => {
  const navigate = useNavigate()
  return (
    <section id="hero">
      <article className="hero-text">
        {/* <h1 className="ultra-regular">Little Lemon</h1> */}
        {/* <h2 style={{ color: "rgb(237, 239, 238)" }} className="ultra-regular">Chicago</h2> */}
        <p style={{ color: "rgb(237, 239, 238)" }} className="ultra-regular">
          Traditional recipes<span style={{ color: "#f4ce14" }}>,</span> modern twist<span style={{ color: "#f4ce14" }}>.</span>
        </p>
        <br />
        <div className="hero-btn-container">
          <button
            className="btn btn--booking"
            role="button"
            aria-label="Reserve a Table"
            onClick={() => navigate("/booking")}
            data-discover="true">
            Reserve a Table
          </button>
          {/* <div className="order-btn-container">
            <button className="btn btn--ordering"
              role="button"
              aria-label="Order Online"
              onClick={() => navigate("/order-online")}>
              Order Online
            </button>
          </div> */}
        </div>
      </article>
      <div className="order-btn-container">
        <img src={require("../images/restaurant_chef_B.png")}
          alt="little lemon chef seasoning food" />
        {/* <div className="order-card">
          <button className="btn btn--ordering"
            role="button"
            aria-label="Order Online"
            onClick={() => navigate("/order-online")}>
            Order Online
          </button>
        </div> */}
        <OrderCard />
      </div>
      {/* <div className="hero-image-container"> */}
      {/* <img alt="A table with a variety of Mediterranean dishes"
          src={require("../images/restauranfood.jpg")}
        /> */}
      {/* </div> */}
    </section >
  );
};

export default CallToAction;
