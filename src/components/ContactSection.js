import React from "react";
import $ from "jquery";

function sendMessage(event) {
  event.preventDefault();
  const loadingSpinner = document.getElementById("spinner");
  const messageBar = document.getElementById("msg-bar");
  messageBar.classList.add("hide-msg-bar");   // hides message bar
  loadingSpinner.classList.remove("hide-spinner");  // shows loading spinner
  const sendBtn = document.getElementById("send-btn");
  sendBtn.classList.add("disabled");  // disable send Button
  const name = $("#name").val();
  const email = $("#email").val();
  const subject = $("#subject").val();
  const message = $("#message").val();
  if(name && email && subject && message) {
    $.ajax({
      url: "https://shoukrey.herokuapp.com/api/portfolio/email/",
      type: "post",
      data: {name: name, email: email, subject: subject, message:message},
      success: function(result) {
        loadingSpinner.classList.add("hide-spinner");   // hides loading spinner
        messageBar.classList.remove("hide-msg-bar");    // shows message bar
        messageBar.innerText = result.message;
        sendBtn.classList.remove("disabled");   // enable send button
      },
      error: function(result) {
        loadingSpinner.classList.add("hide-spinner");   // hides loading spinner
        messageBar.classList.remove("hide-msg-bar");    // shows message bar
        messageBar.classList.remove("alert-success");
        messageBar.classList.add("alert-danger");
        messageBar.innerText = "failed to send your email!! please try again.";
        sendBtn.classList.remove("disabled"); // enable send button
      }
    })
  }
}

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
            {/* Loading Spinner */}
            <div className="text-center py-4 hide-spinner" id="spinner">
              <div
                className="spinner-border text-success"
                style={{ width: "3rem", height: "3rem"}}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            {/* END Loading Spinner */}

            {/* Response Message */}
            <div className="text-center py-4">
              <div className="alert alert-success hide-msg-bar" id="msg-bar"></div>
            </div>
            {/* END Response Message */}

            <button id="send-btn" className="btn btn-success mt-2" onClick={sendMessage}>Send message</button>
          </form>
        </div>

        {/* Social Links */}
        <div className="col d-grid gap-2 d-sm-flex justify-content-sm-center">
//           <a
//             href="https://web.facebook.com/shoukreytom/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img
//               src="https://img.icons8.com/fluency/96/000000/facebook.png"
//               alt="Facebook"
//             />
//           </a>
          <a
            href="https://twitter.com/shoukreytom/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/96/000000/twitter--v1.png"
              alt="Twitter"
            />
          </a>
          <a
            href="https://linkedin.com/in/shoukreytom/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluency/96/000000/linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://t.me/shoukreytom" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color-glass/96/000000/telegram-app.png"
              alt="Telegram"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
