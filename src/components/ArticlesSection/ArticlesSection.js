import React from "react"
import { motion } from "framer-motion"

import "./articles-section.css"

const ArticlesSection = () => {
  return (
    <>
      <motion.p id={"interview-section-description"}>
        Check out some recent articles we've curated that speak to the brand of
        Nurtured Ideas.
      </motion.p>
      <motion.div id={"articles-section-container"}></motion.div>
    </>
  )
}

export default ArticlesSection
