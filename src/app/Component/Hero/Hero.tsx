"use client";
import React, { useState } from "react";
import "./Hero.css"; 

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);

  // Toggle the visibility of the description
  const handleLearnMoreClick = () => setIsClicked(prevState => !prevState);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          Hello, I am Muhammad Saad Raza
        </h1>
        <p className="hero-description">
          Front-End Developer | Web Developer
        </p>
        <button 
          className="hero-button" 
          onClick={handleLearnMoreClick}
          aria-expanded={isClicked ? "true" : "false"}
        >
          {isClicked ? "Show Less" : "Learn More"}
        </button>


        {isClicked && (
          <div className="more-info">
            <p>
            &quot;Hello, I&apos;m Muhammad Saad Raza, a Full-Stack Developer who loves creating websites that are easy to use and work well on any device. I have experience with tools like Next.js, React, and TypeScript. I always want to learn more and believe technology can help solve real problems.&quot;
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
