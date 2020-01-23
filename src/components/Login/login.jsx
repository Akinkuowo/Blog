import React from 'react';
import { validateAll } from 'indicative/validator';
import axios from 'axios';
import config from '../../config'


class Login extends React.Component{

    constructor(){
        super()

        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    handleLoginEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    
    handleLoginPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = (event) => {
        event.preventDefault()

        //validating user data
        const data = this.state;
        const rules = {
           
            email: 'required|email',
            password: 'required|string'
        }

        const messages = {
            required:  'this {{ field }} is required',
            'email.email': 'Please enter a valid email',
            'password.min': 'password is too short',

        }

        validateAll(data, rules, messages)
        .then(()=> {
            //login user
            axios.post(`${config.ApiUrl}/login`,  {
                    email: this.state.email,
                    password: this.state.password
                
            }).then(user => {
                localStorage.setItem('user', JSON.stringify(user.data))
                this.props.setAuthUser(user.data)
                this.props.history.push('/')
            }).catch(errors => {
                console.log(errors.response)
                const formatedErrors = {}
                
                if(errors.response.data['Invalid']){
                    formatedErrors['Invalid'] = errors.response.data['Invalid'][0]
                }else if(errors.response.data['incorrectPassword']){
                    formatedErrors['incorrectPassword'] = errors.response.data['incorrectPassword'][0]
                }else{
                    formatedErrors['userNotFound'] = errors.response.data['userNotFound'][0]
                }
                
                
                this.setState({
                    errors: formatedErrors
                })
            })
        })
        .catch(errors => {
        
            console.log(errors)
            // show errors to user
            const errorMessages = {}

            errors.forEach(error => errorMessages[error.field] = error.message)
            this.setState({
                errors: errorMessages
            })
        })

        
    }
        


    render(){
        return(
            <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-girl.jpg)`}}>
                <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
                    <h5 className="text-uppercase text-center">Login</h5>
                    <br /><br />
    
                    <form className="form-type-material" onSubmit={this.handleLogin}>
                        <div className="form-group">
                            <input onChange={this.handleLoginEmail} type="text" name="email" className="form-control" placeholder="Email address" />
                            {
                                this.state.errors['email'] &&
                                <small className="text-danger">{this.state.errors['email']}</small>
                            }
                            {
                                this.state.errors['Invalid'] &&
                                <small className="text-danger">{this.state.errors['Invalid']}</small>
                            }
                        </div>
                
                        <div className="form-group">
                         <input onChange={this.handleLoginPassword} type="password" name="password" className="form-control" placeholder="Password" />
                         {
                            this.state.errors['password'] &&
                            <small className="text-danger">{this.state.errors['password']}</small>
                        }
                        {
                            this.state.errors['incorrectPassword'] &&
                            <small className="text-danger">{this.state.errors['incorrectPassword']}</small>
                        }

                        </div>
                
                        <div className="form-group flexbox py-10">
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" checked />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description">Remember me</span>
                            </label>
                
                            <a className="text-muted hover-primary fs-13" href="#">Forgot password?</a>
                        </div>
                
                        <div className="form-group">
                            <button  className="btn btn-bold btn-block btn-primary" type="submit">Login</button>
                        </div>
                    </form>
    
                </div>
            </div>
        );
    }
}



export default Login;