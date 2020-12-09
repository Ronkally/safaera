import React from "react";
import "../styles/Projects.css";
import { motion } from "framer-motion";
import triangulo from "../images/triangulo1.jpg"; // with import
import sciap from "../images/sciap1.jpg"; // with import
import { Link } from "react-router-dom";

function Projects() {
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className="page_title gugi no_select">Our Projects</p>
      <div className="page_subtitle no_select">
        <p className="subtitle_text">
          Here is Safaera most recent work, take a look!
        </p>
      </div>
      <div className="project_works">
        <div className="work_photo">
          <img alt="sciap" src={sciap} />
        </div>
        <div className="work_description">
          <p className="work_title gugi">Application Manager</p>
          <p className="work_body">
            This Application manages your postulates submitions with the
            objective of adding them to a school program or whatever you like.
            This web application is built with Angular and Firebase.
          </p>
          <p className="work_social">
            <Link>
              <i class="fas fa-eye fa-3x"></i>
            </Link>
            <Link>
              <i class="fab fa-github-square fa-3x"></i>
            </Link>
          </p>
        </div>
      </div>
      <div className="project_works_reverse">
        <div className="work_description">
          <p className="work_title gugi">Application Manager</p>
          <p className="work_body">
            This Application manages your postulates submitions with the
            objective of adding them to a school program or whatever you like.
            This web application is built with Angular and Firebase.
          </p>
          <p className="work_social">
            <Link>
              <i class="fas fa-eye fa-3x"></i>
            </Link>
            <Link>
              <i class="fab fa-github-square fa-3x"></i>
            </Link>
          </p>
        </div>
        <div className="work_photo">
          <img alt="sciap" src={triangulo} />
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
