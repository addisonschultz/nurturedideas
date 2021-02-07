import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"
import Img from "gatsby-image"
import moment from "moment"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import TrackRow from "../components/TrackRow/TrackRow"
import Button from "../components/Button/Button"

import * as utils from "../utils"

export default ({ pageContext }) => {
  const release = pageContext.releaseData

  const hasMultipleImages = release.releaseImages.length > 1

  const hasTracks =
    release.trackListing !== null && release.trackListing.length > 0

  const now = moment()
  const releaseDate = moment(release.releaseDate, "DD.MM.YYYY")
  const preOrder = releaseDate.isAfter(now) && release.preOrderLink !== ""

  const releaseDateFormatted = moment(release.releaseDate, "DD.MM.YYYY").format(
    "MMMM Do, YYYY"
  )

  const layoutId = utils.getUrlSlug(release.releaseName) + "-card-image"

  const [releaseHovered, setReleaseHovered] = useState(false)
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, release.releaseImages.length, page)

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  const carouselVariants = {
    enter: () => {
      return {
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: () => {
      return {
        zIndex: 0,
        opacity: 0,
      }
    },
  }

  const controlVariants = {
    initial: { backgroundColor: "#000" },
    hover: { backgroundColor: "#111" },
  }

  const transition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  }

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
          id={"release-carousel-container"}
          layoutId={layoutId}
          onHoverStart={() => setReleaseHovered(true)}
          onHoverEnd={() => setReleaseHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              src={`../${release.releaseImages[imageIndex].releaseImage}`}
              variants={carouselVariants}
              id={"release-image"}
              initial="enter"
              animate="center"
              exit="exit"
              key={page}
              custom={direction}
              transition={transition}
            ></motion.img>
          </AnimatePresence>
          {hasMultipleImages ? (
            <motion.div
              id={"release-carousel-controls"}
              initial={{ opacity: 0 }}
              animate={{ opacity: releaseHovered ? 1 : 0 }}
            >
              <motion.div
                id={"release-carousel-back"}
                onClick={() => paginate(-1)}
                variants={controlVariants}
                initial={"initial"}
                whileHover={"hover"}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                    fill="#fff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </motion.div>
              <motion.div
                id={"release-carousel-forward"}
                onClick={() => paginate(1)}
                variants={controlVariants}
                initial={"initial"}
                whileHover={"hover"}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="#fff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </motion.div>
            </motion.div>
          ) : null}
        </motion.div>
        <motion.div
          id={"release-template-details"}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <motion.div>
            <motion.h2 id={"release-name"}>{release.releaseName}</motion.h2>
            <motion.h5 id={"release-artist"}>{release.artistName}</motion.h5>
            <motion.h5 id={"release-date"}>
              Release Date: {releaseDateFormatted}
            </motion.h5>
            <motion.div id={"release-template-order-buttons"}>
              <Button
                text={preOrder ? "Pre Order Digital" : "Digital"}
                preOrder={preOrder}
                preOrderLink={release.preOrderLink}
                link={release.link}
              />
              {preOrder && (
                <Button text={preOrder ? "Pre Order Vinyl" : "Vinyl"} />
              )}
            </motion.div>
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
