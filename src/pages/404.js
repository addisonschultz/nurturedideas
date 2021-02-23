import React from "react"
import Navigation from "../components/Navigation/Navigation"
import SEO from "../components/layout/seo"

const NotFoundPage = () => (
  <>
    <Navigation />
    <SEO title="404: Not found" />
    <div style={{ height: "100vh", display: "flex" }}>
      <h1 style={{ margin: "auto auto" }} className={"header"}>
        We don't have a page for this yet!
      </h1>
    </div>
  </>
)

export default NotFoundPage
