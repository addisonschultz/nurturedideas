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
            soundcloud
            spotify
            twitter
            appleMusic
            tiktok
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
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___interviewReleaseDate] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              interviewName
            }
          }
        }
      }
    }
  `)

  // Destructure data
  const artists = data.allArtistsJson.edges
  const nonArtistReleases = data.allReleasesJson.edges
  const interviews = data.allMarkdownRemark.edges

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

  // Create all interview pages
  interviews.forEach(({ node }) => {
    const slug = utils.getUrlSlug(node.frontmatter.interviewName)
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/interview.js`),
      context: {
        interviewName: node.frontmatter.interviewName,
      },
    })
  })
}
