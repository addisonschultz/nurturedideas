module.exports = {
  siteMetadata: {
    title: `Nurtured Ideas`,
    description: `Nurtured artists.`,
    author: `Addison Schultz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
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
        path: `./src/metadata/site.json`,
      },
    },
    // Store src/artists in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "artists",
        path: `./src/artists/`,
      },
    },
    // Store src/releases in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "releases",
        path: `./src/releases/`,
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
