import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Appointment() {
  const [userInfo, setUserInfo] = useState({});
  const navigate =useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("Are You Sure?")
    userInsert(userInfo)
}
const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((val)=>({...val, [name]:value}))

}
const userInsert = (d)=>{
    axios.post("http://localhost/reactjs/react/medical/api/appointment.php",
    {data:userInfo}).then(res=>{
        alert((res.data.msg))
        return navigate("/appointment");
        
    })
}

  return (
    <>
      <section id="appointment" className="appointment section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Make an Appointment</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <form value='' onSubmit={handleSubmit}  className="php-email-form">
      <div className="">
        <div className="col-md-12 form-group">
        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={userInfo.name} onChange={handleChange} />
          <div className="validate" />
        </div>
        <div className="col-md-12 form-group mt-3 mt-md-0">
          <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" value={userInfo.email} onChange={handleChange} />
          <div className="validate" />
        </div>
        <div className="col-md-12 form-group mt-3 mt-md-0">
          <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={userInfo.phone} onChange={handleChange} />
          <div className="validate" />
        </div>
      </div>
      <div className="">
      <div className="col-md-12 form-group mt-3 mt-md-0">
          <input type="tel" className="form-control" name="service" id="service" placeholder="Your service" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={userInfo.service} onChange={handleChange} />
          <div className="validate" />
        </div>

        <div className="col-md-12 form-group mt-3 mt-md-0">
          <input type="tel" className="form-control" name="doctor" id="doctor" placeholder="Your doctor" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={userInfo.doctor} onChange={handleChange} />
          <div className="validate" />
        </div>
      </div>
      
      <div className="form-group mt-12">
        <textarea className="form-control" name="message" rows={3} placeholder="Message (Optional)" value={userInfo.message} onChange={handleChange} />
        <div className="validate" />
      </div>
      <div className="mb-3">
        <div className="loading">Loading</div>
        <div className="error-message" />
        <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
      </div>
      <div className="text-center"><button type="submit" value="SUBMIT" class="btn btn-primary">Make an Appointment</button></div>
    </form>
  </div>
</section>

    </>
  )
}
