/* eslint-disable no-unused-vars */
import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import DeveloperAnimationRed from "/public/Animation/DeveloperAnimationRed.json";
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
            src="/06E833A5-8789-4946-A1A8-1C24D3AF2FE9.png"
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
            Full-Stack Developer. Designer. Brand Creator.
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
            Hello! I’m Gladys, a dedicated Computer Science student, graphic
            designer, and software developer specializing in e-commerce
            websites. With a strong foundation in both the creative and
            technical sides of web development, I excel at building
            user-friendly, responsive websites that drive business growth. My
            expertise spans from brand development and web design to full-stack
            e-commerce solutions, ensuring that every project I work on is both
            visually compelling and functionally robust. Whether you need a
            stunning website or a scalable online store, I’m here to bring your
            vision to life.
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
          animationData={DeveloperAnimationRed}
        />
      </motion.div>
    </section>
  );
};

export default hero;
