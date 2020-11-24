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
export const userContext = createContext();
export const cartContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState([]);
  return (
    <userContext.Provider value = {[loggedInUser,setLoggedInUser]} >
    <cartContext.Provider value = {[cart,setCart]} >
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

        <Route exact path="/dashboard">
          <Dashboard></Dashboard>
        </Route>

        <Route exact path="/login">
          <Login></Login>
        </Route>

        <Route path='*'>
          <h2 className = 'text-center py-5'> 4O4  not found .......</h2>
        </Route>
    </Switch>
 </Router>
 </cartContext.Provider>
 </userContext.Provider>
  );
}

export default App;
