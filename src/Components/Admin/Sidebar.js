import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLock, faPlus,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Admin.css'

const Sidebar = () => {

    const displayALLServiceList = ()=>{
        document.getElementById('makeAdmin').style.display = 'none';
        document.getElementById('addProduct').style.display = 'none';
        document.getElementById('allService').style.display = 'block';
    }
    const displayAddProduct = () => {
        document.getElementById('makeAdmin').style.display = 'none';
        document.getElementById('allService').style.display = 'none';
        document.getElementById('addProduct').style.display = 'block';   
    }
    const displayMakeAdmin = () => {
        document.getElementById('allService').style.display = 'none';
        document.getElementById('addProduct').style.display = 'none';
        document.getElementById('makeAdmin').style.display = 'block';
   
    }
    return (
        <>
            <p onClick={displayALLServiceList} className ='pt-3 pl-4'> <FontAwesomeIcon icon={faLock} /> Service List</p>
            <p onClick={displayAddProduct} className ='pl-4' ><FontAwesomeIcon icon={faPlus} /> Add Product</p>
            <p onClick={displayMakeAdmin} className ='pl-4' ><FontAwesomeIcon icon={faUserPlus} /> Make Admin</p>

        </>
    );
};

export default Sidebar;