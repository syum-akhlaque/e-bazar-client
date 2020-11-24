import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { cartContext, userContext } from '../../App';
import promocodes from '../FakeData/Promocodes';

const OrderSummary = () => {
    const { register, handleSubmit, errors } = useForm();
    const [cart] = useContext(cartContext);
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const history = useHistory()
   
    let subTotal = 0;
    let shippingCharge= 0;
    let [discount,setDiscount] = useState(0);
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        // console.log("hare is"+product);
        subTotal = subTotal + parseInt(product.price) * parseInt(product.quantity);
        shippingCharge = shippingCharge + parseInt(product.shippingCharge) * parseInt(product.quantity)     
    }

    const onSubmit = (data,e) => {

        if(loggedInUser.isLoggedin === true){
            e.preventDefault();
            const chackValidity = promocodes.find(x => x.promo === data.code)
            if(chackValidity){
                const discountPercentage = parseInt(chackValidity.percentage);
                discount = subTotal*discountPercentage/100
                setDiscount(discount);
                e.target.reset();
                document.getElementById('promoError').innerHTML=''
            }
            else{
                document.getElementById('promoError').innerHTML='promo code invalid or expired'
            }
            
        }
        else{
            history.push({
                pathname: '/login',
            })
        }
    }

    return (
        <div className='bg-white p-2'>
            <h4>Order Summary</h4>
            <hr/>
            <div className="d-flex mt-2">
                Subtotal ({cart.length} items) <span className= 'ml-auto'>{subTotal}</span>
            </div>
            <div className="d-flex mt-2">
                Discount <span className= 'ml-auto'>{discount}</span>
            </div>
            <div className="d-flex mt-2">
                Shipping Charge <span className= 'ml-auto'>{shippingCharge}</span>
            </div>
            <div className="d-flex mt-2">
               Wallet Debit <span className= 'ml-auto'>0</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex form-group mt-2">
                    <input name="code" placeholder='Type your code' ref={register({ required: false })} />      
                    <button className="btn  bg-light" type='submit' >Apply</button> 
                </div>    
                <small id='promoError' className='text-danger'></small>   
             </form>
            <hr/>
            <div className="d-flex mt-2">
                Total Payable <span className= 'ml-auto'>{subTotal - discount+ shippingCharge}</span>
            </div>
        </div>
    );
};

export default OrderSummary;