import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage.components/HomePage.component.jsx";
import { ShopPage } from "./pages/shop/shop.component";
import { HeaderComponent } from "../src/components/HeaderComponent/HeaderComponent";

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
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
