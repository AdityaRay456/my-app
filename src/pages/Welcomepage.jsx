import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const WelcomePage = () => {
  
  return (
    <div
      className="container-fluid min-vh-100"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <img
              src="/logo.jpg.webp"
              alt ="GovProjects Logo"
              className="me-2"
              
              style={{ height: "50px" }}
            />
            GovProjects
          </a>
          <div className="d-flex">
            <a href="#about" className="nav-link text-white mx-3">
              About
            </a>
            <a href="#contact" className="nav-link text-white mx-3">
              Contact
            </a>
            <button className="btn btn-warning ms-3 fw-semibold">
              Login / Signup
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="text-center p-5 d-flex flex-column align-items-center justify-content-center bg-dark text-white"
        style={{
          backgroundImage: "url('/gov-project-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
        }}
      >
        <h2 className="display-6 fw-bold">
          Connecting Government with Contractors
        </h2>
        <p className="lead mt-3 w-50">
          Efficiently manage infrastructure projects across India.
        </p>
        <div className="mt-4">
          <Link
            to="/government-login"
            className="btn btn-success px-4 py-2 mx-2"
          >
            Government Login
          </Link>
          <Link to="/contractor-signup" className="btn btn-warning px-4 py-2">
            Contractor Signup
          </Link>
        </div>
      </header>

      {/* How It Works Section */}
      <section id="about" className="container my-5 text-center">
        <h3 className="fw-bold mb-4">How It Works</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-4 bg-light shadow-sm">
              <h5 className="fw-semibold">Government Uploads Project</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 bg-light shadow-sm">
              <h5 className="fw-semibold">Contractors Get Notified</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 bg-light shadow-sm">
              <h5 className="fw-semibold">Workers Join & Work</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-white text-center py-3">
        <p className="mb-0">&copy; 2025 GovProjects. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
