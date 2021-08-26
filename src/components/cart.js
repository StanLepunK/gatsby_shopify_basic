import React from "react";
import { useContext } from "react";
// app
import { StoreContext } from "../context/store_context";

export function add_to_cart({ variantId, quantity, available, ...props }) {
  const { add_variant_to_cart, loading } = useContext(StoreContext);

  function add(e) {
    e.preventDefault();
    add_variant_to_cart(variantId, quantity);
  }

  return (
    <button
      type="submit"
      // className={add}
      onClick={add}
      disabled={!available || loading}
      {...props}
    >
      {available ? "Add to Cart" : "Out of Stock"}
    </button>
  );
}
