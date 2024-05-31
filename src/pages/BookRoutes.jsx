import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BookList from './BookList'
import NewBook from './NewBook'
import Book from './Book'
import BookLayout from './BookLayout'
import NotFound from './NotFound'

const BookRoutes = () => {
  return (
    <>
        <Routes>
            <Route element={<BookLayout/>}>
                <Route index element={<BookList/>}/>
                <Route path=':id' element={<Book/>}/>
                <Route path='newbook' element={<NewBook/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default BookRoutes