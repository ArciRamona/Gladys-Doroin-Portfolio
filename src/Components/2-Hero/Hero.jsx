/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import Animation from "/public/Animation/Animation - 1736463504875.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero-wrapper flex">
      <div className="left-section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="parent-avatar flex"
        >
          <img
            src="/public/06E833A5-8789-4946-A1A8-1C24D3AF2FE9.png"
            className="avatar"
            width={250}
            alt=""
          ></img>
          <div className="icon-verified"></div>
        </motion.div>
        <div>
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className="title"
          >
            Software Engineer. Data Scientist. MERN Full-Stack Developer. Brand
            Creator
          </motion.h1>
          <motion.p
            id="About"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
            className="sub-title"
          >
            Hello! I’m an enthusiastic Computer Science student passionate about
            blending creativity, technology, and data to craft impactful
            solutions. As a budding{" "}
            <span className="highlights"> Software Engineer</span>,{" "}
            <span className="highlights">MERN Full-Stack Developer</span>, and{" "}
            <span className="highlights">Data Scientist</span>, I thrive on
            designing intuitive and intelligent systems that solve real-world
            problems.
            <br /> <br /> I also bring a creative edge as a{" "}
            <span className="highlights">Brand Creator</span> , combining
            technical expertise with design sensibilities to build visually
            compelling and user-friendly digital experiences.
            <br /> <br />
            Currently, I’m honing my skills in web development and data science,
            with a focus on integrating machine learning into full-stack
            applications. I’m always eager to learn, explore emerging
            technologies, and contribute to projects that make a difference.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="all-icons flex"
        >
          <div>
            <a
              className="icon icon-twitter"
              href="https://x.com/arcigaldondj?s=21&t=wvr81MN1HXwtIGMIuwzS1g"
              target="_blank"
            ></a>
          </div>
          <div>
            <a
              className="icon icon-facebook-square"
              href="https://www.facebook.com/profile.php?id=61568921961830"
              target="_blank"
            ></a>
          </div>
          <div>
            <a
              className="icon icon-linkedin-square"
              href="https://www.linkedin.com/in/gladys-ando-b73257251/"
              target="_blank"
            ></a>
          </div>
          <div>
            <a
              className="icon icon-instagram"
              href=" https://www.instagram.com/gba_do/"
              target="_blank"
            ></a>
          </div>
          <div>
            <a
              className="icon icon-github-square"
              href="    https://github.com/ArciRamona"
              target="_blank"
            ></a>
          </div>
        </motion.div>
      </div>

      {/* right section */}
      <motion.div
        initial={{ x: "7rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 5,
          type: "spring",
        }}
        className="right-section animation"
      >
        <Lottie
          lottieRef={lottieRef}
          className="hero-animation"
          onloadedImages={() => {
            // @ts-ignore
            // https://Lottiereact.com
            lottieRef.currentsetSpeed(5);
          }}
          animationData={Animation}
        />
      </motion.div>
    </section>
  );
};

export default hero;
