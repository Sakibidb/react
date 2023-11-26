import React from 'react'
import BookEditForm from './BookEditForm'


export default function Book(props) {
  return (
    <div>
        <li onClick={()=>BookEditForm(props)}>
            <span>ISBN: {props.isbn} Title:{props.title} </span>
            <p>Author:{props.author}</p>
            {/* <BookEditForm/> */}
            
        </li>
    </div>
  )
}
