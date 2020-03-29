import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const SignUpAuth = ({ path, props, component: Component, isAuthenticated }) => {
    return <Route 
    path={path}
    render={
        routerProps => {
            if(isAuthenticated){
                return <Redirect to="/" />
            }else{
                return <Component {...props} {...routerProps} />
            }
        }
    }
    
    />
}

export default SignUpAuth;