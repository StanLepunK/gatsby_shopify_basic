// react
import React from "react";
import { createContext } from "react";
// gatsby
import fetch from "isomorphic-fetch";
import Client from "shopify-buy";

const client = Client.buildClient(
  {
    domain: process.env.GATSBY_SHOPIFY_STORE_URL,
    storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
  },
  fetch
);

const default_values = {
  cart: [],
  open_is: false,
  loading: false,
  on_open: () => {},
  on_close: () => {},
  add_variant_to_cart: () => {},
  remove_line_item: () => {},
  update_line_item: () => {},
  client,
  checkout: {
    line_items: [],
  },
};

export const StoreContext = createContext(default_values);
