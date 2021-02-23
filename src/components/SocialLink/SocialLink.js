import React from "react"
import { motion } from "framer-motion"

import "./social-link.css"

const SocialLink = ({ iconSrc, href }) => {
  return (
    <>
      <a
        href={href}
        target={"_blank"}
        rel="noopener noreferrer"
        id={"social-link"}
      >
        <motion.img src={iconSrc}></motion.img>
      </a>
    </>
  )
}

export default SocialLink
