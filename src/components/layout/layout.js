import React from "react"
import PropTypes from "prop-types"

import "../../css/layout.css"
import "../../css/typography.css"
import "../../css/desktop.css"
import "../../css/mobile.css"

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
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
