import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
    const { currentUser, logout } = useContext(AuthContext);
    let user = currentUser.User
    // console.log(user)

  return (
    <div className='dashboard'>
      <div className='img'>
        <img src='https://picsum.photos/200' alt='profile'/>
      </div>
      <div className='dash-body'>
        <h3>First Name : {user.firstname}</h3>
        <h3>Last Name : {user.lastname}</h3>
        <h3>Email : {user.email}</h3>
        <h3>Gender : {user.gender}</h3>
        <h3>Country Name : {user.country}</h3>
      </div>
      <div className='toggle'>
        <Link to="/login">
        <button onClick={logout}>Logout</button>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
