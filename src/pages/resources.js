import React from "react"
import { motion } from "framer-motion"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

const ResourcesPage = () => {
  return (
    <>
      <SEO title="Resources" />
      <Navigation />
      <motion.div id={"resources-container"}></motion.div>
      <Footer />
    </>
  )
}
export default ResourcesPage
