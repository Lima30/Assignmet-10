import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;

    let total = 0;
    for (const people of cart) {
        total = total + people.balance;
    }

    return (
        <div className="text-center">
            <h3>Total Treatment added: {cart.length}</h3>
            <h4>Total Cost:${total}</h4>
            {/* <button className="btn btn-info">Book Today</button> */}
            <button className="btn btn-primary btn-sm btn btn-info text-dark"> <Link to="/placeorder">Book Today</Link></button>
        </div>
    );
};

export default Cart;

