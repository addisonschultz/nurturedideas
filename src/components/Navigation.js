import React from "react"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <motion.div
      id={"navigation-container"}
      style={{
        background: theme.colors.primary,
        height: 60,
        padding: "10px 10% 0px 10%",
      }}
    >
      {/* Navigation Left Items */}
      <motion.div id={"navigation-left-container"} style={{ float: "left" }}>
        <Link to={"/"}>
          <motion.h3
            id={"navigation-home"}
            className={"navigation-item"}
            style={{
              color: theme.colors.white1,
              fontFamily: theme.font.sharpeBlackItalic,
              fontSize: theme.fontSize[6],
            }}
          >
            Nurtured{" "}
            <span style={{ fontFamily: theme.font.sharpeBlack }}>Ideas</span>
          </motion.h3>
        </Link>
      </motion.div>

      {/* Navigation Right Items */}
      <motion.div
        id={"navigation-right-container"}
        style={{ float: "right", display: "flex", paddingTop: 10 }}
      >
        <Link to={"/artists"}>
          <motion.h3
            id={"navigation-artists"}
            className={"navigation-item"}
            style={{
              color: theme.colors.white1,
              fontFamily: theme.font.default,
              fontSize: theme.fontSize[4],
            }}
          >
            Artists
          </motion.h3>
        </Link>
        <Link to={"/releases"}>
          <motion.h3
            id={"navigation-releases"}
            className={"navigation-item"}
            style={{
              color: theme.colors.white1,
              fontFamily: theme.font.default,
              fontSize: theme.fontSize[4],
              paddingLeft: 10,
            }}
          >
            Releases
          </motion.h3>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Navigation
