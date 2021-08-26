import React from "react";
// shopify
import { getShopifyImage } from "gatsby-source-shopify";
// gatsby
import { GatsbyImage } from "gatsby-plugin-image";

export function ProductImage({ title, images }) {
  console.log("title", title);
  console.log("images.length", images.length);
  console.log("images[0]", images[0]);
  // return null;
  if (images[0].product !== undefined) {
    return (
      <div>
        <GatsbyImage
          alt="truc"
          image={images[0].product.featuredImage.gatsbyImageData}
        />
      </div>
    );
  }
  return null;
}
