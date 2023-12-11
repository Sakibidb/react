import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    < >
<li className="nav-item">
    <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
      <i className="fas fa-fw fa-cog" />
      <span>Doctors</span>
    </Link>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Custom Components:</h6>
        <Link to="allproducts" className="collapse-item" >All Doctors</Link>
        <Link className="collapse-item" to="registerdoc">Doctors Registration</Link>
      </div>
    </div>
  </li>
    </>
  )
}
