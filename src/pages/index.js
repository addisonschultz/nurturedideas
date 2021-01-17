import React from "react"
import SEO from "../components/layout/seo"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer"
import spotifyBlack0 from "../svg/spotify-black0.svg"
import instagramBlack0 from "../svg/instagram-black0.svg"
import twitterBlack0 from "../svg/twitter-black0.svg"
import HeroYoutube from "../components/HeroYoutube"
import HeroVideo from "../components/HeroVideo"
import NewsletterForm from "../components/NewsletterForm"
import SocialLink from "../components/SocialLink"

const IndexPage = ({ data }) => {
  const metadata = data.allMetadataJson.edges[0].node

  return (
    <>
      <SEO title="Home" />
      <motion.div
        id={"index-container"}
        style={{
          height: "auto",
          padding: 0,
          background: theme.colors.tertiary,
        }}
      >
        <Navigation />
        <motion.div
          id={"index-content"}
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
          }}
        >
          <motion.div
            id={`index-left ${
              metadata.heroContentType === "file" ? "file" : "youtube"
            }`}
            style={{
              marginBottom: metadata.heroContentType === "file" ? -7 : -32,
              overflow: "hidden",
              width: "100%",
            }}
          >
            {metadata.heroContentType === "file" ? (
              <HeroVideo src={metadata.heroVideo} />
            ) : (
              <HeroYoutube youtubeId={metadata.youtubeId} />
            )}
          </motion.div>
          <motion.div
            id={"index-right"}
            style={{
              width: "100%",
            }}
          >
            <motion.div
              id={"index-right-top index-form"}
              style={{ height: 350, padding: 50 }}
            >
              <motion.h2
                style={{
                  textAlign: "left",
                  color: theme.colors.white0,
                  fontFamily: theme.font.sharpeBlack,
                  paddingTop: theme.spacing[6],
                }}
              >
                Stay in touch
              </motion.h2>
              <NewsletterForm
                namePlaceholder={"Name"}
                emailPlaceholder={"Email"}
              />
            </motion.div>
            <motion.div
              id={"index-right-bottom"}
              style={{ background: theme.colors.white0 }}
            >
              <SocialLink
                iconSrc={spotifyBlack0}
                background={theme.colors.white1}
                text={"In Rotation"}
                href={
                  "https://open.spotify.com/playlist/6IVeBCYTq0CXH3BsmtxaUq?si=_vAluEcbTmq6GLcAP1oIhw"
                }
              />
              <SocialLink
                iconSrc={instagramBlack0}
                background={theme.colors.white2}
                text={"@nurturedideas"}
                href={"https://www.instagram.com/nurturedideas/"}
              />
              <SocialLink
                iconSrc={twitterBlack0}
                background={theme.colors.white3}
                text={"@nurturedideas"}
                href={"https://twitter.com/NurturedIdeas"}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          id={"description"}
          style={{
            height: 400,
            padding: "0px 10% 0px 10%",
            background: theme.colors.white0,
          }}
        >
          <motion.div
            style={{ height: "100%", paddingTop: 100, textAlign: "left" }}
          >
            <motion.h3
              style={{
                fontFamily: theme.font.sharpeBlack,
              }}
            >
              Nurtured Ideas
            </motion.h3>
            <motion.p style={{ whiteSpace: "pre-line" }}>
              {metadata.bio}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    allMetadataJson {
      edges {
        node {
          bio
          youtubeId
          heroContentType
          heroVideo
        }
      }
    }
  }
`

export default IndexPage
