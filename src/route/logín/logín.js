import React from 'react';
import './login.css'

import Header from './header/header';
import Register from './register/register';
const Login = ({ onRouteChange }) => {
    return(
        <div>
            <Header onRouteChange={onRouteChange} />
            <Register onRouteChange={onRouteChange} />
        </div>
    );
 
}

export default Login;