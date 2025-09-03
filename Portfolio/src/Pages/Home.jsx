import React from "react";
import Header from "../Common Pages/Header";
import Footer from "../Common Pages/Footer";
import "../CSS/Home.css";
import profileImg from "../assets/me copy.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
<div className="container-fluid bg-dark text-light hero-section py-5">
        <div className="row align-items-center pt-5 px-3 px-md-5">
          <div className="col-md-6 p-4 p-md-5 text-center text-md-start">
            <h1 className="Name">I'm Hetavi</h1>
            <div className="highlight-box mt-3 mb-4">
              <span className="typing-text">I'M A WEB DEVELOPER</span>
            </div>
            <div className="ms-auto">
              <Link to="/contact">
                <button
                  type="button"
                  className="btn btn-outline-light"
                >
                  Get in Touch <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="img-fluid hero-img"
              style={{ maxWidth: "350px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
