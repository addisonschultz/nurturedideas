import React from "react"
import { motion } from "framer-motion"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import HeroYoutube from "../components/Hero/HeroYoutube"
import NewsletterForm from "../components/NewsletterForm/NewsletterForm"
import SocialLink from "../components/SocialLink/SocialLink"

import { theme } from "../theme/theme"

import spotifyBlack0 from "../svg/spotify-black0.svg"
import instagramBlack0 from "../svg/instagram-black0.svg"
import twitterBlack0 from "../svg/twitter-black0.svg"

const IndexPage = ({ data }) => {
  const metadata = data.allMetadataJson.edges[0].node

  return (
    <>
      <SEO title="Home" />
      <Navigation />
      <motion.div id={"index-container"}>
        <HeroYoutube youtubeId={metadata.youtubeId} />

        <motion.div id={"social-links"}>
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
        <motion.div id={"newsletter-form"}>
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
          <NewsletterForm namePlaceholder={"Name"} emailPlaceholder={"Email"} />
        </motion.div>
        <motion.div id={"bio"}>
          <motion.h3
            style={{
              fontFamily: theme.font.sharpeBlack,
            }}
          >
            Nurtured Ideas
          </motion.h3>
          <motion.p style={{ whiteSpace: "pre-line" }}>{metadata.bio}</motion.p>
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
