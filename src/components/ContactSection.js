import React from "react";

function ContactSection() {
  return (
    <div className="container py-5 my-5 text-center">
      <h1 className="display-5 fw-bold my-4">Contact</h1>
      <div className="row justify-content-center my-2">
        <div className="col-lg-9 text-center mb-5 w-80">
          <form>
            <div className="form-group my-2">
              <input
                className="form-control"
                type="text"
                placeholder="Full Name"
                id="name"
                required
              />
            </div>
            <div className="form-group my-2">
              <input
                className="form-control"
                type="email"
                placeholder="example@host.com"
                id="email"
                required
              />
            </div>
            <div className="form-group my-2">
              <input
                className="form-control"
                type="text"
                placeholder="Subject"
                id="subject"
                required
              />
            </div>
            <div className="form-group my-2">
              <textarea
                className="form-control"
                placeholder="Message"
                id="message"
                required
              ></textarea>
            </div>
            <button className="btn btn-success">Send message</button>
          </form>
        </div>
        <div className="col d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="https://web.facebook.com/shoukreytom/" target="_blank">
            <img src="https://img.icons8.com/fluency/96/000000/facebook.png" />
          </a>
          <a href="https://twitter.com/shoukreytom/" target="_blank">
            <img src="https://img.icons8.com/color/96/000000/twitter--v1.png" />
          </a>
          <a href="https://linkedin.com/in/shoukreytom/" target="_blank">
            <img src="https://img.icons8.com/fluency/96/000000/linkedin.png" />
          </a>
          <a href="https://t.me/shoukreytom" target="_blank">
            <img src="https://img.icons8.com/color-glass/96/000000/telegram-app.png" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
