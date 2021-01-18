import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"

import HeroYoutube from "./HeroYoutube"

const HeroCarousel = ({ videos }) => {
  const [[page, direction], setPage] = useState([0, 0])

  const videoIndex = wrap(0, videos.length, page)

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  const carouselVariants = {
    enter: () => {
      return {
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: () => {
      return {
        zIndex: 0,
        opacity: 0,
      }
    },
  }

  const controlVariants = {
    initial: { backgroundColor: "#000" },
    hover: { backgroundColor: "#111" },
  }

  const transition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  }

  return (
    <motion.div id={"hero-carousel-container"}>
      <AnimatePresence initial={false} custom={direction}>
        <HeroYoutube
          youtubeId={videos[videoIndex].youtubeId}
          variants={carouselVariants}
          initial="enter"
          animate="center"
          exit="exit"
          key={page}
          custom={direction}
          transition={transition}
        />
      </AnimatePresence>
      <motion.div id={"carousel-controls"}>
        <motion.div
          id={"hero-carousel-back"}
          onClick={() => paginate(-1)}
          variants={controlVariants}
          initial={"initial"}
          whileHover={"hover"}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
              fill="#fff"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </motion.div>
        <motion.div
          id={"hero-carousel-forward"}
          onClick={() => paginate(1)}
          variants={controlVariants}
          initial={"initial"}
          whileHover={"hover"}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="#fff"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default HeroCarousel
