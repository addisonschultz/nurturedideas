import React from "react"
import SEO from "../components/layout/seo"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

const ArtistsPage = () => {
  return (
    <>
      <SEO title="Releases" />
      <Navigation />
      <motion.div
        id={"artists-container"}
        style={{
          height: "100%",
          padding: "0px 10% 0px 10%",
          background: "red",
        }}
      >
        <motion.div
          id={"artists-content"}
          style={{
            width: "100%",
            height: "100%",
            background: theme.colors.white1,
          }}
        ></motion.div>
      </motion.div>
      <Footer />
    </>
  )
}

export default ArtistsPage
