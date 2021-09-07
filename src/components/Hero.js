import React from "react";
import "../css/Main.css";

function Hero() {
  return (
    <div className="row px-4 py-5 my-5 text-center w-100" id="hero">
      <div className="col align-self-center  w-100">
        <h1 className="display-5 fw-bold" id="hero-title">
          Shoukrey Tom
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            A Back End Developer, with great experience in Developing Web
            Applications and REST APIs using one of the most Secure Frameworks
            (Django) and one of the most used programming languages (Python).
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
