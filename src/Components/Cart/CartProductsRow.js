import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinus, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons'
import img from '../Images/realme.jpg'


const CartProductsRow = (props) => {
    let {name , price, image, color, size,shippingCharge, _id,quantity} = props.products;
    const handleRemoveCartItem= props.handleRemoveCartItem;
    const handleCartQuantity= props.handleCartQuantity;
      
    
    const titalPrice = parseInt(price)* parseInt(quantity)

    return (
        <tr>
        <td><img src={"data:image/png;base64," + image.img} width='90px' alt=""/></td>
        <td>
            <p>{name}</p>
            <p>              
                color: {color} &nbsp;  &nbsp; size: {size} <br/>
                product price: BDT. {price}  
            </p>
        </td>
        <td>
            <p>.</p>
            <p>Shipping Method: EMS <br/>
             Shipping Charge: BDT. {shippingCharge} </p>
        </td>
        <td>
            <p>.</p>
    <p id='quantity'>Quantity: &nbsp;
      <span className="bg-light px-2">
         <FontAwesomeIcon onClick={(event)=>handleCartQuantity('increase',_id)} icon={faPlus} /> &nbsp;
         <b>{quantity}</b> &nbsp;
        <FontAwesomeIcon onClick={(event)=>handleCartQuantity('decrease',_id)} icon={faMinus}/></span> <br/>
       Total Price: BDT. {titalPrice}</p>
        </td> 
        <td>                       
            <FontAwesomeIcon onClick={()=>handleRemoveCartItem(_id)} icon={faTrash} />
        </td>  
    </tr>
    );
};

export default CartProductsRow;