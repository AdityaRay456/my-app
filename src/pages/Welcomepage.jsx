import "animate.css/animate.min.css"; // Import Animate.css
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div
      className="container-fluid min-vh-100"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <img
              src="/logo.jpg.webp"
              alt="GovProjects Logo"
              className="me-2"
              style={{ height: "50px" }}
            />
            NIRMAAN
          </a>
          <p
            className="lead mt-3 w-50"
            style={{
              position: "absolute",
              top: "30%",
              right: "0%", // Adjusted for spacing
              left: "45%",
              textDecoration: "bold",
              transform: "translate(-50%, -50%)",
              mixBlendMode: "overlay",
              backdropFilter: "blur(0px)",
              fontSizeAdjust: "0.5",
              color: "rgba(255, 232, 232, 0.8)",
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
            }}
          >
            Efficiently manage infrastructure projects across India.
          </p>
          <div className="d-flex animate__animated animate__slideInLeft">
            <a href="#about" className="nav-link text-white mx-3">
              About
            </a>
            <a href="#contact" className="nav-link text-white mx-3">
              Contact
            </a>
            <a href="#contact" className="nav-link text-white mx-3">
              Help
            </a>
            <button className="btn btn-success ms-3 fw-semibold animate__animated animate__pulse animate__infinite">
              Login / Signup
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="text-center p-5 d-flex flex-column align-items-center justify-content-center bg-fade text-white animate__animated animate__fadeIn"
        style={{
          backgroundImage: "url('/gov-project-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
        }}
      >
        <h2
          className="h1 fw-bold"
          style={{
            position: "absolute", // Keeps text over the monument
            top: "50%", // Centers vertically
            left: "50%", // Centers horizontally
            transform: "translate(-50%, -50%)",
            mixBlendMode: "overlay", // Blends text into the background
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)", // Adds slight blur for readability
            color: "white", // Keeps text readable
            textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)", // Improves visibility
            fontWeight: "bold",
          }}
        >
          Connecting Government with Contractors
        </h2>

        <div className="mt-4">
          <Link
            to="/government-login"
            className="btn btn-transparent shadow px-5 py-3 mx-2"
          >
            Government Login
          </Link>
          <Link
            to="/contractor-signup"
            className="btn btn-transparent shadow px-5 py-3 mx-2"
          >
            Contractor Signup
          </Link>
        </div>
      </header>

      {/* How It Works Section */}
      <section id="about" className="container my-5 text-center">
        <h3 className="fw-bold mb-4 animate__animated animate__fadeInUp">
          How It Works
        </h3>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card p-4 bg-light shadow-sm animate__animated animate__fadeInUp">
              <h5 className="btn btn-warning fw-semibold">
                Government Uploads Project
              </h5>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card p-4 bg-light shadow-sm animate__animated animate__fadeInUp">
              <h5 className="btn btn-info fw-semibold">
                Contractors Get Notified
              </h5>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card p-4 bg-light shadow-sm animate__animated animate__fadeInUp">
              <h5 className="btn btn-success fw-semibold">
                Workers Join & Work
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-primary text-white text-center py-3 animate__animated animate__fadeInDown"
      >
        <p className="mb-0">&copy; 2025 GovProjects. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
