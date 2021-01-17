const utils = require("./src/utils")

exports.createPages = async function({ actions, graphql }) {
  // Query for all data
  const { data } = await graphql(`
    query GetAllArtists {
      allArtistsJson {
        edges {
          node {
            artistName
            bio
            website
            facebook
            id
            image
            instagram
            releases {
              image
              link
              releaseName
              releaseDate
            }
            soundcloud
            spotify
            twitter
          }
        }
      }
    }
  `)

  // Create all artist pages
  data.allArtistsJson.edges.forEach(({ node }) => {
    const slug = utils.getArtistSlug(node.artistName)
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/artist.js`),
      context: { artistData: node, artistImage: node.image },
    })
  })

  // Create all release pages
}
