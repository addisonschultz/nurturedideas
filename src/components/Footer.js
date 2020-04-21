import React from "react"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"

const Footer = () => {
  const now = new Date()
  const currentYear = now.getFullYear()

  return (
    <motion.div
      id={"footer-container"}
      style={{
        background: theme.colors.white0,
        height: 80,
        padding: "50px 10% 0px 10%",
      }}
    >
      {/* Footer Left Items */}
      <motion.div id={"footer-left-container"} style={{ float: "left" }}>
        <motion.h3
          id={"footer-copyright"}
          className={"footer-item"}
          style={{
            color: theme.colors.black0,
            fontFamily: theme.font.default,
            fontSize: theme.fontSize[2],
          }}
        >
          © {currentYear} Nurtured Ideas. All Rights Reserved
        </motion.h3>
      </motion.div>

      {/* Footer Right Items */}
      <motion.div id={"footer-right-container"} style={{ float: "right" }}>
        <motion.h3
          id={"footer-contact"}
          className={"footer-item"}
          style={{
            color: theme.colors.black0,
            fontFamily: theme.font.default,
            fontSize: theme.fontSize[2],
          }}
        >
          <a href="mailto:alistair@nurtured-ideas.com">
            alistair@nurtured-ideas.com
          </a>{" "}
          |{" "}
          <a href="mailto:jorge@nurtured-ideas.com">jorge@nurtured-ideas.com</a>
        </motion.h3>
      </motion.div>
    </motion.div>
  )
}

export default Footer
