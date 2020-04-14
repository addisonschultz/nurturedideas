import React from "react"
import PropTypes from "prop-types"
import { MagicMotion } from "framer-motion"

import "../css/layout.css"
import "../css/typography.css"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
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
