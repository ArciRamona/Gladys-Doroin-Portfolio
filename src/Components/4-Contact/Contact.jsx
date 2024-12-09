// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import emailAnimation from "/public/Animation/EmailaAnimation.json";

const Contact = () => {
  return (
    <section id="Contact" className="contact-wrapper flex">
      <motion.div
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 4, type: "spring" }}
        className="contact-container"
      >
        <div className="contact-header">
          {/* left corner */}
          <motion.h1
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
            }}
            className="contactTitle"
          >
            <span style={{}} className="icon-envelope"></span>
            Contact
          </motion.h1>
          <p className="sub-title">
            I’m always excited to connect with others in the industry,
            collaborate on innovative projects, or simply chat about new ideas
            in tech, design, and e-commerce. Whether you’re looking to start a
            project, discuss potential partnerships, or just want to reach out,
            feel free to get in touch! I look forward to hearing from you and
            exploring how we can work together to bring your vision to life.
          </p>
          <div style={{ justifyContent: "space-between" }} className="flex">
            <form
              className=" contact-form"
              action="mailto:gbav.business@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="flex formGroup">
                <label htmlFor="name" hidden>
                  Name
                </label>
                <input
                  className="contact-name"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div style={{ marginTop: "24px" }} className=" flex formGroup">
                <label htmlFor="email" hidden>
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div style={{ marginTop: "24px" }} className=" flex formGroup">
                <label htmlFor="message" hidden>
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <input
                autoComplete="off"
                className="hover-btn"
                type="submit"
                // disabled={state.submitting}
                value="Submit"
              >
                {/* {state.submitting ? "submitting..." : "Submit"} */}
              </input>

              {/* <p
                className="flex"
                style={{ fontSize: "18px", margin: "1.7rem" }}
              >
                <Lottie
                  loop={false}
                  style={{ height: 44 }}
                  animationData={doneAnimation}
                />
              </p> */}
            </form>

            <div className="animation">
              <Lottie
                className="contact-animation"
                style={{ height: 400, marginTop: "1rem" }}
                animationData={emailAnimation}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
