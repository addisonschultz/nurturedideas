import React from "react"
import { motion } from "framer-motion"

const HeroVideo = ({ src }) => {
  return (
    <motion.div id={"hero-video"}>
      <video
        id={"video"}
        playsInline
        autoPlay
        muted
        loop
        style={{ width: "100%" }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </motion.div>
  )
}

export default HeroVideo
