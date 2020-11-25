import React from 'react';
import Sidebar from './Sidebar';
import './Admin.css'
import Products from './Products/Products';
import AllOrder from './Order/AllOrder';
import Promotions from './Promotions/Promotions';


const Admin = () => {
    return (
        <div className='row customer-service'>

        {/* ------------------------------------------left sidebar--------------------------------------------- */}
        <div className = 'col-md-2 left-sidebar' id='sidebar'> 
            <Sidebar></Sidebar>
        </div>

        {/* ------------------------------------------ Order --------------------------------------------- */}
        <div id='allOrder'className = 'col-md-10' style={{background:'#E5E5E5' }}>
            <AllOrder></AllOrder>
        </div>

         {/* ------------------------------------------ Product  ----------------------------------------------- */}
         <div id='Products'className = 'col-md-10' style={{background:'#E5E5E5'}}>
            <Products ></Products>
        </div>

          {/* ------------------------------------------ Promotions  ----------------------------------------------- */}
          <div id='promotions'className = 'col-md-10' style={{background:'#E5E5E5'}}>
            <Promotions ></Promotions>
        </div>

    </div>
    );
};

export default Admin;