import "./hero.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
  scrollButton: { opacity: 0, y: 30, transition: { duration: 2, repeat: Infinity } },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: { x: "-35%", transition: { repeat: Infinity, repeatType: "mirror", duration: 20 } },
};

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    const updateAnimationSpeed = () => {
      const isMobile = window.innerWidth <= 768; // Define a breakpoint for mobile
      const duration = isMobile ? 20 : 35; // Faster speed on mobile (20 seconds) and slower on desktop (35 seconds)

      controls.start({
        x: ["-10%", "10%"],
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: duration, // Set duration based on screen size
        },
      });
    };

    updateAnimationSpeed();
    window.addEventListener("resize", updateAnimationSpeed);

    return () => window.removeEventListener("resize", updateAnimationSpeed);
  }, [controls]);

  return (
    <div className="hero">
      <motion.div
        className="stars"
        animate={controls}
      ></motion.div>
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Aspiring Software Engineer</motion.h2>
          <motion.h1 variants={textVariants}>
          Tech Enthusiast <br /> and <br /> Information Technology Tutor
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the latest Work</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll" />
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Coder Gamer Guitarist ScienceLover Tutor
      </motion.div>

      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
