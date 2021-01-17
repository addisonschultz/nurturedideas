import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"

import * as utils from "../../utils"

import spotifyWhite1 from "../../svg/spotify-white1.svg"
import soundcloudWhite1 from "../../svg/soundcloud-white1.svg"

import "./artist-card.css"

const ArtistCard = ({ artist }) => {
  const artistData = artist.node
  const image = artist.sharpImage.node

  return (
    <motion.div id={"artist-card-container"}>
      <Link to={`/${utils.getArtistSlug(artistData.artistName)}`}>
        <Img
          fluid={image.childImageSharp.fluid}
          style={{ height: "200px", maxHeight: "200px" }}
        />
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
            <motion.img src={spotifyWhite1} className={"icon"}></motion.img>
          </motion.div>
        </a>
        <a
          href={artistData.soundcloud}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <motion.div id={"soundcloud-link"} className={"icon-container"}>
            <motion.img src={soundcloudWhite1} className={"icon"}></motion.img>
          </motion.div>
        </a>
      </motion.div>
    </motion.div>
  )
}

export default ArtistCard
