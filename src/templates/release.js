import React from "react"
import SEO from "../components/layout/seo"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer"

export default ({ pageContext }) => {
  return (
    <>
      <SEO title="Home" />
      <motion.div
        id={"release-container"}
        style={{
          height: "auto",
          backgroundColor: theme.colors.tertiary,
        }}
      >
        <Navigation />
      </motion.div>

      <Footer />
    </>
  )
}
