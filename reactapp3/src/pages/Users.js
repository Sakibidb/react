import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Users() {
    useEffect( () => {
        //window.scrollTo(0, 0);
        alluser();
      }, []); 
    
      const [isuser, setuser] = useState([]);
      const alluser = async (ids) => {

          axios.get(`http://localhost/wdpf55_react/reactapp3/api/users.php`)
          .then(res => {
            console.log(res.data.userlist)
            setuser(res.data.userlist);
          })
       }

       const delconfirm = (id)=>{
        if(window.confirm("Are You Sure to DELETE?")){
            deleteUser(id);
        }
       }

       const deleteUser = (id)=>{
        axios.post(`http://localhost/wdpf55_react/reactapp3/api/delete_user.php`,{
        userids:id,
    })
        .then(res=>{
        setuser([]);
        alluser();
        return;
    })
       }

       
    if(isuser){
  return (
    <>
    <div className='container'>
        <h1>List of Users</h1>
    <table className="table table-striped table-dark">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Action</th>
            <th>Action</th>
        </tr>
    </thead>
    

        <tbody>
        {isuser.map((item,i)=>
            <tr>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.date}</td>
                <td><button className='btn btn-danger' onClick={()=>delconfirm(item.user_id)}>Delete</button></td>
                <td><button className='btn btn-success'>Edit</button></td>
            </tr>
)}
            
        </tbody>
        </table>
        <Link target="_blank" className='btn btn-success' to="/userinsert">New User Entry</Link>
    
      
    </div>
 
    </>

    )}else{
        return(
            <div className='container'>
                <h1>No data Found</h1>
                <Link className='btn btn-success' to="/userinsert">New User Entry</Link>

            </div>
        )
    }}



 