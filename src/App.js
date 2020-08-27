import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage.components/HomePage.component.jsx";

const HatsPage = () => (
  <div>
    <h1>Hatspage</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </div>
    </Switch>
  );
}

export default App;
