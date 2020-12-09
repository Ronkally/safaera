import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="home_logo no_select gugi">&lt;SAFAERA&#x2F;&gt;</div>
      <div className="home_content no_select">
        <div className="gugi content_title">
          The best software <br />
          developer team in Tijuana{" "}
        </div>
        <p className="content_body">
          We are a passionate team that specializes in creating desktop and web
          applications.
          <br />
          Check out our projects and contact us!
        </p>
        <div className="content_button">
          <Link className="ghost_button" to="/projects">
            Our Projects
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
