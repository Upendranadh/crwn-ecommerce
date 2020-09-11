import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./HeaderComponent.scss";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../FireBase/FireBase.util";

const HeaderComponent = ({ currentUser }) => {
  // console.log(currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SignOut
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HeaderComponent);
