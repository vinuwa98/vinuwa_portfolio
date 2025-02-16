// Parallax.jsx

import { useRef, useEffect } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const Parallax = ({ type }) => {
    const ref = useRef();
    const controls = useAnimation();

    // Use scrollYProgress for scroll-based animations
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Transform values for parallax effects
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Star animation similar to Hero.jsx
    useEffect(() => {
        const updateAnimationSpeed = () => {
            const isMobile = window.innerWidth <= 768;
            const duration = isMobile ? 20 : 35;

            controls.start({
                x: ["-10%", "10%"],
                transition: {
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: duration,
                },
            });
        };

        updateAnimationSpeed();
        window.addEventListener("resize", updateAnimationSpeed);

        return () => window.removeEventListener("resize", updateAnimationSpeed);
    }, [controls]);

    return (
        
    );
};

export default Parallax;
