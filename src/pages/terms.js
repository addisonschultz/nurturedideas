import React from "react"
import SEO from "../components/layout/seo"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer"

const TermsPage = () => (
  <>
    <SEO title="terms" />
    <motion.div
      id={"terms-container"}
      style={{
        height: "auto",
        padding: 0,
        background: theme.colors.secondary,
      }}
    >
      <Navigation />
      <motion.div
        id={"terms-content"}
        style={{
          width: "100%",
          padding: "100px 10% 0px 10%",
          height: "auto",
          textAlign: "left",
        }}
      >
        <motion.div id={"terms-and-conditions"} style={{ height: 900 }}>
          <motion.h3 style={{ fontFamily: theme.font.sharpeBold }}>
            Newsletter Terms and Conditions
          </motion.h3>
          <motion.p>
            By subscribing to our newsletter you agree to receive the occasional
            email newsletter from us. The aim of our newsletter is to provide
            valuable industry information to our subscribers while also keeping
            them updated with what we have going on over at Nurtured Ideas both
            on the artists, label, and philanthropic side of things. The
            subscription to our newsletter service is not mandatory but is most
            certainly appreciated.
          </motion.p>
          <br />
          <motion.h4
            style={{ fontFamily: theme.font.default, fontWeight: 900 }}
          >
            1. Frequency
          </motion.h4>
          <motion.p>
            The frequency of the newsletter will be at most twice per month. In
            the scenario we plan to increase the amount of volume we will be
            sure to make a note of it on the previous edition of the newsletter.
          </motion.p>
          <motion.h4
            style={{ fontFamily: theme.font.default, fontWeight: 900 }}
          >
            2. Limited Liability
          </motion.h4>
          <motion.p>
            We reserve the sole right to either modify or discontinue the
            newsletter, at any time with or without notice to you. We will not
            be liable to you or any third party should we exercise such right. ​
          </motion.p>
          <motion.p>
            We reserve the sole right to unsubscribe users / visitors from or
            newsletter service, without notice . We will do so with any
            subscriber we deem registered with fake data
          </motion.p>
          <motion.h4
            style={{ fontFamily: theme.font.default, fontWeight: 900 }}
          >
            3. Privacy Policy
          </motion.h4>
          <motion.p>
            We will not communicate / spread / publish or otherwise give away
            your email address, name, or any information that can be deemed as
            personal or part of your IP. You'll be able to change your
            subscription settings or to delete it altogether anytime.
          </motion.p>
          <motion.h5 style={{ fontFamily: theme.font.sharpeBold }}>
            - Nurtured Ideas
          </motion.h5>
        </motion.div>
      </motion.div>
    </motion.div>
    <Footer />
  </>
)

export default TermsPage
