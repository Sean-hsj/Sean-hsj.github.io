import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Web Development",
      desc: "Creating and maintaining websites, web applications, and other web-based solutions using a combination of programming languages, frameworks, and tools.",
      icon: "fas fa-desktop",
    },
    {
      name: "UI/UX Design",
      desc: "Composing user interfaces and experiences for digital products that are visually appealing, intuitive to use.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Data Analysis",
      desc: "Inspecting, cleaning, transforming, and modeling data to uncover useful information that can support decision-making.",
      icon: "fas fa-database",
    },
    {
      name: "Mobile App Development",
      desc: "Designing, developing, and testing mobile software applications on iOS.",
      icon: "fab fa-apple",
    },
    {
      name: "Backend Development",
      desc: "Creating and maintaining the server-side logic and database architecture of a web or mobile application.",
      icon: "fas fa-terminal",
    },
    {
      name: "Photography",
      desc: "Capturing light to create images that depict the world around us.",
      icon: "fas fa-camera",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Skills
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
