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

  console.log(markdownRemark)

  return (
    <>
      <SEO title={frontmatter.interviewName} />
      <Navigation />
      <motion.div id={"interview-template-container"}>
        <h1 className={"header"}>{frontmatter.interviewName}</h1>
        <h4 id={"interview-date"}>{frontmatter.interviewReleaseDate}</h4>
        <div
          className="interview-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
