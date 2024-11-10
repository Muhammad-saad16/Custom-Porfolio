import React, { useState } from "react";
import styles from "../about/About.module.css"; // Importing custom CSS module

const About = () => {
  // State to toggle the visibility of additional info
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  // Toggle function for Learn More button
  const handleToggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div id="about" className={styles.aboutContainer}>
      <section className={`${styles.aboutSection} p-6`}>
        <div className={styles.imageContainer}>
          {/* <Image
            className={styles.image}
            alt="Mohsin Raza"
            src={mohsinImage}
            width={300}
            height={300}
          /> */}
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
          &quot;My name is Muhammad Saad Raza, a dedicated frontend developer with a passion for creating seamless, 
          user-centric web applications. I am available to discuss potential collaborations or answer any inquiries.
          You can reach me at 0333-2858292 or via email at saadforyou20@gmail.com.&quot;
          </p>
          <p className={styles.description}>
          &quot;I am a passionate and skilled front-end developer with expertise in building responsive,
           user-friendly web applications. With experience in HTML, CSS, JavaScript, React, and Next.js,
          I bring a strong understanding of UI/UX principles and design aesthetics to every project.
          My focus is on creating seamless and engaging user experiences while ensuring functionality
          and performance. I am dedicated to delivering high-quality code and performance.&quot;


          </p>
          <button className={styles.button} onClick={handleToggleInfo}>
            {isInfoVisible ? "Show Less" : "Learn More"}
          </button>
          {isInfoVisible && (
            <div className={styles.moreInfo}>
              <p>
              &quot;I am fueled by a passion for continuous learning and growth,
               constantly exploring new advancements in web development. 
               By leveraging cutting-edge technologies such as Next.js, React, and TypeScript, 
               I strive to create dynamic, visually captivating applications that deliver both
                functionality and seamless user experiences.&quot;


              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
