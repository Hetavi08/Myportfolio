import React, { useState } from "react";
import Header from "../Common Pages/Header";
import Footer from "../Common Pages/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let [errors, setErrors] = useState({});

  let handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  let validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  let validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Email is invalid";
    return newErrors;
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors.");
      return;
    }

    setErrors({});
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Header />


      <div className="container-fluid bg-light">
   
        <div className="row g-0">
          {/* Left Section: Contact Form */}
          <div className="col-12 col-md-6 bg-dark text-light d-flex align-items-center">
            <div className="w-100 px-4 py-5">
              <h2 className="mb-4">Let's Work Together</h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Your subject"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-light fw-semibold px-4 py-2">
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Right Section: Contact Info and Map */}
          <div className="col-12 col-md-6 bg-dark text-light d-flex align-items-center">
            <div className="w-100 px-4 py-5">
              <h2 className="mb-4">Let's Discuss Your Project</h2>

              <div className="mb-4 d-flex">
                <i className="bi bi-telephone-fill fs-4 me-3"></i>
                <div>
                  <h5 className="mb-1">Phone</h5>
                  <a href="tel:+919173767309" className="text-light text-decoration-none">
                    +91 9173767309
                  </a>
                </div>
              </div>

              <div className="mb-4 d-flex">
                <i className="bi bi-envelope-fill fs-4 me-3"></i>
                <div>
                  <h5 className="mb-1">Mail</h5>
                  <a href="mailto:hetavidesai08@gmail.com" className="text-light text-decoration-none">
                    hetavidesai08@gmail.com
                  </a>
                </div>
              </div>

              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5698831137124!2d72.61223007436699!3d23.002838817066223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85df5e9c45c7%3A0x60481b3286d3d5c4!2sAryoday%20Society%2C%207%2C%20Nandeshwar%20Society%2C%20Maninagar%20East%2C%20Khokhra%2C%20Ahmedabad%2C%20Gujarat%20380008!5e0!3m2!1sen!2sin!4v1755364546217!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};

export default Contact;
