import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { cartContext, SearchContext,  } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import './NavigationBar.css'

const NavigationBar = () => {
    const [cart] = useContext(cartContext);
    const location = useLocation();
    const currentPath = location.pathname;
    const [search, setSearch] = useContext(SearchContext)
    const handleSearch = (data)=>{
        setSearch(data)
    }
  
    return (
        <div className='container'>
        <Navbar bg="transparent" expand="lg">
         <Navbar.Brand href="#home"> <Link to="/" className='font-weight-bold '>E- Bazar</Link></Navbar.Brand>

         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ml-auto w-100">       
                 {
                     (currentPath === "/" || currentPath === "/home" || currentPath === '/cart') &&
                     <>
                        <div className = 'search-bar ml-auto '> <FontAwesomeIcon icon={faSearch} /><input  type="text"  placeholder="Search .." onChange={(event)=>handleSearch(event.target.value)}/> </div>

                        <div className='d-flex'>
                            <li className='mx-4'><FontAwesomeIcon icon={faShoppingCart} /> <Link to='/cart' className='bg-warning'> Cart</Link> {cart.length}</li>
                            <li ><FontAwesomeIcon icon={faUser} /></li>
                        </div>
                     </>
                }
                {
                     (currentPath === "/dashboard") &&
                     <>
                         <li className="pt-2 ml-auto">  <b>User Name</b> </li>
                     </>
                }
             </Nav>  
         </Navbar.Collapse>
         </Navbar>
    </div>
    );
};

export default NavigationBar;