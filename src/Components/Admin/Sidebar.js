import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLock, faPlus,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Admin.css'

const Sidebar = () => {

    const displayALLServiceList = ()=>{
        document.getElementById('makeAdmin').style.display = 'none';
        document.getElementById('addProduct').style.display = 'none';
        document.getElementById('allService').style.display = 'block';
        document.getElementById('allProduct').style.display = 'none';
    }
    const displayAddProduct = () => {
        document.getElementById('makeAdmin').style.display = 'none';
        document.getElementById('allService').style.display = 'none';
        document.getElementById('addProduct').style.display = 'block'; 
        document.getElementById('allProduct').style.display = 'none';  
    }
    const displayMakeAdmin = () => {
        document.getElementById('allService').style.display = 'none';
        document.getElementById('addProduct').style.display = 'none';
        document.getElementById('makeAdmin').style.display = 'block';
        document.getElementById('allProduct').style.display = 'none';
    }
    const displayProducts = () => {
        document.getElementById('allService').style.display = 'none';
        document.getElementById('addProduct').style.display = 'none';
        document.getElementById('makeAdmin').style.display = 'none';
        document.getElementById('allProduct').style.display = 'block';

    }
    return (
        <>
            <p onClick={displayALLServiceList} className ='pt-3 pl-4'> <FontAwesomeIcon icon={faLock} /> Order</p>
            <p onClick={displayAddProduct} className ='pl-4' ><FontAwesomeIcon icon={faPlus} /> Add Product</p>
            <p onClick={displayMakeAdmin} className ='pl-4' ><FontAwesomeIcon icon={faUserPlus} /> Make Admin</p>
            <p onClick={displayProducts} className ='pl-4' > Products</p>
            
        </>
    );
};

export default Sidebar;