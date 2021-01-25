import React from "react"
import { motion } from "framer-motion"

import "./footer.css"

import { theme } from "../../theme/theme"

const Footer = () => {
  const now = new Date()
  const currentYear = now.getFullYear()

  return (
    <motion.div id={"footer-container"}>
      {/* Footer Left Items */}
      <motion.div id={"footer-left-container"}>
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
      <motion.div id={"footer-right-container"}>
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
            alistair@nurtured-ideas.com <span>|</span>
          </a>{" "}
          <a href="mailto:jorge@nurtured-ideas.com">jorge@nurtured-ideas.com</a>
        </motion.h3>
      </motion.div>
    </motion.div>
  )
}

export default Footer
