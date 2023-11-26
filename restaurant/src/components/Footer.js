import React from 'react'

export default function Footer() {
  return (
    <>
     <footer className="padding-top bg_black">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6 footer_column">
        <h4 className="heading">Why Bistro?</h4>
        <hr className="half_space"/>
        <p className="half_space">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore dolor in hendrerit in vulputate.</p>
        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</p>
      </div>
      <div className="col-md-3 col-sm-6 footer_column">
        <h4 className="heading">Quick Links</h4>
        <hr className="half_space"/>
        <ul className="widget_links">
          <li><a href="index.html">Home</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="location.html">Locations</a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="faq.html">Faq's</a></li>
          <li><a href="order.html">Order Now</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="food.html">Food</a></li>
        </ul>
      </div>
      <div className="col-md-3 col-sm-6 footer_column">
        <h4 className="heading">Newsletter</h4>
        <hr className="half_space"/>
        <p className="icon"><i className="icon-dollar"></i>Sign up with your name and email to get updates fresh updates.</p>
        <div id="result1" className="text-center"></div>        
        
       <form action="http://themesindustry.us13.list-manage.com/subscribe/post-json?u=4d80221ea53f3a4487ddebd93&id=494727d648&c=?" method="get" onSubmit="return false" className="newsletter">
          <div className="form-group">
            <input type="email" placeholder="E-mail Address" required name="EMAIL" id="EMAIL" className="form-control" />
          </div>
          <div className="form-group">
            <input type="submit" className="btn-submit button3" value="Subscribe" />
          </div>
        </form>
      </div>
      <div className="col-md-3 col-sm-6 footer_column">
        <h4 className="heading">Get in Touch</h4>
        <hr className="half_space"/>
        <p>Restaurant, to consequat ipsum nec sagittis sem.</p>
        <p className="address"><i className="icon-location"></i>Restaurant, Manhattan 1258,New York, USA Lahore</p>
        <p className="address"><i className="fa fa-phone"></i>(+1) 234 567 8901</p>
        <p className="address"><i className="icon-dollar"></i><a href="mailto:hello@website.com">hello@website.com</a></p>
      </div> 
    </div>
    <div className="row">
     <div className="col-md-12">
        <div className="copyright clearfix">
          <p>Copyright &copy; 2016 Bistro. All Right Reserved</p>
          <ul className="social_icon">
               <li><a href="#" className="facebook"><i className="icon-facebook5"></i></a></li>
               <li><a href="#" className="twitter"><i className="icon-twitter4"></i></a></li>
               <li><a href="#" className="google"><i className="icon-google"></i></a></li>
              </ul>
        </div>
      </div>
    </div>
  </div>
</footer>   
    </>
  )
}
