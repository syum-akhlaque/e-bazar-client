import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch,Route
} from "react-router-dom";

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Pages/Home,js/Home';
import Cart from './Pages/Cart/Cart';
import Dashboard from './Pages/Dashboard/Dashboard';
import UserLogin from './Pages/Login/UserLogin/UserLogin';
import AdminLogin from './Pages/Login/AdminLogin/AdminLogin';
export const userContext = createContext();
export const adminContext = createContext();
export const cartContext = createContext();
export const SearchContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loggedInAdmin, setLoggedInAdmin] = useState({});
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('')
  return (

    <SearchContext.Provider value = {[search,setSearch]}>
    <userContext.Provider value = {[loggedInUser,setLoggedInUser]} >
    <cartContext.Provider value = {[cart,setCart]} >
    <adminContext.Provider value = {[loggedInAdmin, setLoggedInAdmin]}>

    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/home">
          <Home></Home>
        </Route>

        <Route exact path="/cart">
          <Cart></Cart>
        </Route>

        <PrivateRoute exact path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>

        <Route exact path="/login">
          <UserLogin></UserLogin>
        </Route>

        <Route exact path="/adminlogin">
          <AdminLogin></AdminLogin>
        </Route>

        <Route path='*'>
          <h2 className = 'text-center py-5'> 4O4  not found .......</h2>
        </Route>
    </Switch>
 </Router>
 
 </adminContext.Provider>
 </cartContext.Provider>
 </userContext.Provider>
 </SearchContext.Provider>
  );
}

export default App;
