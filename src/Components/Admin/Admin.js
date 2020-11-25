import React from 'react';
import MakeAdmin from './MakeAdmin';
import Sidebar from './Sidebar';
import './Admin.css'
import AddProducts from './AddProducts';
import Products from './Products';
import AllOrder from './Order/AllOrder';


const Admin = () => {
    return (
        <div className='row customer-service'>

        {/* ------------------------------------------left sidebar--------------------------------------------- */}
        <div className = 'col-md-2 left-sidebar' id='sidebar'> 
            <Sidebar></Sidebar>
        </div>

        {/* ------------------------------------------All Servic List --------------------------------------------- */}
        <div id='allService'className = 'col-md-10' style={{background:'#E5E5E5' }}>
            <AllOrder></AllOrder>
        </div>

        {/* -----------------------------------------Review -------------------------------------------------- */}
        <div id='addProduct'className = 'col-md-10' style={{background:'#E5E5E5'}}>
            <AddProducts></AddProducts>
        </div>

         {/* ------------------------------------------Order Form----------------------------------------------- */}
         <div id='makeAdmin'className = 'col-md-10' style={{background:'#E5E5E5'}}>
            <MakeAdmin ></MakeAdmin>
        </div>

         {/* ------------------------------------------Order Form----------------------------------------------- */}
         <div id='allProduct'className = 'col-md-10' style={{background:'#E5E5E5'}}>
            <Products ></Products>
        </div>

    </div>
    );
};

export default Admin;