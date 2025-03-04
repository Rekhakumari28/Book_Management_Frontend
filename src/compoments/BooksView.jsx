import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBookAsync, fetchBooks } from '../feachers/bookSlice'
import { Header } from './Header'
import { Link, useNavigate } from 'react-router-dom'

export const BooksView = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {books, status, error} = useSelector((state)=>state.books)
    console.log(books)
    useEffect(()=>{
        dispatch(fetchBooks())
    },[])

    const handleDelete = (bookId)=>{
      dispatch(deleteBookAsync(bookId));
     
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }

  return (
    <>
    <Header/>
    <div className='container pb-2'>
    <h1>Books View</h1>
    {status === "Loading" ?<p className="bg-success-subtle text-success-emphasis p-3 rounded">
              {status}
            </p> :  <ul className='list-group'>
        {books && books.length > 0 && books.map(book=>(
          <li className='list-group-item' key={book._id}> <Link to={`/bookDetail/${book._id}`} className='text-black text-blue-hover link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
          <span> { book.bookName} - ( Author: {book.author} ) - ( Genre: {book.genre} )</span>        
            </Link>
            <button className='btn btn-outline-danger float-end' onClick={()=>handleDelete(book._id)}>Delete</button>
            </li>
        ))}
    </ul> }
    {error && (
            <p className="bg-danger-subtle text-danger-emphasis p-3 rounded">
              {error}
            </p>
          )}
    </div>
    </>
  )
}

