import React from "react"
import { motion } from "framer-motion"

import ArticleCard from "../ArticleCard/ArticleCard"

import { containerVariants, cardVariants } from "../../variants/variants"

import "./articles-section.css"

const ArticlesSection = ({ articles }) => {
  return (
    <>
      <motion.p id={"interview-section-description"}>
        Check out some recent articles we've curated that speak to the brand of
        Nurtured Ideas.
      </motion.p>
      <motion.div
        id={"articles-section-container"}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {articles.map((article, index) => {
          return (
            <ArticleCard
              article={article}
              key={index}
              variants={cardVariants}
            />
          )
        })}
      </motion.div>
    </>
  )
}

export default ArticlesSection
