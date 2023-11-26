import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from './Layout'
import About from '../pages/About'
import UseState from '../pages/UseState'
import UseEffect from '../pages/UseEffect'
import UseContext from '../pages/UseContext'
import Users from '../pages/Users'
import Userinsert from '../pages/Userinsert'
// import NoPage from '../pages/NoPage'


function NoPage(){
  return(
    <>
    <h1>No Page Found</h1>
    </>
  )
}


export default function Main() {
  return (
    <>
    <BrowserRouter> 
    
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path='*' element={<NoPage/>}></Route>
            <Route path='/usestate' element={<UseState/>}></Route>
            <Route path='/useeffect' element={<UseEffect/>}/>
            <Route path='/usecontext' element={<UseContext/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/userinsert' element={<Userinsert/>}/>


            

        </Route>
    </Routes>
    
    </BrowserRouter>
    </>

  )
}

