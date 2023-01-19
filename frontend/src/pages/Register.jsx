import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender : "",
        country : ""
      });
      const [err, setError] = useState(null);
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:8800/register", inputs);
          navigate("/login");
        } catch (err) {
          setError(err.response.data);
        }
    };

  return (
    <div className='form'>
      <div className='form-main'>
        <h1>Register</h1>
        <form>
            <input placeholder=' Enter First name' name='firstname' onChange={handleChange}/>
            <input placeholder=' Enter Last name' name='lastname' onChange={handleChange}/>
            <input type="email" placeholder=' Enter Email' name='email' onChange={handleChange}/>
            <input type="password" placeholder=' Enter Password' name='password' onChange={handleChange}/>
            <div className="select">  
          <select  name = "gender" onChange={handleChange}>
            <option defaultValue>Select gender</option>
            <option value = "Male" >Male</option>
            <option value = "Female">Female</option>
            <option value = "Other">Other</option>
         </select>
          </div>
            <input placeholder=' Enter Country name' name='country' onChange={handleChange}/>
            <div className='checkbox'> 
                <input type="checkbox"/> 
                <p> Get Newslatter</p>
            </div>
            <div className='form-btn'>
            <Link to="/login">
                <button onClick={handleSubmit}>Register</button>
            </Link>
            </div>
            {err && <span>{err}</span>}
            <div className='form-footer'>
                <p>Aldready registered ? &nbsp;</p> <Link to="/login" style={{"textDecoration" : "none"}}>
                    <span>Login</span>
                </Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Register
