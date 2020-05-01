import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import ArtistCard from "../components/ArtistCard"
import { theme } from "../theme/theme"
import * as utils from "../utils"

const ArtistsPage = ({ data }) => {
  const artists = data.allArtistsJson.edges

  return (
    <>
      <SEO title="Artists" />
      <motion.div
        id={"artists-container"}
        style={{
          height: "auto",
          background: theme.colors.tertiary,
        }}
      >
        <Navigation />
        <motion.div
          id={"artists-content"}
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
          {artists.map((artist, index) => {
            return (
              <ArtistCard
                to={`/${utils.getArtistSlug(artist.node.artistName)}`}
                spotify={artist.node.spotify}
                soundcloud={artist.node.soundcloud}
                artistName={artist.node.artistName}
                image={artist.node.image}
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
            releaseName
          }
          soundcloud
          spotify
          twitter
        }
      }
    }
  }
`

export default ArtistsPage
