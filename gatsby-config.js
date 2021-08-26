require("dotenv").config();
module.exports = {
  siteMetadata: {
    siteUrl: `https://cafe-366.myshopify.com`,
  },

  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-shopify`,
      options: {
        apiKey: process.env.SHOPIFY_API_KEY,
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },

    // IMAGE
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        placeholder: `blurred`,
        breakpoints: [750, 1080, 1366, 1920],
        // forceBase64Format: ``, // valid formats: png,jpg,webp // don't work on OSX
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
  ],
};
