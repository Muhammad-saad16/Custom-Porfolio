"use client";

import React, { useState, useEffect } from "react";
import Hero from "./Component/Hero/Hero";
import About from "./Component/about/About";
import Footer from "./Component/Footer/Footer";
import Skills from "./Component/Skills/Skill";
import Contact from "./Component/Contact/Contact";

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Check localStorage for the saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkTheme(true);
      document.body.classList.add("dark-theme");
    }
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    if (isDarkTheme) {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div>
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-800 text-white rounded fixed top-5 right-5 z-10"
      >
        Switch to {isDarkTheme ? "Light" : "Dark"} Mode
      </button>

      {/* Main Components */}
    
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;


