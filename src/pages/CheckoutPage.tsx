import React from "react";
// import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <main className="checkout-page">
      <PageHero title="checkout" />
      <div className="page">
        <h1>checkout here</h1>
      </div>
    </main>
  );
};

export default CheckoutPage;
