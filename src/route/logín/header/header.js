import React from 'react';
import './header.css';
import LoginForm from './login-form/login-form';



class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
			signInEmail: '',
			signInPassword: ''
		}
    }
   

    render(){
        const { onRouteChange } = this.props;
        return (
            <LoginForm onRouteChange={onRouteChange}/>
        )
    }
   
}

export default Header;