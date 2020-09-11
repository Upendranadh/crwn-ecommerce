import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./HeaderComponent.scss";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../FireBase/FireBase.util";
import CartIcon from "../Cart-icon/CartIcon-component";
import CartDropDown from "../Cart-DropDown/Cart-DropDown-Component";
// import { toggleCartHidden } from "../../Redux/Cart/cart.Action";

const HeaderComponent = ({ currentUser, hidden }) => {
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
        <CartIcon></CartIcon>
        {hidden ? null : <CartDropDown></CartDropDown>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});

//we can give the toogle functionality here as well
/*
const mapDispatchtoProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
*/
export default connect(mapStateToProps)(HeaderComponent);
