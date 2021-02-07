import React from "react"
import { motion } from "framer-motion"
import Img from "gatsby-image"
import moment from "moment"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import TrackRow from "../components/TrackRow/TrackRow"

import * as utils from "../utils"

export default ({ pageContext, data }) => {
  const release = pageContext.releaseData

  const hasTracks =
    release.trackListing !== null && release.trackListing.length > 0

  const now = moment()
  const releaseDate = moment(release.releaseDate, "DD.MM.YYYY")
  const preOrder = releaseDate.isAfter(now) && release.preOrderLink !== ""

  const releaseDateFormatted = moment(release.releaseDate, "DD.MM.YYYY").format(
    "MMMM Do, YYYY"
  )

  const layoutId = utils.getUrlSlug(release.releaseName) + "-card-image"

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
      },
    },
  }

  const trackContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        delayChildren: 1,
        staggerChildren: 0.1,
      },
    },
  }

  const trackVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
      <SEO title={release.releaseName} />
      <Navigation />
      <motion.div id={"release-template-container"}>
        <motion.div
          id={"release-image-container"}
          layoutId={layoutId}
          whileHover={{ opacity: 0.9 }}
        >
          <a
            href={pageContext.releaseData.link}
            target={"_blank"}
            rel="noreferrer"
            id={"release-template-image"}
          >
            <Img fluid={data.releaseImage.childImageSharp.fluid}></Img>
          </a>
        </motion.div>
        <motion.div
          id={"release-template-details"}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
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
            <motion.h5 id={"release-date"}>
              Release Date: {releaseDateFormatted}
            </motion.h5>
            <motion.h5 id={"release-description"}>
              {release.releaseDescription}
            </motion.h5>
          </motion.div>
        </motion.div>
        {hasTracks ? (
          <motion.div
            id={"release-template-tracks"}
            variants={trackContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {release.trackListing.map((track, index) => {
              return (
                <TrackRow
                  track={track}
                  key={index}
                  index={index}
                  variants={trackVariants}
                />
              )
            })}
          </motion.div>
        ) : null}
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
