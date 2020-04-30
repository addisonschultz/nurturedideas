import React from "react"
import { motion } from "framer-motion"

const HeroYoutube = ({ youtubeId }) => {
  return (
    <motion.div id={"hero-video"}>
      <iframe
        width="100%"
        height="700"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    </motion.div>
  )
}

export default HeroYoutube
