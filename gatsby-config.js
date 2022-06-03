require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.evatellier.com",
    title: "Eva Tellier",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/eva-tellier-favicon.png",
      },
    },
  ],
};
