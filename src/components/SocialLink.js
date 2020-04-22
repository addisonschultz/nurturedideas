import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { theme } from "../theme/theme"

const SocialLink = ({
  iconSrc,
  text,
  href,
  background,
  hoverBackground = theme.colors.white0,
}) => {
  const variants = {
    default: {
      background: background,
    },
    hover: {
      background: hoverBackground,
    },
  }

  const textVariants = {
    default: { opacity: 0 },
    hover: { opacity: 1 },
  }

  return (
    <>
      <a href={href} target={"_blank"} rel="noopener noreferrer">
        <motion.div
          id={"social-link"}
          variants={variants}
          initial={"default"}
          whileHover={"hover"}
          style={{
            height: 116.5,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            paddingTop: 50,
          }}
        >
          <motion.img
            src={iconSrc}
            style={{ height: 20, margin: "auto auto" }}
          ></motion.img>
          <AnimatePresence>
            <motion.h5
              variants={textVariants}
              initial={"default"}
              style={{
                color: theme.colors.black0,
                lineHeight: 1,
                fontFamily: theme.font.sharpeBlack,
                margin: "auto auto",
              }}
            >
              {text}
            </motion.h5>
          </AnimatePresence>
        </motion.div>
      </a>
    </>
  )
}

export default SocialLink
