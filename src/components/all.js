import React from "react";
// app
import { ProductImage } from "./product";
// gatsby
import { graphql, useStaticQuery } from "gatsby";

function AllProducts({ content }) {
  return (
    <ul>
      {content.map(elem => {
        if (elem !== undefined) {
          return (
            <div>
              <li key={elem.id}>{elem.title}</li>
              <div>
                {elem.priceRangeV2.minVariantPrice.amount}{" "}
                {elem.priceRangeV2.minVariantPrice.currencyCode}
              </div>
              <ProductImage title={elem.title} images={elem.images} />
              <div>{elem.description}</div>
            </div>
          );
        }
      })}
    </ul>
  );
}

export function AllContent() {
  const data = useStaticQuery(graphql`
    query {
      allShopifyCollection(sort: { order: ASC, fields: products }) {
        edges {
          node {
            id
            handle
            products {
              id
              handle
              priceRangeV2 {
                maxVariantPrice {
                  amount
                  currencyCode
                }
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              description
              title
              images {
                product {
                  featuredImage {
                    height
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <ul>
      {data.allShopifyCollection.edges.map(({ node }) => {
        return (
          <li key={node.id}>
            {node.handle}
            <AllProducts key={node.id} content={node.products} />
          </li>
        );
      })}
    </ul>
  );
}
