import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='home'>
      <h1 data-name='Welcome&nbsp;User'>Welcome User</h1>
      {currentUser ? (
        <Link
          to="/dashboard"
        >
          <button className="btn-home">Dashboard</button>
        </Link>
      ) : (
        <Link className="link" to="/login">
          <button className="btn-home">Login</button>
        </Link>
      )}
    </div>
  )
}

export default Home
