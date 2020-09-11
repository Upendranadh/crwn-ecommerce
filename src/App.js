import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth, CreateUserProfileDocument } from "./FireBase/FireBase.util";
import "./App.css";

import { setCurrentUser } from "./Redux/User/User.Action";
import HomePage from "./pages/homepage.components/HomePage.component.jsx";
import { ShopPage } from "./pages/shop/shop.component";
import HeaderComponent from "../src/components/HeaderComponent/HeaderComponent";
import SignInAndSignupPage from "./pages/Sign-in-and-SignUp-pa/Signin-Signup-component";

//demo for the Routing for Hats page

const HatsPage = () => (
  <div>
    <h1>Hatspage</h1>
  </div>
);

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/hats" component={HatsPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignupPage />
              )
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchtoProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(App);
