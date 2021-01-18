import React from "react"
import { motion } from "framer-motion"
import Img from "gatsby-image"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

export default ({ pageContext, data }) => {
  const release = pageContext.releaseData

  console.log(release)

  return (
    <>
      <SEO title="Home" />
      <Navigation />
      <motion.div id={"release-template-container"}>
        <Img fluid={data.releaseImage.childImageSharp.fluid}></Img>
        <motion.div id={"release-template-details"}>
          <motion.h2 id={"release-name"}>{release.releaseName}</motion.h2>
          <motion.h5 id={"release-artist"}>{release.artistName}</motion.h5>
          <motion.h5 id={"release-description"}>
            {release.releaseDescription}
          </motion.h5>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  )
}

export const data = graphql`
  query ReleaseImage($releaseImage: String!) {
    releaseImage: file(relativePath: { eq: $releaseImage }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
