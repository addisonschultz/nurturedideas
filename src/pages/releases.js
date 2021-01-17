import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import moment from "moment"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer"
import ReleaseCard from "../components/ReleaseCard/ReleaseCard"

import * as utils from "../utils"

const ReleasesPage = ({ data }) => {
  const artists = data.allArtistsJson.edges
  const nonArtistReleases = data.allReleasesJson.edges

  const allReleases = utils.getAllReleases(artists, nonArtistReleases)

  return (
    <>
      <SEO title="Releases" />
      <Navigation />
      <motion.div id={"releases-container"}>
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
