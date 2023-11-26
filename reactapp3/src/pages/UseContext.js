import {useState, createContext, useContext} from 'react'
const UserContext = createContext();


export default function UseContext() {
    const [user, setUser] = useState({
        name: "Sakib",
        phone: "01853705638",
        address: "Dhaka"
    });
 return (
    <>
    <div className='container'>
        <UserContext.Provider value={user}>

        <h2>{`${user}, component 1`}</h2>
        <Component2/>
        
        </UserContext.Provider>
        
        
    </div>
    </>
  )
}

function Component2(){
    return(
        <>
        <h3>THis is Component2</h3>
        <Component3/>
        </>
    )
}

function Component3(){
   const user = useContext(UserContext);
   const style={"border": "1px,  solid black"};
    return(
        <>
        <h1>Name: {user.name} <br /> Phone: {user.phone} <br /> Address: {user.address}</h1>

        <table style={style}>
            <tr>
                <th style={style}>Name</th>
                <th style={style}>Phone</th>
                <th style={style}>Address</th>
            </tr>
            <tr>
                <td style={style}>{user.name}</td>
                <td style={style}>{user.phone}</td>
                <td style={style}>{user.address}</td>
            </tr>
        </table>
        </>
    )
}

