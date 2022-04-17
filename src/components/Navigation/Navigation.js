import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import { theme } from "../../theme/theme"

import logo from "../../images/logo.png"

import "./navigation.css"

const Navigation = () => {
  const [modalOpen, setModalOpen] = React.useState(false)

  const modalVariants = {
    closed: {
      display: "none",
    },
    open: {
      display: "block",
    },
  }

  const handleLogoClick = () => {
    setModalOpen(true)
  }

  return (
    <motion.div
      id={"navigation-container"}
      style={{ background: theme.colors.white0 }}
    >
      <motion.div id={"navigation-header-container"}>
        <motion.img
          src={logo}
          id={"navigation-logo"}
        />
        <Link to={"/"}>
          <motion.h3 id={"navigation-header"}>Nurtured Ideas</motion.h3>
        </Link>
      </motion.div>
      <motion.div id={"navigation-links"}>
        <Link to={"/artists"} activeClassName={"navigation-active"}>
          <motion.h3
            className={"navigation-item"}
            whileHover={{ backgroundColor: "#E1EFE2" }}
          >
            Artists
          </motion.h3>
        </Link>
        <Link to={"/releases"} activeClassName={"navigation-active"}>
          <motion.h3
            className={"navigation-item"}
            whileHover={{ backgroundColor: "#E1EFE2" }}
          >
            Releases
          </motion.h3>
        </Link>
        <Link to={"/resources"} activeClassName={"navigation-active"}>
          <motion.h3
            className={"navigation-item"}
            whileHover={{ backgroundColor: "#E1EFE2" }}
          >
            Resources
          </motion.h3>
        </Link>
      </motion.div>
      <motion.div
        id={"modal-container"}
        variants={modalVariants}
        initial={"closed"}
        animate={modalOpen ? "open" : "closed"}
        onClick={() => setModalOpen(false)}
      >
        <motion.div id={"modal-content"}>
          <h2 className={"header"}>Thanks for stopping by!</h2>
          <h2 className={"header"}>- Alistair & Jorge</h2>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Navigation
