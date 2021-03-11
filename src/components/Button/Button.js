import React from "react"
import { motion } from "framer-motion"

import "./button.css"

const Button = ({ text, preOrder, link, preOrderLink }) => {
  return (
    <a target="_blank" rel="noreferrer" href={preOrder ? preOrderLink : link}>
      <motion.div id={"button-container"}>
        <h5>{text}</h5>
      </motion.div>
    </a>
  )
}

export default Button
