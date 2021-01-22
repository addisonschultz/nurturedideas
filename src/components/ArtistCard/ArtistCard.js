import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"

import * as utils from "../../utils"

import spotifyGreen from "../../svg/spotify-green.svg"
import soundcloudGreen from "../../svg/soundcloud-green.svg"

import "./artist-card.css"

const ArtistCard = ({ artist, variants }) => {
  const artistData = artist.node
  const image = artist.sharpImage.node

  const layoutId = utils.getUrlSlug(artist.node.artistName) + "-card-image"

  return (
    <motion.div
      id={"artist-card-container"}
      variants={variants}
      whileHover={{ backgroundColor: "#E1EFE2" }}
    >
      <Link to={`/${utils.getUrlSlug(artistData.artistName)}`}>
        <motion.div id={"image-conatiner"} layoutId={layoutId}>
          <Img
            fluid={image.childImageSharp.fluid}
            style={{ height: "200px", maxHeight: "200px" }}
          />
        </motion.div>
      </Link>
      <motion.h3 className={"artist-card-artist-name"}>
        {artistData.artistName}
      </motion.h3>
      <motion.div className={"music-link-container"}>
        <a
          href={artistData.spotify}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <motion.div id={"spotify-link"} className={"icon-container"}>
            <motion.img src={spotifyGreen} className={"icon"}></motion.img>
          </motion.div>
        </a>
        <a
          href={artistData.soundcloud}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <motion.div id={"soundcloud-link"} className={"icon-container"}>
            <motion.img src={soundcloudGreen} className={"icon"}></motion.img>
          </motion.div>
        </a>
      </motion.div>
    </motion.div>
  )
}

export default ArtistCard
