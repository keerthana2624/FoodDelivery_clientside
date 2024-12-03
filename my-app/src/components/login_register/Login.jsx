import React,{useState} from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        console.log(email, password);
        navigate('/restaurants');

    };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
        </div>
        <div className="form-group">
            <label>Password:</label>
            <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
        </div>
        <button type="submit">Login</button>
      </form>
      <h3>New user? <a href="/register">register now</a></h3>
    </div>
  )
}

export default Login
