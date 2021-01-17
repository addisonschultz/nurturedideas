import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./release-card.css"

import * as utils from "../../utils"

const ReleaseCard = ({ release }) => {
  const image = release.sharpImage.node

  console.log(release)

  return (
    <Link to={utils.getUrlSlug(release.releaseName)}>
      <motion.div id={"release-card-container"}>
        <Img
          fluid={image.childImageSharp.fluid}
          style={{ height: "200px", maxHeight: "200px" }}
        />
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
