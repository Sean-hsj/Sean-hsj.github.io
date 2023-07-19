import React from "react";
// import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Shaojie Hou,</span> graduate student in Computer Engineering
              at UC San Diego.
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            I'm an incoming MS ECE student at UC San Diego, specializing in Computer Engineering. 
            I hold a bachelor's degree in Mathematics from the University of Texas at Austin, 
            where I developed a strong foundation in analytical thinking and problem-solving.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            As a dedicated software developer, I thrive on solving complex problems and enjoy 
            working on diverse projects. My experience spans web-based full-stack applications, 
            iOS multi-threaded applications, and front-end development utilizing React.js. I am 
            constantly seeking opportunities to expand my knowledge and apply my skills to 
            real-world challenges.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            Beyond coding, I have a passion for photography. Whether it's capturing vibrant street 
            snaps, emotive portraits, or breathtaking landscapes, I find joy in freezing moments in 
            time through my lens. Here is the <a href="" className="text-primary">link</a> to my Photo Portfolio.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Shaojie Hou
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:houshaojie0619@gmail.com">houshaojie0619@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>22
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">Based in:</span>Austin, Texas
                </li>
              </ul>
              <a
                href=""
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </section>
  );
};

export default AboutUs;
