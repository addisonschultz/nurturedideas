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
    >
      {/* Footer Left Items */}
      <motion.div id={"footer-left-container"} style={{ float: "left" }}>
        <motion.h3
          id={"footer-copyright"}
          className={"footer-item"}
          style={{
            color: theme.colors.white1,
            fontFamily: theme.font.default,
            fontSize: theme.fontSize[2],
          }}
        >
          © 2020 Nurtured Ideas. All Rights Reserved
        </motion.h3>
      </motion.div>

      {/* Footer Right Items */}
      <motion.div id={"footer-right-container"} style={{ float: "right" }}>
        <motion.h3
          id={"footer-contact"}
          className={"footer-item"}
          style={{
            color: theme.colors.white1,
            fontFamily: theme.font.default,
            fontSize: theme.fontSize[2],
          }}
        >
          alistair@nurtured-ideas.com | jorge@nurtured-ideas.com
        </motion.h3>
      </motion.div>
    </motion.div>
  )
}

export default Footer
