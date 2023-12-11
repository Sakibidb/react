import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Service() {
  const [product,setProduct] = useState([]);
  useEffect(
    ()=>{
      getProduct()
      //alert("Hello");
    },[]
  );
  //console.log(product)
  const getProduct =()=>{
    axios.get('http://localhost:8080/productsall').then(
      (res)=>setProduct(res.data)
      //console.log(res.data)
    )
  };


  return (
    <>
    
      <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Services</h2>
          <h1>This is service page</h1>
        </div>

        <div class="row">
        {product.map((item)=>(
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-heartbeat"></i></div>
              <h4>{item.product}</h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
        ))}
        </div>

      </div>
    </section>  
    </>
  )
}
