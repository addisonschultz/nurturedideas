import React from "react"
import { motion } from "framer-motion"
import Img from "gatsby-image"
import moment from "moment"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import TrackRow from "../components/TrackRow/TrackRow"

export default ({ pageContext, data }) => {
  const release = pageContext.releaseData

  const hasTracks =
    release.trackListing !== null && release.trackListing.length > 0

  const now = moment()
  const releaseDate = moment(release.releaseDate, "DD.MM.YYYY")
  const preOrder = releaseDate.isAfter(now)

  const releaseDateFormatted = moment(release.releaseDate, "DD.MM.YYYY").format(
    "DD.MM.YYYY"
  )

  return (
    <>
      <SEO title={release.releaseName} />
      <Navigation />
      <motion.div id={"release-template-container"}>
        <a
          href={pageContext.releaseData.link}
          target={"_blank"}
          rel="noreferrer"
          id={"release-template-image"}
        >
          <Img fluid={data.releaseImage.childImageSharp.fluid}></Img>
        </a>
        <motion.div id={"release-template-details"}>
          <motion.div>
            {preOrder ? (
              <a
                href={release.preOrderLink}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <div id={"release-template-pre-order"}>PRE ORDER NOW</div>
              </a>
            ) : null}
            <motion.h2 id={"release-name"}>{release.releaseName}</motion.h2>
            <motion.h5 id={"release-artist"}>{release.artistName}</motion.h5>
            <motion.h5 id={"release-description"}>
              {release.releaseDescription}
            </motion.h5>
            <motion.h5 id={"release-date"}>
              Release Date: {releaseDateFormatted}
            </motion.h5>
          </motion.div>
          {hasTracks ? (
            <motion.div id={"release-tracks"}>
              {release.trackListing.map((track, index) => {
                return <TrackRow track={track} key={index} index={index} />
              })}
            </motion.div>
          ) : null}
        </motion.div>
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
