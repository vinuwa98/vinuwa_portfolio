import { motion } from "framer-motion";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          animate={open ? "open" : "closed"}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { opacity: 1, d: "M 2 11.5 L 20 11.5" },
            open: { opacity: 0 },
          }}
          animate={open ? "open" : "closed"}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 20.5 L 20 20.5" },
            open: { d: "M 3 2.5 L 17 16.5" },
          }}
          animate={open ? "open" : "closed"}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;