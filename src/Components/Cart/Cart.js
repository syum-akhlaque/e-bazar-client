import React from 'react';
import { Link } from 'react-router-dom';
import CartProducts from './CartProducts';
import OrderSummary from './OrderSummary';

const Cart = () => {
    return (
        <div className='container'>
           <Link to='/'> <button className= 'btn btn-light mt-5'>Go back</button></Link>
            <div className="row mt-5">
                <div className="col-md-9">
                    <CartProducts/>
                </div>
                <div className="col-md-3 bg-light">
                    <OrderSummary/>
                </div>
            </div>
        </div>
    );
};

export default Cart;