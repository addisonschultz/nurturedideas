import React from "react"
import SEO from "../components/layout/seo"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"
import Navigation from "../components/Navigation"

export default ({ pageContext }) => {
  console.log(pageContext)

  return (
    <>
      <SEO title="Home" />
      <Navigation />
      <motion.div
        id={"artist-container"}
        style={{
          height: "100vh",
          padding: "0px 10% 0px 10%",
          background: "red",
        }}
      >
        <motion.div
          id={"artist-content"}
          style={{
            width: "100%",
            height: "100vh",
            background: theme.colors.white1,
          }}
        ></motion.div>
      </motion.div>
    </>
  )
}
