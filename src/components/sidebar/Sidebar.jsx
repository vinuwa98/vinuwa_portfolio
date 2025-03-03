import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(3500px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
   
    },
  };

  return (
    <motion.div
      className="sidebar"
      initial="closed"
      animate={open ? "open" : "closed"}
      variants={variants}
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;