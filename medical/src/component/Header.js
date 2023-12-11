import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
  {/* ======= Header ======= */}
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="index.html">Medilab</a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
          <li><Link className="nav-link scrollto" to="/about">About</Link></li>
          <li><Link className="nav-link scrollto" to="/service">Services</Link></li>
          <li><Link className="nav-link scrollto" to="/department">Departments</Link></li>
          <li><Link className="nav-link scrollto" to="/doctors">Doctors</Link></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
      <Link to="/appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</Link>
    </div>
  </header>{/* End Header */}

    </>
  )
}
