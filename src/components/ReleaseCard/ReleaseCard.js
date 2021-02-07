import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"
import moment from "moment"

import "./release-card.css"

import * as utils from "../../utils"

const ReleaseCard = ({ release, variants }) => {
  const image = release.sharpImage.node

  const now = moment()
  const releaseDate = moment(release.releaseDate, "DD.MM.YYYY")
  const preOrder = releaseDate.isAfter(now) && release.preOrderLink !== ""

  const layoutId = utils.getUrlSlug(release.releaseName) + "-card-image"

  return (
    <Link to={`/${utils.getUrlSlug(release.releaseName)}`}>
      <motion.div
        id={"release-card-container"}
        whileHover={{ backgroundColor: "#E1EFE2" }}
        variants={variants}
      >
        {preOrder ? (
          <motion.div id={"pre-order-banner"}>
            <motion.h5 id={"pre-order-text"}>Pre Order</motion.h5>
          </motion.div>
        ) : null}
        <motion.div layoutId={layoutId}>
          <Img
            fluid={image.childImageSharp.fluid}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "5px 5px 0px 0px",
            }}
          />
        </motion.div>
        <motion.p className={"release-card-release-name"}>
          {release.releaseName}
        </motion.p>
        <motion.p className={"release-card-artist-name"}>
          {release.artistName}
        </motion.p>
      </motion.div>
    </Link>
  )
}

export default ReleaseCard
