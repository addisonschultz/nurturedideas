import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer"
import ReleaseCard from "../components/ReleaseCard"
import { theme } from "../theme/theme"
import * as utils from "../utils"
import moment from "moment"

const ReleasesPage = ({ data }) => {
  const artists = data.allArtistsJson.edges
  const nonArtistReleases = data.allReleasesJson.edges

  const allReleases = utils.getAllReleases(artists, nonArtistReleases)

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
          {allReleases
            .sort((a, b) => {
              return (
                moment(b.releaseDate, "DD.MM.YYYY") -
                moment(a.releaseDate, "DD.MM.YYYY")
              )
            })
            .map((release, index) => {
              return (
                <ReleaseCard
                  releaseName={release.releaseName}
                  releaseDate={release.releaseDate}
                  artistName={release.artistName}
                  image={release.image}
                  link={release.link}
                  key={index}
                />
              )
            })}
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
            releaseDate
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
          releaseDate
          artistName
        }
      }
    }
  }
`

export default ReleasesPage
