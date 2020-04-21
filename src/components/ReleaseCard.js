import React from "react"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"

const ReleaseCard = ({ releaseName, artistName, image, link }) => {
  return (
    <motion.div id={"release-card-container"}>
      <a href={link} target={"_blank"} rel="noopener noreferrer">
        <motion.div
          style={{
            position: "relative",
            height: 340,
            width: 300,
            border: `5px solid ${theme.colors.white1}`,
            background: theme.colors.secondary,
            margin: "0px 0px 50px 0px",
            overflow: "hidden",
          }}
        >
          <motion.img
            id={"artist-image"}
            style={{
              borderBottom: `5px solid ${theme.colors.white1}`,
              width: "100%",
            }}
            src={image}
          ></motion.img>
          <motion.div
            id={"release-card-first-line"}
            style={{
              position: "absolute",
              top: -5,
              right: -5,
              height: 40,
              width: 300,
              background: theme.colors.secondary,
              border: `5px solid ${theme.colors.white1}`,
            }}
          >
            <motion.h5
              style={{
                color: theme.colors.white1,
                paddingTop: 7,
                paddingLeft: 15,
                fontFamily: theme.font.georgia,
                textAlign: "left",
              }}
            >
              {artistName} - {releaseName}
            </motion.h5>
          </motion.div>
          <motion.div
            id={"release-card-third-line"}
            style={{
              position: "absolute",
              top: -5,
              right: -5,
              height: 300,
              width: 300,
              border: `5px solid ${theme.colors.white1}`,
            }}
          ></motion.div>
        </motion.div>
      </a>
    </motion.div>
  )
}

export default ReleaseCard
