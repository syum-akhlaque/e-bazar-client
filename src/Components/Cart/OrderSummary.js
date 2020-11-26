import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { cartContext, userContext } from '../../App';
// import promocodes from '../FakeData/Promocodes';

const OrderSummary = () => {
    const { register, handleSubmit } = useForm();
    const [cart] = useContext(cartContext);
    const [loggedInUser] = useContext(userContext)
    const history = useHistory()
    //----------------calculate cart price
    let subTotal = 0;
    let shippingCharge= 0;
    let [discount,setDiscount] = useState(0);
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        const discountPrice = parseInt(product.price) - parseInt(product.price)* parseInt(product.discount)/100;
        subTotal = subTotal + discountPrice * parseInt(product.quantity);
        shippingCharge = shippingCharge + parseInt(product.shippingCharge) * parseInt(product.quantity)     
    }
    let totalPayable = subTotal - discount+ shippingCharge

    //----------------------get promocodes-------------------
    const [promoCodes ,setPromocodes] = useState([]);
    const requestOptions = {
    method: 'GET',
    headers: { 
        'Content-Type': 'application/json',
    }
    }
    useEffect(() => {
    fetch('https://gentle-crag-19557.herokuapp.com/getPromocodes',requestOptions) 
        .then(response => response.json())
        .then(data => setPromocodes(data)); 
    }, [promoCodes]);

    //----------- check promocode validity and add discount --------------------
    const onSubmit = (data,e) => {

        if(loggedInUser.isLoggedin === true){
            e.preventDefault();
            const chackValidCode = promoCodes.find(x => x.promoCodes === data.code)

            if(chackValidCode && chackValidCode.activeStatus==='yes' ){  // acheck is promo code is active and its validity
                const discountPercentage = parseInt(chackValidCode.discountRate);
                discount = subTotal*discountPercentage/100
                setDiscount(discount);
                e.target.reset();
                document.getElementById('promoError').innerHTML='' // remove error message
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
                Total Payable <span className= 'ml-auto'>{totalPayable}</span>
            </div>

            <div className='mt-5 p-3 bg-light text-danger'>
              <p>NOTE: <br/>
                # please add promocode before checkout: FREE10,FREE20 <br/>
                # Use promo code again if you dont see discount added <br/>
               # Please use promocode if you change something from cart <br/>
               </p>
           </div>
        </div>
    );
};

export default OrderSummary;