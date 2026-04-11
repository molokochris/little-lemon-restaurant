import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate()
    return (
        <div className='order-card'>
            <img src={require('../images/mediterranean_food_bowl-1.png')}
                style={{ marginTop: "-4rem", marginRight: "-.1rem", width: "8.2rem" }}
                className=' salad-image' />
            <div style={{ padding: "0 1rem" }}>
                <p style={{
                    marginBottom: ".6rem",
                    color: "#2F6656",
                    fontWeight: "bold",
                    fontSize: ".8rem"
                }}>Organic Meal Full Protein</p>
                <button style={{
                    backgroundColor: "#2F6656",
                    border: "none",
                    padding: ".4rem .8rem",
                    borderRadius: ".8rem",
                    color: "#FEF8E6",
                    fontSize: ".8rem",
                    fontWeight: "bold"
                }}>Order Now</button>
            </div>
        </div>
    );
};

export default OrderCard;