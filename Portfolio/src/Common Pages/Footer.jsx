import React from "react";
import "../CSS/Footer.css"

const Footer = () => {
  return (
    <div className="container-fluid bg-black py-5 px-3">
      <div className="container">
        <div className="row text-center text-md-start justify-content-between">
          {/* Phone */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <strong className=" text-light">Phone</strong>
            <p className="mb-0">
              <i className="bi bi-telephone icon me-1"></i>
              <a href="tel:+919173767309">
                <span className="fs-monospace fs-6">+91 9173767309</span>
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <strong className=" text-light">Email</strong>
            <p className="mb-0">
              <i className="bi bi-envelope icon me-1"></i>
              <a href="mailto:hetavidesai08@gmail.com">
                <span className="fs-monospace fs-6">hetavidesai08@gmail.com</span>
              </a>
            </p>
          </div>

          {/* Socials */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <strong className="d-block text-light">Follow Me</strong>
            <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-2">
              
              <a
                href="https://www.instagram.com/hetavi_008?igsh=MWFoMTVmODJ6OG44Mg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram icon fs-5"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/hetavi-desai-21b0372b1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
           
              >
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <p className="mb-0">
              <span className="fs-6 text-light"> <i class="bi bi-c-circle icon"></i> 2025 Hetavi Desai</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
