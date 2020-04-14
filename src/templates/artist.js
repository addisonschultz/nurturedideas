import React from "react"
// import { motion } from "framer-motion"
// import { theme } from "../theme/theme"

export default ({ pageContext }) => {
  console.log(pageContext)

  return <>{JSON.stringify(pageContext)}</>
}
