// import getArtistSlug from "./src/utils"
const utils = require("./src/utils")

exports.createPages = async function({ actions, graphql }) {
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
            }
            soundcloud
            spotify
            twitter
          }
        }
      }
    }
  `)
  data.allArtistsJson.edges.forEach(({ node }) => {
    const slug = utils.getArtistSlug(node.artistName)
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/artist.js`),
      context: { artistData: node },
    })
  })
}
