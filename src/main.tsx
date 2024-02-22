import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/main.scss";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);

// dev-mpka0mcxs6mkqscu.us.auth0.com
// SAsNqOo662F4jnbfQNJDsH97zuE1USqA

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mpka0mcxs6mkqscu.us.auth0.com"
      clientId="SAsNqOo662F4jnbfQNJDsH97zuE1USqA"
      redirectUri={window.location.origin}
    >
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </Auth0Provider>
  </React.StrictMode>
);
