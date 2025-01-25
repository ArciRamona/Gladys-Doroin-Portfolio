// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import "./Header.css";
import CV from "../../assets/CV/Gladys Doroin Resume (2).pdf";

function Header() {
  const [showModel, setshowModel] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModel(true);
        }}
        className="icon-menu menu close-button"
      ></button>
      <div />
      <nav>
        <ul className="flex ">
          <li className="menu-bar">
            <a href="/AboutMe.html">About</a>
          </li>
          {/* <li className="menu-bar">
            <a href="">Articles</a>
          </li> */}
          <li className="menu-bar">
            <a href="#Projects">Project</a>
          </li>
          {/* <li className="menu-bar">
            <a href="">Speaking</a>
          </li> */}
          <li className="menu-bar">
            <a href="#Contact">Contact</a>
          </li>

          <li className="menu-bar">
            <a href={CV} download>
              CV
            </a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          //Send value to local storage
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          //get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="moon-icon flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-remove close-button"
                onClick={() => {
                  setshowModel(false);
                }}
              />
            </li>
            <li>
              <a className="menu-nav" href="">
                About
              </a>
            </li>
            <li>
              <a className="menu-nav" href="#Projects">
                Project
              </a>
            </li>
            <li>
              <a className="menu-nav" href="#Contact">
                Contact
              </a>
            </li>
            <li>
              <a className="menu-nav" href={CV} download>
                CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
