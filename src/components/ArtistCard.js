import React from "react"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"
import { Link } from "gatsby"
import spotifyWhite1 from "../svg/spotify-white1.svg"
import soundcloudWhite1 from "../svg/soundcloud-white1.svg"

const ArtistCard = ({ artistName, image, to, spotify, soundcloud }) => {
  return (
    <motion.div id={"artist-card-container"}>
      <motion.div
        style={{
          position: "relative",
          height: 345,
          width: 300,
          border: `5px solid ${theme.colors.white1}`,
          background: theme.colors.tertiary,
          margin: "0px 0px 50px 0px",
          overflow: "hidden",
        }}
      >
        <Link to={to}>
          <motion.img
            id={"artist-image"}
            style={{
              height: 300,
              width: 300,
              objectFit: "cover",
              borderBottom: `5px solid ${theme.colors.white1}`,
            }}
            src={image}
          ></motion.img>
        </Link>
        <motion.div
          id={"artist-card-first-line"}
          style={{
            position: "absolute",
            top: -5,
            right: -5,
            height: 40,
            width: 300,
            background: theme.colors.tertiary,
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
            {artistName}
          </motion.h5>
        </motion.div>
        <motion.div
          id={"streaming-service-container"}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <a href={spotify} target={"_blank"} rel="noopener noreferrer">
            <motion.div
              id={"spotify-link"}
              style={{
                height: 35,
                width: 35,
                margin: 0,
                display: "flex",
              }}
            >
              <motion.img
                src={spotifyWhite1}
                style={{
                  height: 20,
                  width: 20,
                  margin: "auto auto",
                }}
              ></motion.img>
            </motion.div>
          </a>
          <a href={soundcloud} target={"_blank"} rel="noopener noreferrer">
            <motion.div
              id={"soundcloud-link"}
              style={{
                height: 35,
                width: 35,
                margin: 0,
                display: "flex",
              }}
            >
              <motion.img
                src={soundcloudWhite1}
                style={{
                  height: 20,
                  width: 20,
                  margin: "auto auto",
                }}
              ></motion.img>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ArtistCard