import React from "react";

function AboutSection() {
  return (
    <div className="row px-4 py-5 my-5 text-center w-100" id="hero">
      <div className="col align-self-center w-100">
        <h1 className="display-5 fw-bold mb-5">About</h1>
        <div className="col-lg-6 text-start mx-auto">
          <p className="lead mb-4">
              Hi there, My name is <b>Abdul Shakoor Abdul Azeem Mousa</b> known as 
              <b> Shoukrey Tom</b>.<br/>
              I am a passionate self-taught Software Developer who is specialized on 
              developing Web Applications and REST APIs with Django and Python.<br/>
              I code in other programming languages like C, Java, and JavaScript but Python is
              my favorite one.<br/>
              I have 2+ years in developing desktop applications with Java&JavaFX and spent 2 years in 
              developing web applications.<br/>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
