import React from "react"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"

const Footer = () => {
  return (
    <motion.div
      id={"footer-container"}
      style={{
        background: theme.colors.primary,
        height: 180,
        padding: "0px 10% 0px 10%",
      }}
    ></motion.div>
  )
}

export default Footer
