import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage.components/HomePage.component.jsx";
import { ShopPage } from "./pages/shop/shop.component";

/*
//demo for the Routing for Hats page

const HatsPage = () => (
  <div>
    <h1>Hatspage</h1>
  </div>
);
*/

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </div>
    </Switch>
  );
}

export default App;
