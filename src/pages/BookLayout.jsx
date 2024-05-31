import React, { useState } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const BookLayout = () => {

    // let [bookNumber, setBookNumber] = useState()

    let [searchParam, setSearchParam] = useSearchParams({n:3})
    console.log(searchParam.get('n'))

    let number = searchParam.get('n')

  return (
    <>
        <Link to='/books/1' >Book1</Link>
        <Link to='/books/2' >Book2</Link>
        <Link to={`/books/${number}`} >Book{`${number}`}</Link>
        <Link to='/books/newbook' >new Book</Link>
        <Outlet context={{name : 'ritesh'}} />
        <input type="number" value={number} onChange={event => setSearchParam({n: event.target.value})} />
    </>
  )
}

export default BookLayout