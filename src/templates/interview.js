import React from "react"
import { motion } from "framer-motion"
import Img from "gatsby-image"
import moment from "moment"

// import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

export default ({ pageContext, data }) => {
  return (
    <>
      {/* <SEO title= /> */}
      <Navigation />
      <motion.div id={"interview-template-container"}></motion.div>
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
