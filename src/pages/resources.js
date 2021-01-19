import React, { useState } from "react"
import { motion } from "framer-motion"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import InterviewsSection from "../components/InterviewsSection/InterviewsSection"
import ArticlesSection from "../components/ArticlesSection/ArticlesSection"
import Footer from "../components/Footer/Footer"

const ResourcesPage = ({ data }) => {
  const interviews = data.allMarkdownRemark.edges

  const [resource, setResource] = useState("interviews")

  const selectorVariants = {
    initial: {
      color: "#111",
    },
    selected: {
      color: "#0d5c3e",
    },
  }

  return (
    <>
      <SEO title="Resources" />
      <Navigation />
      <motion.div id={"resources-container"}>
        <motion.div id={"resources-selector-container"}>
          <motion.h3
            className={"header"}
            variants={selectorVariants}
            initial={"initial"}
            animate={resource === "interviews" ? "selected" : "initial"}
            onClick={() => setResource("interviews")}
          >
            Interviews
          </motion.h3>
          <motion.h3
            className={"header"}
            variants={selectorVariants}
            initial={"initial"}
            animate={resource === "articles" ? "selected" : "initial"}
            onClick={() => setResource("articles")}
          >
            Articles
          </motion.h3>
        </motion.div>
        {resource === "interviews" ? (
          <InterviewsSection interviews={interviews} />
        ) : (
          <ArticlesSection />
        )}
      </motion.div>
      <Footer />
    </>
  )
}

export default ResourcesPage

export const query = graphql`
  query Interviews {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            interviewName
            interviewReleaseDate
          }
        }
      }
    }
  }
`
