import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    
    <>
    {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div> */}
        {/* <!-- Spinner End --> */}

        {/* <!-- Topbar Start --> */}
        <div className="container-fluid topbar-top bg-primary">
            <div className="container">
                <div className="d-flex justify-content-between topbar py-2">
                    <div className="d-flex align-items-center flex-shrink-0 topbar-info">
                        <a href="#" className="me-4 text-secondary"><i className="fas fa-map-marker-alt me-2 text-dark"></i>123 Street, CA, USA</a>
                        <a href="#" className="me-4 text-secondary"><i className="fas fa-phone-alt me-2 text-dark"></i>+01234567890</a>
                        <a href="#" className="text-secondary"><i className="fas fa-envelope me-2 text-dark"></i>Example@gmail.com</a>
                    </div>
                    <div className="text-end pe-4 me-4 border-end border-dark search-btn">
                        <div className="search-form">
                            <form method="post" action="index.html">
                                <div className="form-group">
                                    <div className="d-flex">
                                        <input type="search" className="form-control border-0 rounded-pill" name="search-input" value="" placeholder="Search Here" required=""/>
                                        <button type="submit" value="Search Now!" className="btn"><i className="fa fa-search text-dark"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center topbar-icon">
                        <a href="#" className="me-4"><i className="fab fa-facebook-f text-dark"></i></a>
                        <a href="#" className="me-4"><i className="fab fa-twitter text-dark"></i></a>
                        <a href="#" className="me-4"><i className="fab fa-instagram text-dark"></i></a>
                        <a href="#" className=""><i className="fab fa-linkedin-in text-dark"></i></a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Topbar End --> */}


        {/* <!-- Navbar Start --> */}
        <div className="container-fluid bg-dark">
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg py-lg-0">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="text-primary mb-0 display-5">Pest<span className="text-white">Kit</span><i className="fa fa-spider text-primary ms-2"></i></h1>
                    </a>
                    <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse me-n3" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Services</a>
                            <a href="project.html" className="nav-item nav-link">Projects</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0 bg-primary">
                                    <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                    <a href="blog.html" className="dropdown-item">Blog Post</a>
                                    <a href="team.html" className="dropdown-item">Team Members</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                            <Link to="/users" className="nav-item nav-link">Users</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar End --> */}
    </>
    
  )
}
