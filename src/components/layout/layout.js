import React from "react"
import PropTypes from "prop-types"
import { AnimateSharedLayout } from "framer-motion"

import "../../css/layout.css"
import "../../css/typography.css"
import "../../css/desktop.css"
import "../../css/mobile.css"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#fff",
        textAlign: "center",
        position: "relative",
      }}
    >
      <AnimateSharedLayout>
        <main>
          <div id={"page-container"}>{children}</div>
        </main>
      </AnimateSharedLayout>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
