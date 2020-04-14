exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query GetAllArtists {
      allArtistsJson {
        edges {
          node {
            artistName
            bio
            facebook
            id
            image
            instagram
            releases {
              image
              link
              name
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
    const slug = node.artistName.replace(/ /g, "-").toLowerCase()
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/artist.js`),
      context: { artistData: node },
    })
  })
}
