import React from "react"
import { motion } from "framer-motion"

import "./track-row.css"

const TrackRow = ({ track, index }) => {
  const trackNumber = index + 1

  return (
    <motion.div
      id={"track-row-container"}
      whileHover={{ backgroundColor: "#eee" }}
    >
      <motion.h5 id={"track-title"}>
        {trackNumber}. {track.trackName}
      </motion.h5>
      <motion.h5 id={"track-duration"}>{track.trackDuration}</motion.h5>
    </motion.div>
  )
}

export default TrackRow
