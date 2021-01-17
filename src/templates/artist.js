import React from "react"
import SEO from "../components/layout/seo"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import externalLink1 from "../svg/external-link-white1.svg"
import facebookWhite1 from "../svg/facebook-white1.svg"
import instagramWhite1 from "../svg/instagram-white1.svg"
import soundcloudWhite1 from "../svg/soundcloud-white1.svg"
import spotifyWhite1 from "../svg/spotify-white1.svg"
import twitterWhite1 from "../svg/twitter-white1.svg"

export default ({ pageContext }) => {
  const artist = pageContext.artistData

  console.log(artist)

  return (
    <>
      <SEO title="Home" />
      <motion.div
        id={"artist-container"}
        style={{
          height: "auto",
          backgroundColor: theme.colors.tertiary,
        }}
      >
        <Navigation />
        <motion.div
          id={"artist-content"}
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: theme.colors.tertiary,
            padding: "50px 10% 50px 10%",
          }}
        >
          <motion.div style={{ height: "auto", textAlign: "left" }}>
            <motion.h2
              id={"artist-name"}
              style={{
                fontFamily: theme.font.georgia,
                color: theme.colors.white0,
                fontWeight: 600,
              }}
            >
              {artist.artistName}
            </motion.h2>
            <motion.h5
              id={"artist-bio"}
              style={{
                fontFamily: theme.font.georgia,
                color: theme.colors.white0,
                fontWeight: 600,
              }}
            >
              {artist.bio}
            </motion.h5>
            <motion.img
              src={artist.image}
              style={{
                width: "100%",
                border: `5px solid ${theme.colors.white1}`,
              }}
            ></motion.img>
            <motion.div
              style={{
                display: "flex",
                justifyContent: "center",
                width: 300,
                paddingBottom: 40,
              }}
            >
              {artist.website !== "" && (
                <a
                  href={artist.website}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={externalLink1}
                    className={"artist-social-link"}
                  ></motion.img>
                </a>
              )}
              {artist.facebook !== "" && (
                <a
                  href={artist.facebook}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={facebookWhite1}
                    className={"artist-social-link"}
                  ></motion.img>
                </a>
              )}
              {artist.instagram !== "" && (
                <a
                  href={artist.instagram}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={instagramWhite1}
                    className={"artist-social-link"}
                  ></motion.img>
                </a>
              )}
              {artist.twitter !== "" && (
                <a
                  href={artist.twitter}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={twitterWhite1}
                    className={"artist-social-link"}
                  ></motion.img>
                </a>
              )}
              {artist.spotify !== "" && (
                <a
                  href={artist.spotify}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={spotifyWhite1}
                    className={"artist-social-link"}
                  ></motion.img>
                </a>
              )}
              {artist.soundcloud !== "" && (
                <a
                  href={artist.soundcloud}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={soundcloudWhite1}
                    className={"artist-social-link"}
                  ></motion.img>
                </a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </>
  )
}
