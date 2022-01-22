import React from "react";
import Header from "../components/Header";
import ShoppingCart from "../components/ShoppingCart";

const CheckoutPage = ({
  cart,
  setCart,
  emptyCart,
  deleteItemFromCart,
  text,
  subtext,
}) => {
  return (
    <>
      <Header text={text} subtext={subtext} />
      <ShoppingCart
        cart={cart}        
        emptyCart={emptyCart}
        deleteItemFromCart={deleteItemFromCart}
      />
    </>
  );
};

export default CheckoutPage;
