import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import moment from "moment"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import ReleaseCard from "../components/ReleaseCard/ReleaseCard"

import * as utils from "../utils"

import { containerVariants, cardVariants } from "../variants/variants"

const ReleasesPage = ({ data }) => {
  const artists = data.allArtistsJson.edges
  const nonArtistReleases = data.allReleasesJson.edges
  const allImages = data.allFile.edges
  const allReleases = utils.getAllReleases(artists, nonArtistReleases)

  // Reduce releases to include sharp images
  const allReleasesAndImages = allReleases.reduce((prev, curr) => {
    const sharpImage = allImages.find(image => {
      return image.node.relativePath === curr.releaseImages[0].releaseImage
    })
    return [
      ...prev,
      {
        ...curr,
        sharpImage: sharpImage,
      },
    ]
  }, [])

  console.log(allReleasesAndImages)
  return (
    <>
      <SEO title="Releases" />
      <Navigation />
      <motion.h3 className={"releases-header header"}>Releases</motion.h3>
      <motion.div
        id={"releases-container"}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {allReleasesAndImages
          .sort((a, b) => {
            return (
              moment(b.releaseDate, "DD.MM.YYYY") -
              moment(a.releaseDate, "DD.MM.YYYY")
            )
          })
          .map((release, index) => {
            return (
              <ReleaseCard
                release={release}
                key={index}
                variants={cardVariants}
              />
            )
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
          releases {
            image
            releaseImages {
              releaseImage
            }
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
          releaseImages {
            releaseImage
          }
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

export default ReleasesPage
