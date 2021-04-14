module.exports = {
  siteMetadata: {
    title: `Nurtured Ideas`,
    description: `Nurturing artists with nurtured ideas.`,
    author: `Addison Schultz`,
    image: "/images/nurtured-ideas.png",
    url: "https://nurtured-ideas.com",
    twitterUsername: "@nurturedideas",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    // Store src/images in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    /**
     * Add all images from static to the filesystem
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `staticImages`,
        path: `${__dirname}/static`,
      },
    },
    // Store src/metadata in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "metadata",
        path: `${__dirname}/src/metadata/site.json`,
      },
    },
    // Store src/artists in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "artists",
        path: `${__dirname}/src/artists/`,
      },
    },
    // Store src/releases in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "releases",
        path: `${__dirname}/src/releases/`,
      },
    },
    // Store src/interviews in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "interviews",
        path: `${__dirname}/src/interviews`,
      },
    },
    // Store src/articles in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "articles",
        path: `${__dirname}/src/articles`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nurtured-ideas`,
        short_name: `nurtured-ideas`,
        start_url: `/`,
        background_color: `#1d5e36`,
        theme_color: `#1d5e36`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
