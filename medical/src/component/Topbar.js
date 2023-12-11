import React from "react";

export default function Topbar() {
  return (
    <>
  <div id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex justify-content-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">contact@example.com</a>
        <i className="bi bi-phone" /> +1 5589 55488 55
      </div>
      <div className="d-none d-lg-flex social-links align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
      </div>
    </div>
  </div>
    </>
  );
}
