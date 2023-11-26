import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Userinsert() {
const [userInfo, setUserInfo] = useState({});
const navigate =useNavigate();

const handleSubmit = (e)=>{
    e.preventDefault();
    alert("Do You Want to Submit This User?")
    userInsert(userInfo)
}
const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((val)=>({...val, [name]:value}))

}
const userInsert = (d)=>{
    axios.post("http://localhost/wdpf55_react/reactapp3/api/userInsert.php",
    {data:d}).then(res=>{
        alert((res.data.msg))
        return navigate("/users");
        //console.log(res.data)
    })
}
//console.log(userInfo)
  return (
    <div className='container'>

        <h1>User Entry</h1>
        <h3>
        <form value='' onSubmit={handleSubmit}>
            Name: <br /> 
            <input type="text"  name='name' value={userInfo.name} onChange={handleChange} placeholder='Enter a name' />
            <br /> <br />
            Email:<br />
            <input type="email" name='email' value={userInfo.email} onChange={handleChange} placeholder='Enter a email' />
            <br /> <br />
            <button type="submit" value="SUBMIT" class="btn btn-primary">Submit</button>
        </form>
        </h3>
        
    </div>
  )

}



