import { useRef } from "react";
import "./services.scss";
import {animate, motion, stagger , useInView} from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: { // Corrected typo here
            duration: 1,
            staggerChildren: 0.1,
        }
    }
};

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin:"100px"})

  return (
    <motion.div
        className="services"
        variants={variants}
        initial="initial"
        //animate="animate"
        //whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I have focused on developing
            <br/>my knowledge
            </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/Portfolio.jpg" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Tech</motion.b> Enthusiast
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Aspiring</motion.b> Software Engineer
                </h1>
                <button>WHAT I DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>App Development</h2>
                <p> I specialize in creating user friendly mobile applications that cater to diverse needs.
                    My expertise includes designing and developing apps that focus on functionality, performance, and exceptional 
                    user experiences.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Project Handling</h2>
                <p> I excel in leading and managing software development projects, ensuring their successful completion from inception 
                    to deployment. My experience includes spearheading diverse projects such as a University Social Network, a Carbon 
                    Footprint Calculator, and a Budget Management System.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>A/L ICT Tutor</h2>
                <p> I am passionate about education and enjoy sharing my knowledge with students. I provide Advanced Level ICT tuition and 
                    Ordinary Level Science tuition guiding students to excel in their studies and achieve their academic goals.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Team Leader</h2>
                <p> As a natural leader, I take pride in guiding teams toward success. I am the leader of our entire Software 
                    Engineering batch, where I coordinate and inspire my peers to excel in both academics and projects. Additionally 
                    I started and lead the Kylix Development Team.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
        
  )
}

export default Services