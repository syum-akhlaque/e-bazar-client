import React from 'react';
import MakeAdmin from './MakeAdmin';
import AllService from './AllService';
import Sidebar from './Sidebar';
import './Admin.css'
import AddProducts from './AddProducts';


const Admin = () => {
    return (
        <div className='row customer-service'>

        {/* ------------------------------------------left sidebar--------------------------------------------- */}
        <div className = 'col-md-2 left-sidebar' id='sidebar'> 
            <Sidebar></Sidebar>
        </div>

        {/* ------------------------------------------All Servic List --------------------------------------------- */}
        <div id='allService'className = 'col-md-10' style={{background:'#E5E5E5' }}>
            <AllService ></AllService>
        </div>

        {/* -----------------------------------------Review -------------------------------------------------- */}
        <div id='addProduct'className = 'col-md-10' style={{background:'#E5E5E5'}}>
            <AddProducts></AddProducts>
        </div>

         {/* ------------------------------------------Order Form----------------------------------------------- */}
         <div id='makeAdmin'className = 'col-md-10' style={{background:'#E5E5E5'}}>
            <MakeAdmin ></MakeAdmin>
        </div>

    </div>
    );
};

export default Admin;