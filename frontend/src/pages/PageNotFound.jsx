import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <h3>The page you are looking for is either doesnt exist's <br/>
      or might have removed.</h3>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      
    </div>
  )
}

export default PageNotFound
