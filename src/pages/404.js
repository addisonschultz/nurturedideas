import React from "react"
import Navigation from "../components/Navigation/Navigation"
import SEO from "../components/layout/seo"
import nurturedIdeas from "../images/nurtured-ideas.png"

const NotFoundPage = () => (
  <>
    <Navigation />
    <SEO title="404: Not found" />
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ margin: "auto auto" }}>
        <img src={nurturedIdeas} style={{ height: 200, width: 200 }}></img>
        <h1 className={"header"}>We don't have a page for this yet!</h1>
      </div>
    </div>
  </>
)

export default NotFoundPage
