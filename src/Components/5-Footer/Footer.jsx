// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="flex">
      <ul>
        <li>
          <a href="../../../NavPages/AboutMe/AboutMe.html">About</a>
        </li>
        <li>
          <a href="#Projects">Project</a>
        </li>
        {/* <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Uses</a>
        </li> */}
      </ul>

      <p className="copyright">
        ⓒ 2024 Gladys Ando Doroin. All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
