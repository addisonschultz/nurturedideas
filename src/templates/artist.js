import React from "react"
import { motion } from "framer-motion"
import Img from "gatsby-image"

import SEO from "../components/layout/seo"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

import externalLink1 from "../svg/external-link-white1.svg"
import facebookWhite1 from "../svg/facebook-white1.svg"
import instagramWhite1 from "../svg/instagram-white1.svg"
import soundcloudWhite1 from "../svg/soundcloud-white1.svg"
import spotifyWhite1 from "../svg/spotify-white1.svg"
import twitterWhite1 from "../svg/twitter-white1.svg"
import appleWhite1 from "../svg/apple-white1.svg"
import tiktokWhite1 from "../svg/tiktok-white1.svg"

export default ({ pageContext, data }) => {
  const artist = pageContext.artistData

  function isEmpty(str) {
    return !str || 0 === str.length
  }

  console.log(artist)

  return (
    <>
      <SEO title={artist.artistName} />
      <Navigation />
      <motion.div id={"artist-template-container"}>
        <Img
          fluid={data.artistImage.childImageSharp.fluid}
          id={"artist-template-image"}
        ></Img>
        <motion.div id={"artist-template-details"}>
          <motion.h2 id={"artist-name"}>{artist.artistName}</motion.h2>
          <motion.h5 id={"artist-bio"}>{artist.bio}</motion.h5>
          <motion.div id={"artist-template-links"}>
            {!isEmpty(artist.website) && (
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
            {!isEmpty(artist.facebook) && (
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
            {!isEmpty(artist.instagram) && (
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
            {!isEmpty(artist.twitter) && (
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
            {!isEmpty(artist.spotify) && (
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
            {!isEmpty(artist.soundcloud) && (
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
            {!isEmpty(artist.appleMusic) && (
              <a
                href={artist.appleMusic}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <motion.img
                  src={appleWhite1}
                  className={"artist-social-link"}
                ></motion.img>
              </a>
            )}
            {!isEmpty(artist.tiktok) && (
              <a
                href={artist.tiktok}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <motion.img
                  src={tiktokWhite1}
                  className={"artist-social-link"}
                ></motion.img>
              </a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </>
  )
}

export const data = graphql`
  query ArtistImage($artistImage: String!) {
    artistImage: file(relativePath: { eq: $artistImage }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
