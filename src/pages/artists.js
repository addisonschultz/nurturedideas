import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer"
import ArtistCard from "../components/ArtistCard/ArtistCard"

const ArtistsPage = ({ data }) => {
  const artists = data.allArtistsJson.edges
  const allImages = data.allFile.edges

  // Reduce artists to include sharp images
  const allArtistsAndImages = artists.reduce((prev, curr) => {
    const sharpImage = allImages.find(image => {
      return image.node.relativePath === curr.node.image
    })
    return [
      ...prev,
      {
        ...curr,
        sharpImage: sharpImage,
      },
    ]
  }, [])

  return (
    <>
      <SEO title="Artists" />
      <Navigation />
      <motion.div id={"artists-container"}>
        {allArtistsAndImages.map((artist, index) => {
          return <ArtistCard artist={artist} key={index} />
        })}
      </motion.div>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
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
    allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`

export default ArtistsPage
