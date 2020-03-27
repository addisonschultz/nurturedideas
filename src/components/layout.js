import React from "react"
import PropTypes from "prop-types"
import { MagicMotion } from "framer-motion"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000",
        textAlign: "center",
      }}
    >
      <MagicMotion>
        <main>{children}</main>
      </MagicMotion>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
