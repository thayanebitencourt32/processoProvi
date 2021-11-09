import React from 'react'
import { Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import EditAddress from "../pages/EditAddress";
import EditProfile from "../pages/EditProfile";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import RestaurantDetails from "../pages/RestaurantDetails";
import Signup from "../pages/SignUp/index.jsx";
import SignupAddress from "../pages/SignupAddress";


const Router = () => {
  return (
    <Switch>
      <Route exact path="/login" >
        <Login />
      </Route>
      <Route exact path="/signup" >
        <Signup />
      </Route>
      <Route exact path="/signup-address" >
        <SignupAddress />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/restaurants/:restaurantId" >
        <RestaurantDetails />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/profile/edit-profile">
        <EditProfile />
      </Route>
      <Route exact path="/profile/edit-address">
        <EditAddress />
      </Route>
      <Route>
        <div>Erro - A página não foi encontrada</div>
      </Route>
    </Switch>
  );
};

export default Router;
