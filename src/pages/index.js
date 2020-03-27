import React from "react"

import SEO from "../components/seo"
import { motion } from "framer-motion"

const IndexPage = () => (
  <>
    <SEO title="Onepage" />
    <motion.div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <motion.div
        id={"color-ball"}
        magic
        magicId={"color-ball"}
        style={{
          margin: "auto auto",
          height: 130,
          width: 130,
          borderRadius: "100%",
          background: "#ff8a8a",
        }}
      />
    </motion.div>
  </>
)

export default IndexPage
