import React from "react"
import { motion } from "framer-motion"

import "./article-card.css"

const ArticleCard = ({ article }) => {
  return (
    <a href={""}>
      <motion.div
        id={"article-card-container"}
        whileHover={{ backgroundColor: "#E1EFE2" }}
      >
        <motion.h5 id={"article-card-title"}>{interviewName}</motion.h5>
      </motion.div>
    </a>
  )
}

export default ArticleCard
