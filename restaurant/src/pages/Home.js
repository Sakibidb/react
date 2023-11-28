import React from 'react'
import Slider from './Slider'

export default function Home() {
  return (
    
    <>
    <Slider></Slider>
     {/* <!--Features Section--> */}
<section className="feature_wrap padding-half" id="specialities">
  <div className="container">
    <div className="row">
     <div className="col-md-12 text-center">
        <h2 className="heading ">Our &nbsp; Specialities</h2>
        <hr className="heading_space"/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6 feature text-center">
        <i className="icon-glass"></i>
        <h3><a href="services.html">Dinner &amp; Dessert</a></h3>
        <p> you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing onsectetur.</p>
      </div>
      <div className="col-md-3 col-sm-6 feature text-center">
        <i className="icon-coffee"></i>
        <h3><a href="services.html">Breakfast</a></h3>
        <p> you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing onsectetur Graphic.</p>
      </div>
      <div className="col-md-3 col-sm-6 feature text-center">
        <i className="icon-glass"></i>
        <h3><a href="services.html">Ice Shakes</a></h3>
        <p> you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing onsectetur Graphic Power.</p>
      </div>
      <div className="col-md-3 col-sm-6 feature text-center">
        <i className="icon-coffee"></i>
        <h3><a href="services.html">Beverges</a></h3>
        <p> you need a doctor for to coansectetuer Lorem ipsum dolor, consectetur adipiscing.</p>
      </div>
    </div>
    
  </div>
</section>


{/* <!--Services plus working hours--> */}
<section id="services" className="padding-bottom">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
         <h2 className="heading">Featured &nbsp; Food</h2>
         <hr className="heading_space"/>
         <div className="slider_wrap">
        <div id="service-slider" className="owl-carousel">
          <div className="item">
            <div className="item_inner">
            <div className="image">
              <img src="assets/images/food-1.jpg" alt="Services Image"/>
              <a  href="services.html"></a>
            </div>
              <h3><a href="services.html">Lorem ipsum dolor</a></h3>
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis.</p>
            </div>
          </div>
          <div className="item">
            <div className="item_inner">
              <div className="image">
              <img src="assets/images/food-2.jpg" alt="Services Image"/>
              <a  href="services.html"></a>
              </div>
              <h3><a href="services.html">Lorem samet</a></h3>
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis.</p>
            </div>
          </div>
          <div className="item">
            <div className="item_inner">
              <div className="image">
              <img src="assets/images/food-3.jpg" alt="Services Image"/>
              <a  href="services.html"></a>
              </div>
              <h3><a href="services.html">Lorem ipsum dolor s amet</a></h3>
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis.</p>
            </div>
          </div>
          <div className="item">
            <div className="item_inner">
              <div className="image">
              <img src="assets/images/food-4.jpg" alt="Services Image"/>
              <a  href="services.html"></a>
              </div>
              <h3><a href="services.html">Lorem samet</a></h3>
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="col-md-4">
        <h2 className="heading">Our &nbsp; Menu</h2>
        <hr className="heading_space"/>
        <ul className="menu_widget">
          <li>classNameic Nachos<span>$499.00</span></li>
          <li>Nachos Grande<span>$249.00</span></li>
          <li>Avocado Shell Stuffed<span>$150.00</span></li>
          <li>Stuffed Mushroom<span>$199.00</span></li>
          <li>Baked Potato Jackets<span>$99.00</span></li>
          <li>Mexican Taco<span>$899.00</span></li>
          <li>Tex-Mex Chicken<span>$1250.00</span></li>
          <li>Quesadillas Acapulco<span>$399.00</span></li>
        </ul>
         <h3>Other Special Menu</h3>
         <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse <strong>molestie consequat</strong>, vel illum dolore nulla facilisis.</p>
      </div>
    </div>
  </div>
</section>


{/* <!-- image with content --> */}
<section className="info_section paralax">
  <div className="container">
    <div className="row">
      <div className="col-md-2"> </div>
      <div className="col-md-8">
         <div className="text-center">
         <h2 className="heading_space">HOT Deal of the Day</h2>
         <p className="heading_space detail">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis. velit esse molestie consequat, vel illum dolore nulla facilisis.</p>
         <a href="#order-form" className="btn-common-white page-scroll">Order Now</a>
         </div>          
      </div>
      <div className="col-md-2"></div>
    </div>
  </div>
</section>



{/* <!-- Food Gallery --> */}
<section id="gallery" className="padding">
  <div className="container">
      <div className="row">
     <div className="col-md-12 text-center">
        <h2 className="heading ">Delicious &nbsp; Food</h2>
        <hr className="heading_space"/>
        <div className="work-filter">
          <ul className="text-center">
             <li><a href="javascript:;" data-filter="all" className="active filter">All Food</a></li>
             <li><a href="javascript:;" data-filter=".starters" className="filter">Starters</a></li>
             <li><a href="javascript:;" data-filter=".drinks" className="filter">Drinks & Beverges</a></li>
             <li><a href="javascript:;" data-filter=".dinner" className="filter"> Dinner</a></li>
             <li><a href="javascript:;" data-filter=".lunch" className="filter">Breakfast & Lunch</a></li>
          </ul>
        </div>
      </div>
    </div>
     <div className="row">
      <div className="zerogrid">
        <div className="wrap-container">
          <div className="wrap-content clearfix home-gallery">
            <div className="col-1-4 mix work-item drinks">
              <div className="wrap-col">
                <div className="item-container">
                  <div className="image">
                    <img src="assets/images/gallery1.jpg" alt="cook"/>
                    <div className="overlay">
                        <a className="video fancybox.iframe overlay-inner" href="https://player.vimeo.com/video/94224205?autoplay=1"><i className=" icon-eye6"></i></a>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <div className="col-1-4 mix work-item starters">
              <div className="wrap-col">
                <div className="item-container">
                  <div className="image">
                    <img src="assets/images/galler2.jpg" alt="cook"/>
                    <div className="overlay">
                        <a className="fancybox overlay-inner" href="assets/images/galler2.jpg" data-fancybox-group="gallery"><i className=" icon-eye6"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-4 mix work-item dinner">
              <div className="wrap-col">
                <div className="item-container">
                  <div className="image">
                    <img src="assets/images/gallery3.jpg" alt="cook"/>
                    <div className="overlay">
                        <a className="fancybox overlay-inner" href="assets/images/gallery3.jpg" data-fancybox-group="gallery"><i className=" icon-eye6"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-4 mix work-item drinks">
              <div className="wrap-col">
                <div className="item-container">
                  <div className="image">
                    <img src="assets/images/gallery4.jpg" alt="cook"/>
                    <div className="overlay">
                        <a className="fancybox overlay-inner" href="assets/images/gallery4.jpg" data-fancybox-group="gallery"><i className=" icon-eye6"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
            <div className="col-1-4 mix work-item dinner">
              <div className="wrap-col">
                <div className="item-container">
                  <div className="image">
                    <img src="assets/images/gallery5.jpg" alt="cook"/>
                    <div className="overlay">
                        <a className="fancybox overlay-inner" href="assets/images/gallery5.jpg" data-fancybox-group="gallery"><i className=" icon-eye6"></i></a>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-4 mix work-item lunch">
              <div className="wrap-col">
                <div className="item-container">
                  <div className="image">
                    <img src="assets/images/gallery6.jpg" alt="cook"/>
                    <div className="overlay">
                        <a className="fancybox overlay-inner" href="assets/images/gallery6.jpg" data-fancybox-group="gallery"><i className=" icon-eye6"></i></a>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <div className="col-1-4 mix work-item starters">
              <div className="wrap-col">
                <div className="item-container">
                  <div className="image">
                    <img src="assets/images/gallery7.jpg" alt="cook"/>
                    <div className="overlay">
                        <a className="fancybox overlay-inner" href="assets/images/gallery7.jpg" data-fancybox-group="gallery"><i className=" icon-eye6"></i></a>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <div className="col-1-4 mix work-item starters">
              <div className="wrap-col">
                <div className="item-container">
                  <div className="image">
                    <img src="assets/images/gallery8.jpg" alt="cook"/>
                    <div className="overlay">
                      <a className="video fancybox.iframe overlay-inner" href="https://player.vimeo.com/video/94224205?autoplay=1"><i className=" icon-eye6"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
  </div>
</section>




{/* <!-- facts counter  --> */}
<section id="facts">
  <div className="container">
    <div className="row number-counters"> 
      {/* <!-- first count item --> */}
      <div className="col-sm-3 col-xs-12 text-center wow fadeInDown" data-wow-duration="500ms" data-wow-delay="300ms">
        <div className="counters-item row">
        <i className="icon-smile"></i> 
        <h2><strong data-to="4680">0</strong></h2>
          <p>Happy Customers</p>
        </div>
      </div>
      <div className="col-sm-3 col-xs-12 text-center wow fadeInDown" data-wow-duration="500ms" data-wow-delay="600ms">
        <div className="counters-item  row"> 
        <i className="icon-food"></i>
        <h2><strong data-to="865">0</strong></h2>
          <p>Dishes Served</p>
        </div>
      </div>
      <div className="col-sm-3 col-xs-12 text-center wow fadeInDown" data-wow-duration="500ms" data-wow-delay="900ms">
        
        <div className="counters-item  row"> 
        <i className="icon-glass"></i>
        <h2><strong data-to="510">0</strong></h2>
          <p>Total Beverages</p>
        </div>
      </div>
      <div className="col-sm-3 col-xs-12 text-center wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1200ms">
        <div className="counters-item  row"> 
        <i className="icon-coffee"></i>
        <h2><strong data-to="1350">0</strong></h2>
          <p>Cup of coffees</p>
        </div>
      </div>
    </div>  
  </div>
</section>




{/* <!-- Our cheffs --> */}
<section id="cheffs" className="padding">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
      <h2 className="heading">Our &nbsp; Kitchen &nbsp; Staff</h2>
      <hr className="heading_space"/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="cheffs_wrap_slider">
          <div id="our-cheffs" className="owl-carousel">
            <div className="item">
              <div className="cheffs_wrap">
               <img src="assets/images/our-cheffs1.jpg" alt="Kitchen Staff"/>
               <h3>Stafeny Rose</h3>
               <small>Head Of Kitchen</small>
               <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              </div>
            </div>
            <div className="item">
              <div className="cheffs_wrap">
               <img src="assets/images/our-cheffs2.jpg" alt="Kitchen Staff"/>
               <h3>Michael Reubens</h3>
               <small>Food Supervisor</small>
               <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              </div>
            </div>
            <div className="item">
              <div className="cheffs_wrap">
               <img src="assets/images/our-cheffs3.jpg" alt="Kitchen Staff"/>
               <h3>Angle Maria</h3>
               <small>Head Cook</small>
               <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              </div>
            </div>
            <div className="item">
              <div className="cheffs_wrap">
               <img src="assets/images/our-cheffs1.jpg" alt="Kitchen Staff"/>
               <h3>Stafeny Rose</h3>
               <small>Food Supervisor</small>
               <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              </div>
            </div>
            <div className="item">
              <div className="cheffs_wrap">
               <img src="assets/images/our-cheffs2.jpg" alt="Kitchen Staff"/>
               <h3>David Miller</h3>
               <small>Food Supervisor</small>
               <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              </div>
            </div>
            <div className="item">
              <div className="cheffs_wrap">
               <img src="assets/images/our-cheffs3.jpg" alt="Kitchen Staff"/>
               <h3>Cristina Rose</h3>
               <small>Food Supervisor</small>
               <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



{/* <!-- Order Online -->  */}
<section id="order-form" className="order_section">
  <div className="container order_form padding">
    <div className="row">
      <div className="col-md-12 appointment_form">
        <h2 className="heading">Online Order</h2>
        <hr className="heading_space"/>
      <div className="row">  
       <div className="col-md-8">
       <form onSubmit="return false" id="order_form" className="callus">
            <div className="row">
            <div className="form-group col-md-12">
            <div id="result" className="text-center"></div></div></div>
             <div className="row">
             <div className="form-group col-md-12">
            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
            </div></div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name"  name="name" id="name"  required/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                   <input type="email" className="form-control" placeholder="Email address" name="email" id="email" required/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone No" name="phone" id="phone" required/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    
                    <select className="form-control" id="deal" name="deal">
                       <option> Select Deal </option>
                       <option> Deal One ($200) </option>
                       <option> Deal Two ($500) </option>
                       <option> Deal Three ($900) </option>
                       <option> Deal Four ($1300) </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea placeholder="Order Details"  id="message" name="message" required></textarea>
                  </div>
                  <div className="form-group">
                     <div className="btn-submit btn-common-white">
                    <input type="submit" value="Place &nbsp; Order" id="btn_order_submit" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
           </div> 
           </div>
      </div>
      <div className="col-md-3">
      </div>
    </div>
    <div className="col-md-3"></div>
  </div>
</section>






{/* <!--Featured Receipes --> */}
<section id="news" className="bg_grey padding">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
      <h2 className="heading">Featured &nbsp; Food &nbsp; Receipes</h2>
      <hr className="heading_space"/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="cheffs_wrap_slider">
          <div id="news-slider" className="owl-carousel">
            <div className="item">
              <div className="news_content">
               <img src="assets/images/news-img3.jpg" alt="Docotor"/>
               <div className="date_comment">
                  <span>22<small>apr</small></span>
                  <a href="#."><i className="icon-comment"></i> 5</a>
               </div>
               <div className="comment_text">
                 <h3><a href="#.">Lorem ipsum dolor</a></h3>
                 <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis.</p>
               </div>
              </div>
            </div>
            <div className="item">
              <div className="news_content">

               <img src="assets/images/news-img2.jpg" alt="Docotor"/>
               <div className="date_comment">
                  <span>22<small>apr</small></span>
                  <a href="#."><i className="icon-comment"></i> 5</a>
               </div>
               <div className="comment_text">
                 <h3><a href="#.">Lorem ipsum</a></h3>
                 <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis.</p>
               </div>
              </div>
            </div>
            <div className="item">
              <div className="news_content">
               <img src="assets/images/news-img1.jpg" alt="Docotor"/>
               <div className="date_comment">
                  <span>22<small>apr</small></span>
                  <a href="#."><i className="icon-comment"></i> 5</a>
               </div>
               <div className="comment_text">
                 <h3><a href="#.">Lorem ipsum dolor</a></h3>
                 <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis.</p>
               </div>
              </div>
            </div>
            <div className="item">
              <div className="news_content">
               <img src="assets/images/news-img3.jpg" alt="Docotor"/>
               <div className="date_comment">
                  <span>22<small>apr</small></span>
                   <a href="#."><i className="icon-comment"></i> 5</a>
               </div>
               <div className="comment_text">
                 <h3><a href="#.">Lorem dolor</a></h3>
                 <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis.</p>
               </div>
              </div>
            </div>
            <div className="item">
              <div className="news_content">
               <img src="assets/images/news-img2.jpg" alt="Docotor"/>
               <div className="date_comment">
                  <span>22<small>apr</small></span>
                   <a href="#."><i className="icon-comment"></i> 5</a>
               </div>
               <div className="comment_text">
                 <h3><a href="#.">Lorem ipsum dolor</a></h3>
                 <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis.</p>
               </div>
              </div>
            </div>
            <div className="item">
              <div className="news_content">
               <img src="images/news-img1.jpg" alt="Docotor"/>
               <div className="date_comment">
                  <span>22<small>apr</small></span>
                   <a href="#."><i className="icon-comment"></i> 5</a>
               </div>
               <div className="comment_text">
                 <h3><a href="#.">Lipsum dolor</a></h3>
                 <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis.</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* <!-- testinomial --> */}
<section id="testinomial" className="padding">
  <div className="container">
  
  <div className="row">
      <div className="col-md-12 text-center">
      <h2 className="heading">Our &nbsp; happy &nbsp; Customers</h2>
      <hr className="heading_space"/>
      </div>
    </div>
  
    <div className="row">
      <div className="col-md-12">
      <div id="testinomial-slider" className="owl-carousel text-center">
        <div className="item">
          <h3>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.</h3>
          <p>Chris Martin</p>
        </div>
        <div className="item">
          <h3>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. quam nunc putamus parum claram, Mirum est notare quam littera gothica.</h3>
          <p>Alex Hales</p>
        </div>
        <div className="item">
          <h3>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse.</h3>
          <p>Shane Robertson</p>
        </div>
       </div>
      </div>
    </div>
  </div>
</section>   
    </>
  )
}
