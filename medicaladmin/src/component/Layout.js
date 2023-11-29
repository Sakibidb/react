import React from 'react'
import LeftBar from './LeftBar'
import Navbar from './Navbar'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
<div id="wrapper">
        <LeftBar></LeftBar>
  
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
  </div>
</div>

  )
}
