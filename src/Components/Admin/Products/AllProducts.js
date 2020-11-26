import React, { useEffect, useState } from 'react';
import ProductCards2 from './productsCard2';

const AllProducts = () => {
    const [products ,setProducts] = useState([]);
       // eslint-disable-next-line react-hooks/exhaustive-deps
   const requestOptions = {
    method: 'GET',
    headers: { 
        'Content-Type': 'application/json',
    }
  }
    useEffect(() => {
    fetch('https://gentle-crag-19557.herokuapp.com/allProducts',requestOptions) 
        .then(response => response.json())
        .then(data => setProducts(data)); 
    }, [products,requestOptions]);

    const displayAddProduct = () => {
        
        document.getElementById('add-Products').style.display = 'block'; 
        document.getElementById('all-Products').style.display = 'none';  
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

export default AllProducts;