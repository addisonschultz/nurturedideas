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
    // Store src/images in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Store src/artists in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/artists/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nurtured-ideas`,
        short_name: `nurtured-ideas`,
        start_url: `/`,
        background_color: `#ff8a8a`,
        theme_color: `#ff8a8a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
