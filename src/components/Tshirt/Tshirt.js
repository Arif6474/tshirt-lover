import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {
    const {name, picture, price} = props.tshirt;
    return (
        <div className="tshirt">
            <img src={picture} alt="" />
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <button>Add to cart</button>
        </div>
    );
};

export default Tshirt;