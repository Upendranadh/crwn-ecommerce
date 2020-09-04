import React from "react";

import "./signin-signup.scss";
import SignIn from "../../components/Sign-in/Sign-in.component";
import SignUp from "../../components/Sign-Up/Sign-Up.comoponent";

const SignInAndSignupPage = () => (
  <div className="sign-in-and-signup">
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
);

export default SignInAndSignupPage;
