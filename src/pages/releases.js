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
          {utils.getReleases(artists).map((artist, index) => {
            return (
              <ReleaseCard
                releaseName={artist.release.name}
                artistName={artist.artistName}
                image={artist.release.image}
                link={artist.release.link}
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
          bio
          website
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
`

export default ReleasesPage
