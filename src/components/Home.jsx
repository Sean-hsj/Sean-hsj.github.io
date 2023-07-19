import React from "react";
import Typewriter from "typewriter-effect";

const Home = ({ classicHeader, darkTheme, handleNavClick }) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />

        {/* ---------------image background------------------ */}
        <div
          className="hero-bg parallax"
          style={{ backgroundImage: 'url("images/intro-bg.jpg")' }}
        ></div>

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-9 fw-500 text-white mb-2 mb-md-3">Warm Greetings!</p>
                <p className="text-16 fw-500 text-white mb-2 mb-md-3">I'm Shaojie Hou</p>
                <h2 className="text-10 fw-600 text-light mb-2 mb-md-3">

                  <Typewriter
                    options={{
                      strings: [
                        "future Software Engineer,",
                        "Photography enthusiast,",
                        "and Seeker of knowledge!",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 30, // Speed of typing
                      deleteSpeed: 20 // Speed of deleting
                    }}
                  />
                </h2>
                <p className="text-5 text-light mb-4">
                  based in Austin, Texas.
                </p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
