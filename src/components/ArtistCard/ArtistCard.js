import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"

import * as utils from "../../utils"

import "./artist-card.css"

const ArtistCard = ({ artist, variants }) => {
  const artistData = artist.node
  const image = artist.sharpImage.node

  const layoutId = utils.getUrlSlug(artist.node.artistName) + "-card-image"

  return (
    <Link to={`/${utils.getUrlSlug(artistData.artistName)}`}>
      <motion.div
        id={"artist-card-container"}
        variants={variants}
        whileHover={{ backgroundColor: "#E1EFE2" }}
      >
        <motion.div
          id={"image-container"}
          layoutId={layoutId}
          transition={{ duration: 0.3 }}
        >
          <Img
            fluid={image.childImageSharp.fluid}
            style={{ height: "200px", maxHeight: "200px" }}
          />
        </motion.div>
        <motion.h3 className={"artist-card-artist-name"}>
          {artistData.artistName}
        </motion.h3>
      </motion.div>
    </Link>
  )
}

export default ArtistCard
