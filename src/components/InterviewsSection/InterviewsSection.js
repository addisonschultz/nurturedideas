import React from "react"
import { motion } from "framer-motion"

import InterviewCard from "../InterviewCard/InterviewCard"

import "./interviews-section.css"

const InterviewsSection = ({ interviews }) => {
  return (
    <>
      <motion.p id={"interview-section-description"}>
        Our monthly newsletter keeps you up to date with what's going on with
        Nurtured Ideas. Sign up on the home page to stay in the loop, or read
        our past editions below.
      </motion.p>
      <motion.div id={"interview-section-container"}>
        {interviews.map((interview, index) => {
          return <InterviewCard interview={interview} key={index} />
        })}
      </motion.div>
    </>
  )
}

export default InterviewsSection
