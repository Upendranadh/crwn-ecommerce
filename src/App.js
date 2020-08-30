import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./FireBase/FireBase.util";
import "./App.css";

import HomePage from "./pages/homepage.components/HomePage.component.jsx";
import { ShopPage } from "./pages/shop/shop.component";
import { HeaderComponent } from "../src/components/HeaderComponent/HeaderComponent";
import SignInAndSignupPage from "./pages/Sign-in-and-SignUp-pa/Signin-Signup-component";

/*
//demo for the Routing for Hats page

const HatsPage = () => (
  <div>
    <h1>Hatspage</h1>
  </div>
);
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent currentUser={this.state.currentUser}></HeaderComponent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin">
            {SignInAndSignupPage}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
