import React from "react"
import { motion } from "framer-motion"
import { graphql } from "gatsby"
// import Img from "gatsby-image"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

export default ({ pageContext, data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <SEO title={frontmatter.interviewName} />
      <Navigation />
      <motion.div id={"interview-template-container"}>
        <div className="blog-post">
          <h1>{frontmatter.interviewName}</h1>
          <h2>{frontmatter.interviewReleaseDate}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </motion.div>
      <Footer />
    </>
  )
}

export const data = graphql`
  query Interview($interviewName: String!) {
    markdownRemark(frontmatter: { interviewName: { eq: $interviewName } }) {
      frontmatter {
        interviewReleaseDate
        interviewName
      }
      html
    }
  }
`
