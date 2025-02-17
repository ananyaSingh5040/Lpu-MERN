import React from 'react'

const Navbar = () => {
  return (
    <>
  <nav>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
    </ul>

  </nav>
  </>
  )
}

export default Navbar