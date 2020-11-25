import React, { useEffect, useState } from 'react';
import ProductCards2 from './productsCard2';

const Products = () => {
    const [products ,setProducts] = useState([]);
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

    const displayAddProduct = () => {
        document.getElementById('makeAdmin').style.display = 'none';
        document.getElementById('allService').style.display = 'none';
        document.getElementById('addProduct').style.display = 'block'; 
        document.getElementById('allProduct').style.display = 'none';  
    }

    return (
        <div>
            <div className='container'>
            <button onClick={displayAddProduct} className='btn bg-white mt-5'>Add new product</button>
                <div className="row p-5">
                    {
                        products.map(products => <ProductCards2 products={products} key={products._id} > </ProductCards2>)
                    }
                </div>
            </div>     
    </div>
    );
};

export default Products;