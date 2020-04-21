import React from "react"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"

const NewsletterForm = ({ namePlaceholder, emailPlaceholder }) => {
  const variants = {
    default: {},
    hover: {},
    disabled: {},
  }
  const buttonVariants = {
    default: {
      backgroundColor: theme.colors.secondary,
      border: `2px solid ${theme.colors.white0}`,
      color: theme.colors.white0,
      opacity: 1,
      cursor: "pointer",
    },
    hover: {
      backgroundColor: theme.colors.white0,
      color: theme.colors.secondary,
    },
    disabled: { opacity: 0.5, userSelect: "none", cursor: "initial" },
  }

  const [checkmark, setCheckmark] = React.useState(false)

  return (
    <motion.div
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
      variants={variants}
      intial="default"
    >
      <form name={"Newsletter"}>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
        >
          <div
            style={{
              height: 10,
              width: 10,
              borderRadius: "100%",
              backgroundColor: theme.colors.white0,
              marginRight: 10,
            }}
          ></div>
          <motion.input
            className={"newsletter-input"}
            placeholder={namePlaceholder}
          ></motion.input>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          <div
            style={{
              height: 10,
              width: 10,
              marginRight: 10,
              borderBottom: `10px solid ${theme.colors.white0}`,
              borderLeft: "10px solid transparent",
            }}
          ></div>
          <motion.input
            className={"newsletter-input"}
            placeholder={emailPlaceholder}
          ></motion.input>
        </div>
        <div style={{ float: "left", position: "relative", marginBottom: 20 }}>
          <label class="checkbox">
            <input type="checkbox" onChange={() => setCheckmark(!checkmark)} />
            <span class="overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
          </label>
          <motion.h3
            style={{
              color: theme.colors.white1,
              fontFamily: theme.font.georgia,
              fontWeight: 400,
              fontSize: theme.fontSize[2],
              paddingLeft: theme.spacing[6],
            }}
          >
            I accept the terms and conditions
          </motion.h3>
        </div>
        <motion.button
          id={"newsletter-submit-button"}
          variants={buttonVariants}
          initial={"default"}
          whileHover={checkmark ? "hover" : "disabled"}
          animate={checkmark ? "default" : "disabled"}
          transition={{ duration: 0.3 }}
          disabled={!checkmark}
          style={{
            width: "100%",
            padding: 10,
          }}
        >
          Subscribe
        </motion.button>
      </form>
    </motion.div>
  )
}

export default NewsletterForm
