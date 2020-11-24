import React from 'react';
import CartProductsRow from './CartProductsRow';
import { cartContext } from '../../App';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';


const CartProducts = () => {
    const [cart,setCart] = useContext(cartContext);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data,e) => {
        setCart([]);
        alert("Your order placed successfully.click ok to go Admin Panel")
        history.push({
            pathname: '/dashboard',
            })
    }

    
    const handleRemoveCartItem = (id)=>{  // remove a item from cart
        const newCart = cart.filter( pd => pd._id !== id);  
         setCart(newCart);
         console.log(newCart);  
    }

    const handleCartQuantity = (operation, id)=>{
        console.log(operation, id)
        const currentItemNumber = cart.find( pd => pd._id === id); //to check current item number
        const index = cart.findIndex(x => x._id ===id);
        if(operation==='increase'){
            const newcart = [...cart]
            const updatableProduct = cart[index];
            updatableProduct.quantity= updatableProduct.quantity+1;
            setCart(newcart);
            console.log(updatableProduct);
        }
        else{
            if(currentItemNumber.quantity>1){
                const newcart = [...cart]
                const updatableProduct = cart[index];
                updatableProduct.quantity= updatableProduct.quantity-1;
                setCart(newcart);
                console.log(updatableProduct);
            }
        }  
    }
   
    return (
        <div className = ''>
        <table className="table bg-white " id = ''> {/*------------------- List of all orders of customer */}
            <tbody> 
                {
                    cart.map( products => <CartProductsRow key= {products._id}  products={products} handleRemoveCartItem={handleRemoveCartItem} handleCartQuantity={handleCartQuantity} > </CartProductsRow>).reverse()
                }   
            </tbody>    
        </table>

      { cart.length>0 && // -------------------check if product is in cart ? 
         <form onSubmit={handleSubmit(onSubmit)} className='bg-white mt-5 p-5'>
            <div className="form-check mb-5 d-flex">
                <div>
                    <input className="form-check-input mt-2" type="radio" name="radioCheck" id="exampleRadios1" value="option1" ref={register({ required: true })} />
                    <label className="form-check-label" for="exampleRadios1">
                        <small>I agree to Terms and Conditions, Privacy Policy and Refund Policy </small> <br/>
                        {errors.radioCheck && <small className='error text-danger'>*You must have to be agree with terms and conditon </small>} 
                    </label>
                </div>
                <div className="ml-auto">
                    <button className="btn  bg-warning px-5 mr-auto" type='submit' >Checkout</button>
                </div>
            </div>        
        </form>
      }
    </div>
    );
};

export default CartProducts;