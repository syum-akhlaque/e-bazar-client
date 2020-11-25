import React from 'react';
import AddProducts from './AddProducts';
import AllProducts from './AllProducts';
import '../Admin.css'
import './Products.css'

const Products = () => {
    return (
        <div>   

            <div id='all-Products'>
                <AllProducts ></AllProducts>
            </div>
            <div id='add-Products'>
                <AddProducts ></AddProducts> 
            </div>
        </div>
    );
};

export default Products;