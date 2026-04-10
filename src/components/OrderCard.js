import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate()
    return (
        <div className="order-card">
            {/* Floating Bowl Image */}
            <div className="image-container">
                <img
                    src={require("../images/mediterranean_food_bowl-1.png")}
                    alt="Mediterranean Salad"
                    className="salad-image"
                />
            </div>

            {/* Card Content */}
            <div className="card-content">
                <h3>Organic Meal</h3>
                <p>Full Protein</p>

                <button
                    className="order-btn"
                    onClick={() => navigate("/order-online")}
                    aria-label="Order Online"
                >
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default OrderCard;