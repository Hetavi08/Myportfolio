import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-black sticky-top shadow-sm" style={{ height: '60px' }}>
        <div className="container-fluid px-4 d-flex align-items-center">
          {/* Logo */}
          <Link className="navbar-brand fw-bold me-5 fs-4" to="/">
            hetavi<span style={{ color: '#ffe600' }}>.</span>
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>

          {/* Nav links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav fw-semibold gap-3">
              <li className="nav-item">
                <Link to="/" className="nav-link active text-white" aria-current="page">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link text-white">SERVICES</Link>
              </li>
              <li className="nav-item">
                <Link to="/project" className="nav-link text-white">PROJECTS</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white">ABOUT ME</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">CONTACT</Link>
              </li>
            </ul>
          </div>

          {/* Let's Talk button */}
          <div className="d-none d-md-flex justify-content-center align-items-center p-2 ">
            <Link to="/contact" className="btn btn-dark fw-semibold px-4 py-1 border-2 border-warning" style={{ whiteSpace: 'nowrap' }}>
              Let's Talk
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
