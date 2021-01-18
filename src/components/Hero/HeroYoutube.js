import React from "react"
import { motion } from "framer-motion"

import "./hero.css"

const HeroYoutube = props => {
  const { youtubeId, index } = props

  return (
    <motion.div id={"hero-youtube"} {...props}>
      <iframe
        width="100%"
        height="550"
        src={`https://www.youtube.com/embed/${youtubeId}${
          index === 0 ? "?autoplay=1" : ""
        }`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        title="hero-youtube"
      ></iframe>
    </motion.div>
  )
}

export default HeroYoutube
