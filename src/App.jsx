import { useState } from 'react'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import BookList from './pages/BookList'
import Book from './pages/Book'
import NewBook from './pages/NewBook'
import NotFound from './pages/NotFound'
import BookLayout from './pages/BookLayout'
import BookRoutes from './pages/BookRoutes'

function App() {

  let location = useLocation()
  console.log(location)

  return (
    <>
    <Routes location='/books'>
      <Route path='/books' element={<h1>Extra content</h1>}/>
    </Routes>
    {location.state}
      <nav>
        <ul>
          <li><NavLink style={({isActive}) => isActive ? {color : 'red'} : {}} state='home' to='/' replace>{({isActive}) => isActive ? 'Active Home' : "Home"}</NavLink></li>
          <li><NavLink end style={({isActive}) => isActive ? {color : 'red'} : {}} state="book" to='books'>Books</NavLink></li>
          <li><NavLink style={({isActive}) => isActive ? {color : 'red'} : {}} to='books/newbook' >New Books</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books/*' element={<BookRoutes/>}/>
          {/* <BookRoutes/> */}
          {/* <Route index element={<BookList/>}/>
          <Route path=':id' element={<Book/>}/>
          <Route path='newbook' element={<NewBook/>}/> */}
        {/* <Route element={<BookList/>}>
          <Route path='/books' element={<BookRoutes/>}/>
        </Route> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
