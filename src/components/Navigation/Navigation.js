import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import { theme } from "../../theme/theme"

import logo from "../../images/logo.png"

import "./navigation.css"

const Navigation = () => {
  return (
    <motion.div
      id={"navigation-container"}
      style={{ background: theme.colors.white0 }}
    >
      <motion.div id={"navigation-header-container"}>
        <motion.img src={logo} id={"navigation-logo"}></motion.img>
        <Link to={"/"}>
          <motion.h3 id={"navigation-header"}>Nurtured Ideas</motion.h3>
        </Link>
      </motion.div>
      <motion.div id={"navigation-links"}>
        <Link to={"/artists"} activeClassName={"navigation-active"}>
          <motion.h3 className={"navigation-item"}>Artists</motion.h3>
        </Link>
        <Link to={"/releases"} activeClassName={"navigation-active"}>
          <motion.h3 className={"navigation-item"}>Releases</motion.h3>
        </Link>
        <Link to={"/resources"} activeClassName={"navigation-active"}>
          <motion.h3 className={"navigation-item"}>Resources</motion.h3>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Navigation
