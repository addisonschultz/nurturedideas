import React from "react"
import { motion } from "framer-motion"

import arrowUpRight from "../../svg/arrow-up-right.svg"

import "./article-card.css"

const ArticleCard = ({ article }) => {
  return (
    <a
      href={article.node.articleLink}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <motion.div
        id={"article-card-container"}
        whileHover={{ backgroundColor: "#E1EFE2" }}
      >
        <motion.img src={arrowUpRight} id={"article-card-arrow"} />
        <motion.h5 id={"article-card-title"}>
          {article.node.articleName}
        </motion.h5>
      </motion.div>
    </a>
  )
}

export default ArticleCard
