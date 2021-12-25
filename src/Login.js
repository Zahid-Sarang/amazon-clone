import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
        <Link to="/">
        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo"/>
        </Link>
            
        </div>
    )
}

export default Login
