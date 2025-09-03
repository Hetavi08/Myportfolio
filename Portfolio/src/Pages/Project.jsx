import React, { useState } from "react";
import Header from "../Common Pages/Header";
import Footer from "../Common Pages/Footer";
import { projects } from "../Data/Project";
import { Modal } from "react-bootstrap";

const Project = () => {
  let [showModal, setShowModal] = useState(false);
  let [activeProject, setActiveProject] = useState(null);

  let handleShow = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  let handleClose = () => {
    setShowModal(false);
    setActiveProject(null);
  };

  return (
    <>
      <Header />

      <h1 className="text-center pt-5 fw-normal">Featured Projects</h1>

      <div className="container pt-5">
        {projects.map((v, i) => (
          <section
            key={i}
            className="rounded-3 position-relative mb-5"
            style={{
              background: `url(${v.image}) center center / cover no-repeat`,
              minHeight: "400px",
            }}
          >
            {/* Card */}
            <div
              className="bg-dark bg-opacity-75 text-white p-4 rounded shadow project-card"
              style={{
                maxWidth: "500px",
                position: "absolute",
                bottom: "30px",
                left: "30px",
              }}
            >
              <h3>{v.title}</h3>
              <p>{v.description}</p>
              <button
                className="btn btn-outline-light"
                onClick={() => handleShow(v)}
              >
                View Project 
              </button>

              {/* Tags */}
              <div className="mt-3 d-flex flex-wrap gap-1 p-2 justify-content-end">
                {[v.tag1, v.tag2, v.tag3, v.tag4].map(
                  (tag, idx) =>
                    tag && (
                      <span
                        key={idx}
                        className="badge bg-secondary fw-normal fs-6 py-1 px-2"
                      >
                        {tag}
                      </span>
                    )
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Modal for project details */}
        <Modal show={showModal} onHide={handleClose} centered size="lg">
          <Modal.Body className="bg-light p-4">
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3"
              onClick={handleClose}
              aria-label="Close"
            ></button>

            <div className="row g-4">
              {/* Left Column (Image) */}
              <div className="col-12 col-md-6">
                <img
                  src={activeProject?.image1}
                  alt={activeProject?.title}
                  className="img-fluid rounded shadow-sm w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Right Column (Content) */}
              <div className="col-12 col-md-6">
                <h4>{activeProject?.title}</h4>
                <hr />
                <p className="text-muted">{activeProject?.description1}</p>
                <p className="text-muted">
                  <strong>Type:</strong> {activeProject?.type}
                </p>
                <p className="text-muted">
                  <strong>Languages:</strong> {activeProject?.languages}
                </p>
                <p className="text-muted">
                  <strong>Platform:</strong> {activeProject?.platform}
                </p>

                {activeProject?.designTools && (
                  <p className="text-muted">
                    <strong>Design Tools:</strong> {activeProject?.designTools}
                  </p>
                )}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <Footer />

    </>
  );
};

export default Project;
