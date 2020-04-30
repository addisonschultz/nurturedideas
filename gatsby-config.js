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
    // Store src/metadata in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/metadata/`,
      },
    },
    // Store src/artists in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/artists/`,
      },
    },
    // Store src/releases in filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/releases/`,
      },
    },
    // Load google fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [``],
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
