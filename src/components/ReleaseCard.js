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
            height: 360,
            width: 300,
            border: `5px solid ${theme.colors.white1}`,
            background: theme.colors.tertiary,
            margin: "0px 0px 50px 0px",
            overflow: "hidden",
          }}
        >
          <motion.div
            id={"release-card-first-line"}
            style={{
              height: 60,
              background: theme.colors.tertiary,
              borderBottom: `5px solid ${theme.colors.white1}`,
            }}
          >
            <motion.h5
              style={{
                color: theme.colors.white1,
                paddingTop: 7,
                paddingLeft: 15,
                paddingRight: 15,
                marginBottom: 0,
                fontFamily: theme.font.georgia,
                lineHeight: 1.2,
                textAlign: "left",
              }}
            >
              {artistName} - {releaseName}
            </motion.h5>
          </motion.div>
          <motion.img
            id={"artist-image"}
            style={{
              height: 300,
              objectFit: "cover",
              width: "100%",
              marginBottom: 0,
            }}
            src={image}
          ></motion.img>
        </motion.div>
      </a>
    </motion.div>
  )
}

export default ReleaseCard
