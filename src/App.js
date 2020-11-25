import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch,Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminLogin from './Components/Login/AdminLogin';
import AllOrder from './Components/Admin/Order/AllOrder';
export const userContext = createContext();
export const adminContext = createContext();
export const cartContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loggedInAdmin, setLoggedInAdmin] = useState({});
  const [cart, setCart] = useState([]);
  return (
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
          <Login></Login>
        </Route>

        <Route exact path="/test">
          <AllOrder></AllOrder>
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
  );
}

export default App;
