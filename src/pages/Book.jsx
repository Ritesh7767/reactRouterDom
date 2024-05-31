import React from 'react'
import { useOutletContext, useParams, useSearchParams } from 'react-router-dom'

const Book = () => {

    let param = useParams()
    let obj = useOutletContext()
    // console.log(obj)
    // let [searchParam, setSearchParam] = useSearchParams()
    // setSearchParam(param.id)
    // console.log(searchParam.get(param.id))


  return (
    <div>Book {param.id} {JSON.stringify(obj)} </div>
  )
}

export default Book