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
              I'm <span className="text-primary">Shaojie Hou,</span> a Senior
              Math major at University of Texas at Austin
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              Hi, My name is Shaojie Hou and I’m a senior college student major
              in Mathematics. I enjoy traveling, coding, and problem-solving.
              I’m also a shutterbug, interested in taking street snaps,
              portraits, and landscapes.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              As a passionate software developer, I have been working on coding
              for three years. I have worked on projects including web-based,
              full-stack applications, mobile multi-threaded applications for
              iOS, and front-end development using React.js.
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
                  <span className="fw-600 me-2">Age:</span>21
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
