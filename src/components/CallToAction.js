import { Link, useNavigate } from "react-router-dom";
import OrderCard from "./OrderCard";
import NewLocationCard from "./NewLocationCard";

const CallToAction = () => {
  const navigate = useNavigate()
  return (
    <section id="hero">
      <article className="hero-text">
        {/* <h1 className="ultra-regular">Little Lemon</h1> */}
        {/* <h2 style={{ color: "rgb(237, 239, 238)" }} className="ultra-regular">Chicago</h2> */}
        <p style={{ color: "#FEF8E6" }} className="ultra-regular">
          Traditional recipes<span style={{ color: "#f4ce14" }}>,</span> modern twist<span style={{ color: "#f4ce14" }}>.</span>
        </p>
        <br />
        <div className="hero-btn-container">
          <button
            className="btn btn--booking"
            role="button"
            aria-label="Book a Table"
            onClick={() => navigate("/booking")}
            data-discover="true">
            Book a Table
          </button>
        </div>
      </article>
      <div className="order-btn-container">
        <img src={require("../images/restaurant_chef_B.png")}
          alt="little lemon chef seasoning food" />
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          marginBottom: "1.4rem",
          // backgroundColor: "red"
        }}>
          <NewLocationCard />
          <OrderCard />
        </div>
      </div>
    </section >
  );
};

export default CallToAction;
