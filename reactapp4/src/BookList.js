import React from 'react'
import Book from './Book'
import BookEditForm from './BookEditForm'



export default function BookList () {
    const list = [
        {isbn:1258745, title: "PHP Book", author:"Sakib"},
        {isbn:5874942, title: "JS Book", author:"Imran"},
        {isbn:8547915, title: "JQuery Book", author:"Alauddin"},
    ]
//   return (
//     // <div>
//     // <h1>Book List</h1>

//     // <ul>
//     // {list.map((item, i)=><li key={i}>ISBN: {item.isbn} Title: {item.title} Author: {item.author} index: {i} </li>)}
//     // </ul>
//     // </div>
//   )

return(
    
    <div className='container'>
        <h1>Book List</h1>
    <ul>
        {list.map((item,i)=><Book isbn={item.isbn} title={item.title} author={item.author} key={i}/>)}
       
    </ul>
    </div>
)
}
