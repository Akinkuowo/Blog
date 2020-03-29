import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const UserArticlesAuth = ({ path, props, component: Component, isAuthenticated }) => {
    return <Route 
    path={path}
    render={
        routerProps => {
            if(isAuthenticated){
                return <Component {...props} {...routerProps} />
            }else{
                return <Redirect to="/login" />
            }
        }
    }
    
    />
}

export default UserArticlesAuth;