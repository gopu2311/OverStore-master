import React from "react";
const About = () => {
  return (
    <>
      <header id="home" className="header">
        <section className="section pt-0" id="about">
          <div className="container text-center">
            <div className="about">
              <div className="about-img-holder" style={{ paddingTop: "30px" }}>
                <img
                  src={require("../assets/imgs/man.png")}
                  className="about-img"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
              </div>
              <div className="about-caption">
                <p className="section-subtitle text-primary font-weight-bold">
                  Who Am I ?
                </p>
                <h2 className="section-title mb-3">About Me</h2>
                <p className="text-primary font-weight-bold" style={{overflow:"hidden"}}>
                As a wholesaler catering to diverse needs, I pride myself on offering a wide range of food items, household essentials, and self-care products. With an emphasis on bulk quantities and competitive pricing, my establishment serves as a reliable source for retailers and businesses alike. Providing exceptional value and convenience, I strive to be your trusted partner in meeting your customers' demands.
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};
export default About;
