import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1>Home</h1>
      <Link to='/register'> register</Link>
      <Link to='/login'> Sign In</Link>
      <Link to='/dashboard'> Dashboard</Link>
    </div>
  )
}

export default Home
