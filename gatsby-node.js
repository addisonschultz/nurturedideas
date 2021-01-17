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
              releaseName
              link
              preOrderLink
              releaseDescription
              releaseDate
              trackListing {
                trackDuration
                trackName
              }
            }
            soundcloud
            spotify
            twitter
          }
        }
      }
      allReleasesJson {
        edges {
          node {
            artistName
            image
            releaseName
            link
            preOrderLink
            releaseDescription
            releaseDate
            trackListing {
              trackDuration
              trackName
            }
          }
        }
      }
    }
  `)

  // Destructure data
  const artists = data.allArtistsJson.edges
  const nonArtistReleases = data.allReleasesJson.edges

  // Combine all releases
  const allReleases = utils.getAllReleases(artists, nonArtistReleases)

  // Create all artist pages
  artists.forEach(({ node }) => {
    const slug = utils.getUrlSlug(node.artistName)
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/artist.js`),
      context: { artistData: node, artistImage: node.image },
    })
  })

  // Create all release pages
  allReleases.forEach(release => {
    const slug = utils.getUrlSlug(release.releaseName)
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/release.js`),
      context: { releaseData: release, releaseImage: release.image },
    })
  })
}
