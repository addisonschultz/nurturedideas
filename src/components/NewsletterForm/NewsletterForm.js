import React from "react"
import { motion } from "framer-motion"
import { theme } from "../../theme/theme"
import { Link } from "gatsby"

import "./newsletter-form.css"

const NewsletterForm = ({ namePlaceholder, emailPlaceholder }) => {
  const variants = {
    default: {},
    hover: {},
    disabled: {},
  }
  const buttonVariants = {
    default: {
      backgroundColor: theme.colors.tertiary,
      border: `2px solid ${theme.colors.white0}`,
      color: theme.colors.white0,
      opacity: 1,
      cursor: "pointer",
    },
    hover: {
      backgroundColor: theme.colors.white0,
      color: theme.colors.tertiary,
    },
    disabled: { opacity: 0.5, userSelect: "none", cursor: "initial" },
  }

  const [checkmark, setCheckmark] = React.useState(false)

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const [state, setState] = React.useState({
    fullName: "",
    email: "",
  })

  const [success, setSuccess] = React.useState(false)

  const handleChange = e => {
    const val = e.target.value
    const name = e.target.name

    setState(prevState => {
      return { ...prevState, [name]: val }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => setSuccess(true))
      .catch(error => alert(error))
  }

  return (
    <motion.div
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
      variants={variants}
      intial="default"
    >
      {success ? (
        <div>
          <motion.h5
            style={{
              fontFamily: theme.font.sharpeBlack,
              color: theme.colors.white0,
              textAlign: "left",
            }}
          >
            Thanks for subscribing!
          </motion.h5>
        </div>
      ) : (
        <form
          name={"Newsletter"}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
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
              onChange={handleChange}
              name={"fullName"}
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
              onChange={handleChange}
              name={"email"}
            ></motion.input>
          </div>
          <div
            style={{
              float: "left",
              position: "relative",
              marginBottom: 20,
            }}
          >
            <label className="checkbox" style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                onChange={() => setCheckmark(!checkmark)}
              />
              <span className="overlay">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
              I accept the{" "}
              <Link to={"/terms"} style={{ color: theme.colors.white1 }}>
                terms and conditions
              </Link>
            </motion.h3>
          </div>
          <motion.button
            id={"newsletter-submit-button"}
            type="submit"
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
      )}
    </motion.div>
  )
}

export default NewsletterForm
