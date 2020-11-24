import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../App';
import ProductCards from './ProductCards';
import './Shop.css'

const Shop = () => {
   const [products ,setProducts] = useState([]);
   const [cart,setCart] = useContext(cartContext);

   const handleUpdateCart = (items)=>{
      const newItem = cart.find( pd => pd._id === items._id);
     if (!newItem){  // if not new item then add this item into cart
      items.quantity=1; //set default quantity 1
      const newCart = [...cart,items]
      setCart(newCart);
      console.log(newCart);
     }
   }

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const requestOptions = {
       method: 'GET',
       headers: { 
           'Content-Type': 'application/json',
       }
     }

   useEffect(() => {
     fetch('http://localhost:5000/allProducts',requestOptions) 
         .then(response => response.json())
         .then(data => setProducts(data)); 
   }, [products,requestOptions]);
   
    return (
        <section className='bg-light'>
            <div className='container'>
            <div className="row row-cols-md-5">
                {
                    products.map(products => <ProductCards products={products} key={products._id} handleUpdateCart={handleUpdateCart}> </ProductCards>)
                }
            </div>
            </div>     
        </section>
    );
};

export default Shop;