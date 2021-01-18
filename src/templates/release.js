import React from "react"
import { motion } from "framer-motion"
import Img from "gatsby-image"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import TrackRow from "../components/TrackRow/TrackRow"

export default ({ pageContext, data }) => {
  const release = pageContext.releaseData

  const hasTracks =
    release.trackListing !== null && release.trackListing.length > 0

  return (
    <>
      <SEO title="Home" />
      <Navigation />
      <motion.div id={"release-template-container"}>
        <Img fluid={data.releaseImage.childImageSharp.fluid}></Img>
        <motion.div id={"release-template-details"}>
          <motion.h2 id={"release-name"}>{release.releaseName}</motion.h2>
          <motion.h5 id={"release-artist"}>{release.artistName}</motion.h5>
          <motion.h5 id={"release-description"}>
            {release.releaseDescription}
          </motion.h5>
        </motion.div>
        {hasTracks ? (
          <motion.div id={"release-tracks"}>
            {release.trackListing.map((track, index) => {
              return <TrackRow track={track} key={index} index={index} />
            })}
          </motion.div>
        ) : null}
        <motion.div id={"release-options"}></motion.div>
      </motion.div>
      <Footer />
    </>
  )
}

export const data = graphql`
  query ReleaseImage($releaseImage: String!) {
    releaseImage: file(relativePath: { eq: $releaseImage }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
