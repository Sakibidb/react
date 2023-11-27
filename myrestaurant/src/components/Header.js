import React from 'react'

export default function Header() {
  return (
    <>
     <header id="main-navigation">
  <div id="navigation" data-spy="affix" data-offset-top="20">
    <div className="container">
      <div className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#fixed-collapse-navbar" aria-expanded="false"> 
            <span className="icon-bar top-bar"></span> <span className="icon-bar middle-bar"></span> <span className="icon-bar bottom-bar"></span> 
            </button>
           <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" className="img-responsive"/></a> 
         </div>
        
            <div id="fixed-collapse-navbar" className="navbar-collapse collapse navbar-right">
              <ul className="nav navbar-nav">
                <li className="dropdown active">
                   <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home</a>
                   <ul className="dropdown-menu">
                    <li><a href="index.html">Home V1</a></li>
                    <li><a href="index2.html">Home V2</a></li>
                  </ul>
                </li>
                <li><a href="food.html">Our Food</a></li>
                
                <li className="dropdown">
                  <a data-toggle="dropdown" href="#" className="dropdown-toggle">pages</a>
                  <ul className="dropdown-menu">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="blog-detail.html">Blog Detail</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                  </ul>
                 </li>
                <li className="dropdown">
                  <a data-toggle="dropdown" href="#" className="dropdown-toggle">gallery</a>
                  <ul className="dropdown-menu">
                    <li><a href="gallery.html">Gallery Three</a></li>
                    <li><a href="gallery4c.html">Gallery Four column</a></li>
                    <li><a href="gallery2c.html">Gallery Two column</a></li>
                  </ul>
                </li>
                <li><a href="blog.html">blog</a></li>
                <li><a href="order.html">Order Now</a></li>
                <li className="dropdown">
                  <a data-toggle="dropdown" href="#" className="dropdown-toggle">Location</a>
                  <ul className="dropdown-menu">
                    <li><a href="location.html">Location V1</a></li>
                    <li><a href="location2.html">Location V2</a></li>
                  </ul>
                </li>
              </ul>
            </div>
         </nav>
         </div>
       </div>
     </div>
  </div>
</header>   
    </>
  )
}
