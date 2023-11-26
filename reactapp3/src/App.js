import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    
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
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar End --> */}


        {/* <!-- Carousel Start --> */}
        <div className="container-fluid carousel px-0 mb-5 pb-5">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="assests/img/carousel-2.jpg" className="img-fluid w-100" alt="First slide"/>
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h4 className="text-white mb-4 animated slideInDown">No 1 Pest Control Services</h4>
                                <h1 className="text-white display-1 mb-4 animated slideInDown">Enjoy Your Home Totally Pest Free</h1>
                                <a href="" className="me-2"><button type="button" className="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown">Read More</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="assests/img/carousel-1.jpg" className="img-fluid w-100" alt="Second slide"/>
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h4 className="text-white mb-4 animated slideInDown">No 1 Pest Control Services</h4>
                                <h1 className="text-white display-1 mb-4 animated slideInDown">Enjoy Your Home Totally Pest Free</h1>
                                <a href="" className="me-2"><button type="button" className="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown">Read More</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev btn btn-primary border border-2 border-start-0 border-primary" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next btn btn-primary border border-2 border-end-0 border-primary" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        {/* <!-- Carousel End --> */}

        
        {/* <!-- Get In Touch Start --> */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay=".3s">
            <div className="container py-5">
                <div className="bg-light px-4 py-5 rounded">
                    <div className="text-center">
                        <h1 className="display-5 mb-5">Find Your Pest Control Services</h1>
                    </div>
                    <form className="text-center mb-4" action="#">
                        <div className="row g-4">
                            <div className="col-xl-10 col-lg-12">
                                <div className="row g-4">
                                    <div className="col-md-6 col-xl-3">
                                        <select className="form-select p-3 border-0">
                                            <option value="Type Of Service" className="">Type Of Service</option>
                                            <option value="Pest Control-2">Pest Control-2</option>
                                            <option value="Pest Control-3">Pest Control-3</option>
                                            <option value="Pest Control-4">Pest Control-4</option>
                                            <option value="Pest Control-5">Pest Control-5</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 col-xl-3">
                                        <input type="text" className="form-control p-3 border-0" placeholder="Name"/>
                                    </div>
                                    <div className="col-md-6 col-xl-3">
                                        <input type="text" className="form-control p-3 border-0" placeholder="Phone"/>
                                    </div>
                                    <div className="col-md-6 col-xl-3">
                                        <input type="email" className="form-control p-3 border-0" placeholder="Email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-12">
                                <input type="button" className="btn btn-primary w-100 p-3 border-0" value="GET STARTED"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* <!-- Get In Touch End --> */}


        {/* <!-- About Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="about-img">
                            <div className="rotate-left bg-dark"></div>
                            <div className="rotate-right bg-dark"></div>
                            <img src="assests/img/about-img.jpg" className="img-fluid h-100" alt="img"/>
                            <div className="bg-white experiences">
                                <h1 className="display-3">20</h1>
                                <h6 className="fw-bold">Years Of Experiences</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".6s">
                        <div className="about-item overflow-hidden">
                            <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">About PestKit</h5>
                            <h1 className="display-5 mb-2">World Best Pest Control Services Since 2008</h1>
                            <p className="fs-5" style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <div className="row">
                                <div className="col-3">
                                    <div className="text-center">
                                        <div className="p-4 bg-dark rounded d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                            <i className="fas fa-city fa-4x text-primary"></i>
                                        </div>
                                        <div className="my-2">
                                            <h5>Building</h5>
                                            <h5>Cleaning</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="text-center">
                                        <div className="p-4 bg-dark rounded d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                            <i className="fas fa-school fa-4x text-primary"></i>
                                        </div>
                                        <div className="my-2">
                                            <h5>Education</h5>
                                            <h5>center</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="text-center">
                                        <div className="p-4 bg-dark rounded d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                            <i className="fas fa-warehouse fa-4x text-primary"></i>
                                        </div>
                                        <div className="my-2">
                                            <h5>Warehouse</h5>
                                            <h5>Cleaning</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="text-center">
                                        <div className="p-4 bg-dark rounded d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                            <i className="fas fa-hospital fa-4x text-primary"></i>
                                        </div>
                                        <div className="my-2">
                                            <h5>Hospital</h5>
                                            <h5>Cleaning</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-5">Find Services</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}


        {/* <!-- Services Start --> */}
        <div className="container-fluid services py-5">
            <div className="container text-center py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Services</h5>
                    <h1 className="display-5">Common Pest Control Services</h1>
                </div>
                <div className="row g-5">
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                    <i className="fa fa-spider fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h4>Spiders</h4>
                            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                        </div>
                    </div> 
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                    <i className="fa fa-spider fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h4 className="text-center">Mosquitos</h4>
                            <p className="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                    <i className="fa fa-spider fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h4 className="text-center">Rodents</h4>
                            <p className="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                    <i className="fa fa-spider fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h4 className="text-center">Termites</h4>
                            <p className="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-4 wow fadeInUp" data-wow-delay=".3s">More Services</button>
            </div>
        </div>
        {/* <!-- Services End --> */}


        {/* <!-- Project Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Project</h5>
                    <h1 className="display-5">Our recently completed projects</h1>
                </div>
                <div className="row g-5">
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src="assests/img/project-1.jpg" className="img-fluid h-100" alt="img"/>
                            <a href="" className="fs-4 fw-bold text-center">Whole Home Sanitizing</a>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src="assests/img/project-2.jpg" className="img-fluid h-100" alt="img"/>
                            <a href="" className="fs-4 fw-bold text-center">Education center Cleaning</a>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src="assests/img/project-3.jpg" className="img-fluid h-100" alt="img"/>
                            <a href="" className="fs-4 fw-bold text-center">Warehouse Cleaning</a>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src="assests/img/project-4.jpg" className="img-fluid h-100" alt="img"/>
                            <a href="" className="fs-4 fw-bold text-center">Hospital Cleaning</a>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src="assests/img/project-5.jpg" className="img-fluid h-100" alt="img"/>
                            <a href="" className="fs-4 fw-bold text-center">Factory Cleaning</a>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src="assests/img/project-6.jpg" className="img-fluid h-100" alt="img"/>
                            <a href="" className="fs-4 fw-bold text-center">Furniture Sanitizing</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Project End --> */}


        {/* <!-- Blog Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Blog</h5>
                    <h1 className="display-5">Latest Blog & News</h1>
                </div>
                <div className="owl-carousel blog-carousel wow fadeInUp" data-wow-delay=".5s">
                    <div className="blog-item">
                        <img src="assests/img/blog-1.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                         <div className="rounded-bottom bg-light">
                            <div className="d-flex justify-content-between p-4 pb-2">
                                <span className="pe-2 text-dark"><i className="fa fa-user me-2"></i>By Admin</span>
                                <span className="text-dark"><i className="fas fa-calendar-alt me-2"></i>10 Feb, 2023</span>
                            </div>
                            <div className="px-4 pb-0">
                                <h4>How To Build A Cleaning Plan</h4>
                                <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.</p>
                            </div>
                            <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                                <a href="#" type="button" className="btn btn-primary border-0">Learn More</a>
                                <a href="#" className="my-auto btn-primary border-0"><i className="fa fa-comments me-2"></i>23 Comments</a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-item">
                        <img src="assests/img/blog-3.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                         <div className="rounded-bottom bg-light">
                            <div className="d-flex justify-content-between p-4 pb-2">
                                <span className="pe-2 text-dark"><i className="fa fa-user me-2"></i>By Admin</span>
                                <span className="text-dark"><i className="fas fa-calendar-alt me-2"></i>10 Feb, 2023</span>
                            </div>
                            <div className="px-4 pb-0">
                                <h4>How To Build A Cleaning Plan</h4>
                                <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.</p>
                            </div>
                            <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                                <a href="#" type="button" className="btn btn-primary border-0">Learn More</a>
                                <a href="#" className="my-auto text-dark"><i className="fa fa-comments me-2"></i>23 Comments</a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-item">
                        <img src="assests/img/blog-2.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                         <div className="rounded-bottom bg-light">
                            <div className="d-flex justify-content-between p-4 pb-2">
                                <span className="pe-2 text-dark"><i className="fa fa-user me-2"></i>By Admin</span>
                                <span className="text-dark"><i className="fas fa-calendar-alt me-2"></i>10 Feb, 2023</span>
                            </div>
                            <div className="px-4 pb-0">
                                <h4>How To Build A Cleaning Plan</h4>
                                <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.</p>
                            </div>
                            <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                                <a href="#" type="button" className="btn btn-primary border-0">Learn More</a>
                                <a href="#" className="my-auto text-dark"><i className="fa fa-comments me-2"></i>23 Comments</a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-item">
                        <img src="assests/img/blog-1.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                         <div className="rounded-bottom bg-light">
                            <div className="d-flex justify-content-between p-4 pb-2">
                                <span className="pe-2 text-dark"><i className="fa fa-user me-2"></i>By Admin</span>
                                <span className="text-dark"><i className="fas fa-calendar-alt me-2"></i>10 Feb, 2023</span>
                            </div>
                            <div className="px-4 pb-0">
                                <h4>How To Build A Cleaning Plan</h4>
                                <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.</p>
                            </div>
                            <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                                <a href="#" type="button" className="btn btn-primary border-0">Learn More</a>
                                <a href="#" className="my-auto text-dark"><i className="fa fa-comments me-2"></i>23 Comments</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Blog End --> */}


        {/* <!-- Call To Action Start --> */}
        <div className="container-fluid py-5 call-to-action wow fadeInUp" data-wow-delay=".3s" style={{margin: "6rem 0"}}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <img src="assests/img/action.jpg" className="img-fluid w-100 rounded-circle p-5" alt=""/>
                    </div>
                    <div className="col-lg-6 my-auto">
                        <div className="text-start mt-4">
                            <h1 className="pb-4 text-white">Sign Up To Our Newsletter To Get The Latest Offers</h1>
                        </div>
                        <form method="post" action="index.html">
                            <div className="form-group">
                                <div className="d-flex call-btn">
                                    <input type="search" className="form-control py-3 px-4 w-100 border-0 rounded-0 rounded-end rounded-pill" name="search-input" value="" placeholder="Enter Your Email Address" required="Please enter a valid email"/>
                                    <button type="email" value="Search Now!" className="btn btn-primary border-0 rounded-pill rounded rounded-start px-5">Subscribe</button>
                                </div>
                            </div>
                        </form>  
                    </div>
                </div> 
            </div>
        </div>
        {/* <!-- Call To Action End --> */}


        {/* <!-- pricing Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Pricing</h5>
                    <h1 className="display-5 w-50 mx-auto">Affordable Pricing Plan For Pest Control Services</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="rounded bg-light pricing-item">
                            <div className="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
                                <h2 className="m-0">Basic</h2>
                            </div>
                            <div className="px-4 py-5 text-center bg-primary pricing-label mb-2">
                                <h1 className="mb-0">$60<span className="text-secondary fs-5 fw-normal">/mo</span></h1>
                                <p className="mb-0">Basic Pest Control</p>
                            </div>
                            <div className="p-4 text-center fs-5">
                                <p><i className="fa fa-check text-success me-2"></i>Household pests Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Rodent Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Re-Service at No-Charge</p>
                                <p><i className="fa fa-times text-danger me-2"></i>Termite Control</p>
                                <p><i className="fa fa-times text-danger me-2"></i>Mosquito Reduction</p>
                                <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="rounded bg-light pricing-item">
                            <div className="bg-dark py-3 px-5 text-center rounded-top border-bottom border-primary">
                                <h2 className="m-0 text-primary">Standerd</h2>
                            </div>
                            <div className="px-4 py-5 text-center bg-dark pricing-label pricing-featured mb-2">
                                <h1 className="mb-0 text-primary">$80<span className="fs-5 fw-normal">/mo</span></h1>
                                <p className="mb-0 text-white">Standard Pest Control</p>
                            </div>
                            <div className="p-4 text-center fs-5">
                                <p><i className="fa fa-check text-success me-2"></i>Household pests Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Rodent Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Re-Service at No-Charge</p>
                                <p><i className="fa fa-check text-success me-2"></i>Termite Control</p>
                                <p><i className="fa fa-times text-danger me-2"></i>Mosquito Reduction</p>
                                <button type="button" className="btn btn-dark border-0 text-primary rounded-pill px-4 py-3 mt-3">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="rounded bg-light pricing-item">
                            <div className="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
                                <h2 className="m-0">Premium</h2>
                            </div>
                            <div className="px-4 py-5 text-center bg-primary pricing-label mb-2">
                                <h1 className="mb-0">$120<span className="text-secondary fs-5 fw-normal">/mo</span></h1>
                                <p className="mb-0">Premium Pest Control</p>
                            </div>
                            <div className="p-4 text-center fs-5">
                                <p><i className="fa fa-check text-success me-2"></i>Household pests Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Rodent Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Re-Service at No-Charge</p>
                                <p><i className="fa fa-check text-success me-2"></i>Termite Control</p>
                                <p><i className="fa fa-check text-success me-2"></i>Mosquito Reduction</p>
                                <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Pricing End --> */}


        {/* <!-- Team Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Team</h5>
                    <h1 className="display-5 w-50 mx-auto">Our Team Members</h1>
                </div>
                <div className="row g-5">
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="rounded team-item">
                            <img src="assests/img/team-1..jpg" className="img-fluid w-100 rounded-top border border-bottom-0" alt=""/>
                            <div className="team-content bg-primary text-dark text-center py-3">
                                <span className="fs-4 fw-bold">Full Name</span>
                                <p className="text-muted mb-0">Designation</p>
                            </div>
                            <div className="team-icon d-flex flex-column ">
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="btn btn-primary border-0"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="rounded team-item">
                            <img src="assests/img/team-2.jpg" className="img-fluid w-100 rounded-top border border-bottom-0" alt=""/>
                            <div className="team-content bg-primary text-dark text-center py-3">
                                <span className="fs-4 fw-bold">Full Name</span>
                                <p className="text-muted mb-0">Designation</p>
                            </div>
                            <div className="team-icon d-flex flex-column ">
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="btn btn-primary border-0"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="rounded team-item">
                            <img src="assests/img/team-3.jpg" className="img-fluid w-100 rounded-top border border-bottom-0" alt=""/>
                            <div className="team-content bg-primary text-dark text-center py-3">
                                <span className="fs-4 fw-bold">Full Name</span>
                                <p className="text-muted mb-0">Designation</p>
                            </div>
                            <div className="team-icon d-flex flex-column ">
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="btn btn-primary border-0"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
                        <div className="rounded team-item">
                            <img src="assests/img/team-4.jpg" className="img-fluid w-100 rounded-top border border-bottom-0" alt=""/>
                            <div className="team-content bg-primary text-dark text-center py-3">
                                <span className="fs-4 fw-bold">Full Name</span>
                                <p className="text-muted mb-0">Designation</p>
                            </div>
                            <div className="team-icon d-flex flex-column ">
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="btn btn-primary border-0"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}


        {/* <!-- Testiminial Start --> */}
        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Testimonial</h5>
                    <h1 className="display-5 w-50 mx-auto">What Clients Say About Our Services</h1>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay=".5s">
                    <div className="testimonial-item">
                        <div className="testimonial-content rounded mb-4 p-4">
                            <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                        </div>
                        <div className="d-flex align-items-center  mb-4" style={{padding: "0 0 0 25px"}}>
                            <div className="position-relative">
                                <img src="assests/img/testimonial-1.jpg" className="img-fluid rounded-circle py-2" alt=""/>
                                <div className="position-absolute" style={{top: "33px", left: "-25px"}}>
                                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                </div>
                            </div>
                            <div className="ms-3">
                                <h4 className="mb-0">Client Name</h4>
                                <p className="mb-1">Profession</p>
                                <div className="d-flex">
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-content rounded mb-4 p-4">
                            <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                        </div>
                        <div className="d-flex align-items-center  mb-4" style={{padding:"0 0 0 25px"}}>
                            <div className="position-relative">
                                <img src="assests/img/testimonial-2.jpg" className="img-fluid rounded-circle py-2" alt=""/>
                                <div className="position-absolute" style={{top: "33px", left: "-25px"}}>
                                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                </div>
                            </div>
                            <div className="ms-3">
                                <h4 className="mb-0">Client Name</h4>
                                <p className="mb-1">Profession</p>
                                <div className="d-flex">
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-content rounded mb-4 p-4">
                            <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                        </div>
                        <div className="d-flex align-items-center  mb-4" style={{padding: "0 0 0 25px"}}>
                            <div className="position-relative">
                                <img src="assests/img/testimonial-3.jpg" className="img-fluid rounded-circle py-2" alt=""/>
                                <div className="position-absolute" style={{top: "33px", left: "-25px"}}>
                                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                </div>
                            </div>
                            <div className="ms-3">
                                <h4 className="mb-0">Client Name</h4>
                                <p className="mb-1">Profession</p>
                                <div className="d-flex">
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-content rounded mb-4 p-4">
                            <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                        </div>
                        <div className="d-flex align-items-center  mb-4" style={{padding: "0 0 0 25px"}}>
                            <div className="position-relative">
                                <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle py-2" alt=""/>
                                <div className="position-absolute" style={{top: "33px", left: "-25px"}}>
                                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                </div>
                            </div>
                            <div className="ms-3">
                                <h4 className="mb-0">Client Name</h4>
                                <p className="mb-1">Profession</p>
                                <div className="d-flex">
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                    <small className="fas fa-star text-primary me-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testiminial End --> */}


        {/* <!-- Footer Start --> */}
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay=".3s">
            <div className="container py-5">
                <div className="row g-4 footer-inner">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-white fw-bold mb-4">About PestKit.</h4>
                            <p>Nostrud exertation ullamco labor nisi aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                            <p className="mb-0"><a className="" href="#">PestKit </a> &copy; 2023 All Right Reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-white fw-bold mb-4">Usefull Link</h4>
                            <div className="d-flex flex-column align-items-start">
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>About Us</a>
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Contact Us</a>
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Our Services</a>
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Terms & Condition</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-white fw-bold mb-4">Services Link</h4>
                            <div className="d-flex flex-column align-items-start">
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Apartment Cleaning</a>
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Office Cleaning</a>
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Car Washing</a>
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Green Cleaning</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-white fw-bold mb-4">Contact Us</h4>
                            <a href="" className="btn btn-link w-100 text-start ps-0 pb-3 border-bottom rounded-0"><i className="fa fa-map-marker-alt me-3"></i>123 Street, CA, USA</a>
                            <a href="" className="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</a>
                            <a href="" className="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><i className="fa fa-envelope me-3"></i>info@example.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}



        {/* <!-- Copyright Start --> */}
        <div className="container-fluid copyright bg-dark py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                        <a href="#" className="text-primary mb-0 display-6">Pest<span className="text-white">Kit</span><i className="fa fa-spider text-primary ms-2"></i></a>
                    </div>
                    <div className="col-md-4 copyright-btn text-center text-md-start mb-3 mb-md-0 flex-shrink-0">
                        <a className="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-md-4 my-auto text-center text-md-end text-white">
                        
                        Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br/>Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>
        
        

        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-primary rounded-circle border-3 back-to-top"><i className="fa fa-arrow-up"></i></a>

    </>
  );
}

export default App;
