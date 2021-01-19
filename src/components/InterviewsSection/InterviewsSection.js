import React from "react"
import { motion } from "framer-motion"

import InterviewCard from "../InterviewCard/InterviewCard"

import "./interviews-section.css"

const InterviewsSection = ({ interviews }) => {
  return (
    <motion.div id={"interview-section-container"}>
      {interviews.map((interview, index) => {
        return <InterviewCard interview={interview} key={index} />
      })}
    </motion.div>
  )
}

export default InterviewsSection
