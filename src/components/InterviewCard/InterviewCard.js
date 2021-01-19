import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import logo from "../../images/logo.png"

import "./interview-card.css"

const ArtistCard = ({ interview }) => {
  const interviewName = interview.node.frontmatter.interviewName

  return (
    <motion.div id={"interview-card-container"}>
      <motion.img src={logo} id={"interview-card-logo"} />
      <motion.h5 id={"interview-card-title"}>{interviewName}</motion.h5>
    </motion.div>
  )
}

export default ArtistCard
