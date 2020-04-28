import React from "react"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"
import { Link } from "gatsby"
import bamboo from "../svg/bamboo.svg"
import flower from "../svg/flower.svg"
import anthurium from "../svg/anthurium.svg"
import logo from "../images/logo.png"
import lotus from "../svg/lotus.svg"

const Navigation = () => {
  return (
    <motion.div
      id={"navigation-container"}
      style={{
        background: theme.colors.white0,
        height: 80,
        padding: "15px 10% 0px 10%",
      }}
    >
      {/* Navigation Left Items */}
      <motion.div
        id={"navigation-left-container"}
        style={{
          float: "left",
          display: "flex",
          alignItems: "center",
          height: "auto",
          paddingTop: 5,
        }}
      >
        <motion.img
          src={logo}
          style={{ height: 40, marginRight: 10, marginBottom: 0 }}
        ></motion.img>
        <Link to={"/"}>
          <motion.h3
            id={"navigation-home"}
            className={"navigation-item"}
            style={{
              color: theme.colors.black0,
              fontFamily: theme.font.sharpeBlack,
              fontSize: theme.fontSize[6],
              margin: 0,
            }}
          >
            Nurtured Ideas
          </motion.h3>
        </Link>
      </motion.div>

      {/* Navigation Right Items */}
      <motion.div
        id={"navigation-right-container"}
        style={{ float: "right", display: "flex", paddingTop: 20 }}
      >
        <Link to={"/artists"} activeStyle={{ color: theme.colors.primary }}>
          <motion.h3
            id={"navigation-artists"}
            className={"navigation-item"}
            style={{
              fontFamily: theme.font.default,
              fontWeight: 900,
              fontSize: theme.fontSize[4],
            }}
          >
            ARTISTS
          </motion.h3>
        </Link>
        <Link to={"/releases"} activeStyle={{ color: theme.colors.primary }}>
          <motion.h3
            id={"navigation-releases"}
            className={"navigation-item"}
            style={{
              fontFamily: theme.font.default,
              fontSize: theme.fontSize[4],
              fontWeight: 900,
              paddingLeft: 10,
            }}
          >
            RELEASES
          </motion.h3>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Navigation
