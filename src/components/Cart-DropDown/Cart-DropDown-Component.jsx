import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./Cart-DropDown.style.scss";
function CartDropDown() {
  return (
    <div>
      <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
}

export default CartDropDown;
