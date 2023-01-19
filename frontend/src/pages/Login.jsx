import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';


const Login = () => {

    const [input, setInputs] = useState({
        email: "",
        password: "",
      });
      const [err, setError] = useState(null);
    
      const navigate = useNavigate();
    
      const {login} = useContext(AuthContext)
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await login(input)
          navigate("/dashboard");
        } catch (err) {
          setError(err.response.data);
        }
    };

  return (
    <div className='form'>
      <div className='form-main'>
        <h1>Login</h1>
        <form>
            <input type="email" placeholder=' Enter Email' name='email' onChange={handleChange}/>
            <input type="password" placeholder=' Enter Password' name='password' onChange={handleChange}/>
            <div className='form-btn'>
            <Link to="/dashboard">
                <button onClick={handleSubmit}>Login</button>
            </Link>
            </div>
            {err && <span>{err}</span>}
            <div className='form-footer'>
                <p>New member ? &nbsp;</p> <Link to="/register" style={{"textDecoration" : "none"}}>
                <span>Register</span>
                </Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
