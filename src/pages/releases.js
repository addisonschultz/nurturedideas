import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import ReleaseCard from "../components/ReleaseCard"
import { theme } from "../theme/theme"
import * as utils from "../utils"

const ReleasesPage = ({ data }) => {
  const artists = data.allArtistsJson.edges
  const nonArtistReleases = data.allReleasesJson.edges

  return (
    <>
      <SEO title="Releases" />
      <motion.div
        id={"releases-container"}
        style={{
          height: "auto",
          background: theme.colors.tertiary,
        }}
      >
        <Navigation />
        <motion.div
          id={"releases-content"}
          style={{
            width: "100%",
            height: "auto",
            background: theme.colors.tertiary,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "50px 10% 50px 10%",
          }}
        >
          placeholder
          {utils.orderReleases(artists, nonArtistReleases)}
          {/* {utils.orderReleases(artists).map((artist, index) => {
            return (
              <ReleaseCard
                releaseName={artist.release.releaseName}
                artistName={artist.artistName}
                image={artist.release.image}
                link={artist.release.link}
                key={index}
              />
            )
          })}
          {nonArtistReleases.map((release, index) => {
            return (
              <ReleaseCard
                releaseName={release.node.releaseName}
                artistName={release.node.artistName}
                image={release.node.image}
                link={release.node.link}
                key={index}
              />
            )
          })} */}
        </motion.div>
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
            link
            releaseName
          }
        }
      }
    }
    allReleasesJson {
      edges {
        node {
          image
          link
          releaseName
          artistName
        }
      }
    }
  }
`

export default ReleasesPage
