import React from "react";
import Header from "../Common Pages/Header";
import Footer from "../Common Pages/Footer";
import about from "../assets/internet.jpg"; // Make sure the path is correct

const About = () => {
  return (
    <>
      <Header />

      <section id="about" className="py-5 bg-dark text-light">
        <div className="container px-3 px-md-5 pt-5 pb-5">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
              <img
                src={about}
                alt="Hetavi Desai"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "300px", width: "100%" }}
              />
            </div>

            {/* Text Section */}
            <div className="col-12 col-md-7">
              <p className="text-uppercase text-success fw-semibold mb-2 fs-6">
                About - Hetavi Desai
              </p>
              <h2 className="fw-bold mb-3">
                Get a website that leaves a lasting impression!
              </h2>
              <p className="fs-6">
                I'm passionate about crafting sleek, responsive, and user-friendly web experiences.
                With a strong foundation in React and Bootstrap, I love turning ideas into engaging
                digital realities. Always eager to learn and grow in this fast-paced tech world.
              </p>

              {/* Buttons */}
              <div className="mt-4 d-flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/hetavi-desai-21b0372b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success"
                >
                  <i className="bi bi-linkedin me-2"></i>LinkedIn
                </a>

                <a
                  href="https://www.instagram.com/hetavi_008?igsh=MWFoMTVmODJ6OG44Mg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success"
                >
                  <i className="bi bi-instagram me-2"></i>Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
