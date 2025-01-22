/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import Animation from "../../Animation/Animation - 1736463504875.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero-wrapper flex">
      <div className="left-section">
        <div className="heroBox">
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
              src="/Enhance-ID_7141.jpg"
              className="avatar"
              width={250}
              alt=""
            ></img>
            <div className="icon-verified"></div>
          </motion.div>
          <div className="box1">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3, type: "spring" }}
              className="title"
            >
              Software Engineer. Data Scientist. MERN Full-Stack Developer.
              Brand Creator
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
              Hello! I’m a passionate Computer Science student with a knack for
              problem-solving and a love for creating impactful digital
              solutions. My expertise spans{" "}
              <span className="AboutHighlights">JavaScript</span> ,{" "}
              <span className="AboutHighlights">MERN stack development</span>,
              and <span className="AboutHighlights">Data Science</span>, with a
              specialization in{" "}
              <span className="AboutHighlights">E-commerce platforms</span>. I
              thrive on blending technology and innovation to build
              user-friendly applications that deliver seamless online
              experiences. <br /> <br /> Beyond development, I bring a creative
              edge as a <span className="AboutHighlights">Brand Creator</span>,
              leveraging my background in graphic design to craft visually
              engaging and cohesive brand identities. My unique combination of
              technical and artistic skills allows me to approach projects
              holistically, ensuring both functionality and aesthetics are at
              the forefront. <br />
              <br />
              I’m currently honing my skills in{" "}
              <span className="AboutHighlights">Web development</span> and{" "}
              <span className="AboutHighlights">Machine Learning</span>,
              focusing on integrating{" "}
              <span className="AboutHighlights">AI-driven Features</span> into
              e-commerce solutions. Whether it’s designing a responsive website,
              analyzing data for actionable insights, or crafting a compelling
              brand identity, I’m committed to excellence and continuous growth.
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
          onLoadedImages={() => {
            lottieRef.current?.setSpeed(0.5); // Fixing typo: `.currentsetSpeed` → `.current?.setSpeed`
          }}
          animationData={Animation}
        />
      </motion.div>
    </section>
  );
};

export default hero;
