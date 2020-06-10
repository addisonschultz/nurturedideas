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
      <a
        href={href}
        id={"social-link-container"}
        target={"_blank"}
        rel="noopener noreferrer"
        style={{ height: "100%" }}
      >
        <motion.div
          id={"social-link"}
          variants={variants}
          initial={"default"}
          whileHover={"hover"}
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div style={{ margin: "auto auto" }}>
            <motion.img
              src={iconSrc}
              style={{ height: 20, marginBottom: 10 }}
            ></motion.img>
            <AnimatePresence>
              <motion.h5
                variants={textVariants}
                initial={"default"}
                style={{
                  color: theme.colors.black0,
                  lineHeight: 1,
                  fontFamily: theme.font.sharpeBlack,
                  marginBottom: 0,
                }}
              >
                {text}
              </motion.h5>
            </AnimatePresence>
          </div>
        </motion.div>
      </a>
    </>
  )
}

export default SocialLink
