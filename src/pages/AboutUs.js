import { motion } from "framer-motion";
import React from "react";
import Jacob from "../images/Jacob.jpg"; // with import
import Daniel from "../images/Daniel.jpg"; // with import
import "../styles/AboutUs.css";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className="page_title gugi no_select">Meet Our Team!</p>
      <div className="page_subtitle no_select">
        <p className="subtitle_text">
          We are really excited to bring our solutions to the world, providing
          the best possible experience to everyone.
        </p>
      </div>
      <div className="about_members">
        <div className="member_description">
          <p className="description_name gugi">Jacob Munoz Ronkally</p>
          <p className="description_body">
            Junior programmer who specializes in building backend applications
            with C#, Java, And Python. Has knowledge in NodeJs and .Net Core
          </p>
          <p className="description_social">
            <Link>
              <i class="fab fa-linkedin fa-3x"></i>
            </Link>
            <Link>
              <i class="fab fa-facebook-square fa-3x"></i>
            </Link>
            <Link>
              <i class="fab fa-github-square fa-3x"></i>
            </Link>
          </p>
        </div>
        <div className="member_photo">
          <img alt="Jacob" src={Jacob} />
        </div>
      </div>
      <div className="about_members_reverse">
        <div className="member_photo">
          <img alt="Daniel" src={Daniel} />
        </div>
        <div className="member_description">
          <p className="description_name gugi">Daniel Pantoja De La Cruz</p>
          <p className="description_body">
            Frontend developer with experience working on popular modern
            javascript frameworks like Angular and ReactJs.
          </p>
          <p className="description_social">
            <Link>
              <i class="fab fa-linkedin fa-3x"></i>
            </Link>
            <Link>
              <i class="fab fa-facebook-square fa-3x"></i>
            </Link>
            <Link>
              <i class="fab fa-github-square fa-3x"></i>
            </Link>
          </p>
        </div>
      </div>
      <div className="about_contact">
        <div className="contact_text">
          <p className="gugi contact_text_title">Contact us!</p>
          <p className="contact_text_body">
            If you are interested in working with our team then feel free to
            send us a message and we will reply as fast as possible!
          </p>
        </div>
        <div className="contact_form">
          <input type="email" placeholder="Work Email"></input>
          <textarea
            name="Text1"
            cols="40"
            rows="5"
            placeholder="Write your project or idea here..."
          ></textarea>
          <button className="ghost_button_black">
            Submit
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
