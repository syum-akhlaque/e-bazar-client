import React from 'react';
import Sidebar from './Sidebar';
import './Admin.css'
import Products from './Products/Products';
import AllOrder from './Order/AllOrder';


const Admin = () => {
    return (
        <div className='row customer-service'>

        {/* ------------------------------------------left sidebar--------------------------------------------- */}
        <div className = 'col-md-2 left-sidebar' id='sidebar'> 
            <Sidebar></Sidebar>
        </div>

        {/* ------------------------------------------All Servic List --------------------------------------------- */}
        <div id='allOrder'className = 'col-md-10' style={{background:'#E5E5E5' }}>
            <AllOrder></AllOrder>
        </div>

         {/* ------------------------------------------Order Form----------------------------------------------- */}
         <div id='Products'className = 'col-md-10' style={{background:'#E5E5E5'}}>
            <Products ></Products>
        </div>

    </div>
    );
};

export default Admin;