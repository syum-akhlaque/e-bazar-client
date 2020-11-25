import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLock, faPlus,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Admin.css'

const Sidebar = () => {

    const displayALLOrderList = ()=>{
    
        document.getElementById('allOrder').style.display = 'block';
        document.getElementById('Products').style.display = 'none';
        document.getElementById('promotions').style.display = 'none';
        document.getElementById('promotionsSubmenu').style.display = 'none';
    }

    const displayProducts = () => {
        document.getElementById('allOrder').style.display = 'none';
        document.getElementById('Products').style.display = 'block';
        document.getElementById('add-Products').style.display = 'none'; 
        document.getElementById('all-Products').style.display = 'block';  
        document.getElementById('promotions').style.display = 'none';
        document.getElementById('promotionsSubmenu').style.display = 'none';
    }

    const displayPromotions = () => {
        document.getElementById('allOrder').style.display = 'none';
        document.getElementById('Products').style.display = 'none';
        document.getElementById('promotions').style.display = 'block';
        document.getElementById('promotionsSubmenu').style.display = 'block';
    }
    const displayPromoCodes = () => {
        document.getElementById('promoCodes').style.display = 'block';
        document.getElementById('addPromoCodes').style.display = 'none';        
    }
    const displayAddPromoCodes = () => {
        document.getElementById('promoCodes').style.display = 'none';
        document.getElementById('addPromoCodes').style.display = 'block'; 
    }

    return (
        <>
            <div>
              <p onClick={displayPromotions} className ='pt-3 pl-4'><FontAwesomeIcon icon={faPlus} /> Promotions</p>
                    <span id='promotionsSubmenu'>
                        <span onClick={displayPromoCodes} className ='pl-5'>Promo Codes</span> <br/>
                        <span onClick={displayAddPromoCodes} className ='pl-5'>Add Promo Codes</span>
                    </span>
            </div>
            <p onClick={displayALLOrderList} className ='pl-4 mt-2'> <FontAwesomeIcon icon={faLock} /> Order</p>
            <p onClick={displayProducts} className ='pl-4' > Products</p>
        </>
    );
};

export default Sidebar;