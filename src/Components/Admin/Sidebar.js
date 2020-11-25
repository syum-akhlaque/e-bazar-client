import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLock, faPlus,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Admin.css'

const Sidebar = () => {

    const displayALLOrderList = ()=>{
    
        document.getElementById('allOrder').style.display = 'block';
        document.getElementById('Products').style.display = 'none';
    }

    const displayProducts = () => {
        document.getElementById('allOrder').style.display = 'none';
        document.getElementById('Products').style.display = 'block';
        document.getElementById('add-Products').style.display = 'none'; 
        document.getElementById('all-Products').style.display = 'block';  
    }
    return (
        <>
            <p onClick={displayALLOrderList} className ='pt-3 pl-4'> <FontAwesomeIcon icon={faLock} /> Order</p>
            <p onClick={displayProducts} className ='pl-4' > Products</p>
            
        </>
    );
};

export default Sidebar;