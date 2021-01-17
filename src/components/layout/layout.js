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
        backgroundColor: "red",
        textAlign: "center",
        position: "relative",
        // display: "flex",
        // flexDirection: "column",
      }}
    >
      <main>
        <div id={"page-container"}>{children}</div>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
