import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate()
    return (
        <div className='order-card'>
            <img src={require('../images/mediterranean_food_bowl-1.png')}
                style={{ marginTop: "-4rem" }}
                className='dish-image' alt='food in a bowl' />
            <div style={{ padding: "0 1rem" }}>
                <p style={{
                    marginBottom: ".6rem",
                    color: "#2F6656",
                    fontWeight: "bold",
                    fontSize: ".8rem"
                }}>Organic Meal<br />Full Protein</p>
                <button className='order-btn'>Order Now</button>
            </div>
        </div>
    );
};

export default OrderCard;