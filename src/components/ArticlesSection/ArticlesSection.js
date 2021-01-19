import React from "react"
import { motion } from "framer-motion"

import ArticleCard from "../ArticleCard/ArticleCard"

import "./articles-section.css"

const ArticlesSection = ({ articles }) => {
  return (
    <>
      <motion.p id={"interview-section-description"}>
        Check out some recent articles we've curated that speak to the brand of
        Nurtured Ideas.
      </motion.p>
      <motion.div id={"articles-section-container"}>
        {articles.map((article, index) => {
          return <ArticleCard article={article} key={index} />
        })}
      </motion.div>
    </>
  )
}

export default ArticlesSection
