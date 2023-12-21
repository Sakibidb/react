import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Service() {
  useEffect( () => {
    
    allservice();
  }, []); 

  const [isservice, setservice] = useState([]);
  const allservice = async (ids) => {

      axios.get(`http://localhost/reactjs/react/medical/api/service.php`)
      .then(res => {
        console.log(res.data.servicelist)
        setservice(res.data.servicelist);
      })
   }   
if(isservice){

  return (
    <>
    
    <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <br /> <br /> <br />
          <h2>Services</h2>
          <p>This is a medical services page</p>
        </div>

        <div class="row">
          {isservice.map((item,i)=>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-heartbeat"></i></div>
              <h4><a href="">{item.name}</a></h4>
              <p>A medical laboratory or clinical laboratory is a laboratory where tests</p>
              <br />
              <h4><a href="">{item.doctor}</a></h4>
              
            </div>
          </div>
          )}

        </div>

      </div>
    </section>
    </>
  )
}}
