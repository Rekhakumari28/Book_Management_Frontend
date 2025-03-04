import React, { useEffect } from 'react'
import { Header } from './Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../feachers/bookSlice'

const BookDetails = () => {
  const bookId = useParams()
  const books = useSelector((state)=> state.books.books)
  const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(fetchBooks())
   },[])

   const bookData = bookId && books && books.find(book=> book._id === bookId.bookId)
  
  return (
    <>
    <Header/>
    <div className='container'>
      <h1 className='my-3'>Book Details</h1>
    
    <div className='row'>
      
      <div className='col-md-7 border rounded p-3'>
        <h5>{bookData?.bookName}</h5>
        <p className='mb-2 mt-4'>Author: {bookData?.author}</p>
        <p className='mb-2'>Genre: {bookData?.genre}</p>
             </div>
    </div>

    </div>
    </>
  )
}

export default BookDetails