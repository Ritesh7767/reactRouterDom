import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    let navigate = useNavigate()

    setTimeout(() => {
        navigate('/', {replace : true, state : 'Error page not found'})
    }, 1000)
  return (
    <h1>NotFound</h1>
  )
}

export default NotFound