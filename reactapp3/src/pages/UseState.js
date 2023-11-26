import {React, useState} from 'react'



export default function UseState() {
    const [user, SetUser] = useState({
        name: "Masum",
        email: "masum@gamil.com",
        phone: "01853705638"
    });

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        
        SetUser((values)=>({...values, [name]:value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert ("Your Data Submited");
        console.log(user);
    }

  return (
    <>
    <div className='containder'>
        <h1>UseState Hook Learning</h1>
        <h2>User Profile</h2>
        <p>
            {user.name} <br />
            {user.email} <br />
            {user.phone}
        </p>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={user.name} onChange={handleChange} /> <br />
            <input type="text" name='email' value={user.email} onChange={handleChange} /> <br />
            <input type="text" name='phone' value={user.phone} onChange={handleChange} /> <br />
            <input type="submit" value="UPDATE" />
        </form>
    </div>
    </>
  )
}
