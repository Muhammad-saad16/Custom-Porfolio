"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerNav}>
        <h1 className={styles.headerLogo}>
          <span className={styles.name}>Saad portfolio</span>
        </h1>

        {/* Mobile Toggle Button */}
        <button className={styles.toggleButton} onClick={toggleMenu}>
          ☰
        </button>

        {/* Header Menu with dynamic class */}
        <nav className={`${styles.headerMenu} ${menuOpen ? styles.active : ""}`}>
          <Link href="#home">
            <button className={styles.headerButton}>Home</button>
          </Link>
          <Link href="#about">
            <button className={styles.headerButton}>About</button>
          </Link>
          <Link href="#skills">
            <button className={styles.headerButton}>Skills</button>
          </Link>
          <Link href="#contact">
            <button className={styles.headerButton}>Contact</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
