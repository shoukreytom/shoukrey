import React from "react";

function SkillsSection() {
  return (
    <div className="container px-4 py-5 my-5 w-100" id="hero">
      <h1 className="display-5 fw-bold mb-5">My Skills</h1>
      <div class="row">
        <div class="col-lg-6">
          <span className="display-blok fw-bold my-2">Python</span>
          <div class="progress mb-2">
            <div
              className="progress-bar"
              style={{width: '90%'}}
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>

          <span className="display-blok fw-bold my-2">C</span>
          <div class="progress mb-2">
            <div
              className="progress-bar"
              style={{width:'90%'}}
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>

          <span className="display-blok fw-bold my-2">Java</span>
          <div class="progress mb-2">
            <div
              className="progress-bar"
              style={{width:'80%'}}
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>

          <span className="display-blok fw-bold my-2">JavaScript</span>
          <div class="progress mb-2">
            <div
              className="progress-bar"
              style={{width:'60%'}}
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>

          <span className="display-blok fw-bold my-2">HTML</span>
          <div class="progress mb-2">
            <div
              className="progress-bar"
              style={{width:'90%'}}
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>

          <span className="display-blok fw-bold my-2">CSS</span>
          <div class="progress mb-2">
            <div
              className="progress-bar"
              style={{width:'70%'}}
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>
        </div>

        <div class="col-lg-6">
        <span className="display-blok fw-bold my-2">Django</span>
          <div class="progress mb-2">
            <div
              className="progress-bar"
              style={{width:'90%'}}
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>

          <span className="display-blok fw-bold my-2">Django REST Framework</span>
          <div class="progress mb-2">
            <div
              className="progress-bar"
              style={{width:'90%'}}
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>

          <span className="display-blok fw-bold my-2">React</span>
          <div class="progress mb-2">
            <div
              className="progress-bar"
              style={{width:'70%'}}
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>

          <span className="display-blok fw-bold my-2">Bootstrap</span>
          <div class="progress mb-2">
            <div
              className="progress-bar"
              style={{width:'80%'}}
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>
          <span className="display-blok fw-bold my-2">Git</span>
          <div class="progress mb-2">
            <div
              className="progress-bar"
              style={{width:'90%'}}
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>
          <span className="display-blok fw-bold my-2">Github</span>
          <div class="progress mb-2">
            <div
              className="progress-bar"
              style={{width:'80%'}}
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
