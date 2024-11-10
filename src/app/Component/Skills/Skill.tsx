"use client";
import React, { useState } from "react";
import styles from "./Skill.module.css"; // Importing CSS module

const Skills = () => {
  // State to toggle the visibility of the description
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle the button click
  const handleLearnMoreClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    // <section className={styles["skills-section"]}>
    <section id="skills" className={styles["skills-section"]}> 
      <div className={styles["skills-container"]}>
        <h1 className={styles["skills-title"]}>
          My Skills
        </h1>
        <p className={styles["skills-description"]}>
          Web Developer | Frontend Developer | React, Next.js, Tailwind
        </p>
        <button className={styles["skills-button"]} onClick={handleLearnMoreClick}>
          {isClicked ? "Show Less" : "Learn More"}
        </button>

        {/* Conditionally render the description based on button click */}
        {isClicked && (
          <div className={styles["extra-info"]}>
            <p>
              I specialize in building dynamic, user-friendly web applications using modern web technologies.
              My expertise lies in frontend development with React, Next.js, and Tailwind CSS. I also have experience
              in full-stack development, working with serverless technologies, databases, and backend frameworks.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;


