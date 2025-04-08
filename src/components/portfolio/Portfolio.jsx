import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Open Sesame",
    img: "OpenSesame.png",
    desc: "Program Information: Explore details about various programs offered by the Open University of Sri Lanka.Frequently Asked Questions FAQs: Find answers to common queries and concerns that students may have.Calculator: Calculate the estimated full amount for your program based on credit prices, subjects, and other parameters.Important Dates: Stay updated on crucial dates,including registration periods, examination schedules, and more.Bursary Information: Learn about Mahapola and other bursaries available to OUSL students.",
  },
  {
    id: 2,
    title: "UGC Redesign",
    img: "UGC.png",
    desc: "The University Grants Commission (UGC) of Sri Lanka serves as the apex body responsible for university education in the country. It oversees the planning and coordination and maintenance of academic standards and allocates government funds to universities and regulates student admissions to Higher Education Institutions.UGC also manage the admissions proces based on the results of national examination such as the GCE A/L.",
  },
  {
    id: 3,
    title: "EcoTracker App",
    img: "EcoTracker.png",
    desc: "In the area of environmental awareness, it's hard for people to track and lower their carbon footprints because easy-to-use tools are missing. Users must go through different platforms and struggle to find one place that combines carbon tracking with useful tips on sustainable living. Noticing this issue, we have started working to improve the experience by updating our Carbon Calculator, Green Community, and Green Living App. ",
  },
  {
    id: 4,
    title: "රුපියල Manage",
    img: "RupiyalaManage.png",
    desc: " For a financial management app like රුපියල Manage implementing a passkey feature adds an extra layer of security, which is crucial for protecting sensitive financial information"
  },
  {
    id: 5,
    title: "Open Nav",
    img: "OpenNav.png",
    desc: "We are proposing an Android mobile application designed to help the people to navigate the OUSL (OPEN UNIVERSITY OF SRI LANKA – NAWALA) and increase their familiarity with the locations of departments, labs, administration offices, faculties and other university facilities. It would allow users to search for buildings or other locations",
  },
  {
    id: 6,
    title: "Cash Coach",
    img: "CashCoach.png",
    desc: "we propose in developing an Android application that simplifies expense tracking and financial management and budget tracking. Many people track their spending and stick with budgets resorting to guide methods like recording fees in books. Which is time consuming and susceptible to errors. It is very valuable if it can be recorded as soon as it becomes an income and an expense.  ",
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;