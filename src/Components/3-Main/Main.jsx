import { useState } from "react";
import "./Main.css";
import { myProjects } from "./projects";
import { motion } from "framer-motion";

function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main id="Projects" className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");

            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handleClick("mern");
          }}
          className={currentActive === "mern" ? "active" : null}
        >
          MERN
        </button>

        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>

        <button
          onClick={() => {
            handleClick("sql");
          }}
          className={currentActive === "sql" ? "active" : null}
        >
          PostgreSQL
        </button>

        <button
          onClick={() => {
            handleClick("ps");
          }}
          className={currentActive === "ps" ? "active" : null}
        >
          Adobe Photoshop Design
        </button>

        <button
          onClick={() => {
            handleClick("Ai");
          }}
          className={currentActive === "Ai" ? "active" : null}
        >
          Adobe Illustration
        </button>
      </section>

      <section className="flex right-section ">
        {arr.map((item) => {
          return (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              key={item.imgPath}
              className="card"
            >
              <img src={item.imgPath} alt="" width={269} />
              <div style={{ width: "256px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.subTitle}</p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link1"></div>
                    <div>
                      <a
                        className="icon-github-square"
                        href={item.gitHubUrl}
                      ></a>
                    </div>
                  </div>

                  <div>
                    <a
                      style={{ gap: "3px" }}
                      className="flex link"
                      href={item.moreOnProject}
                    >
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="flex icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>
    </main>
  );
}

export default Main;
