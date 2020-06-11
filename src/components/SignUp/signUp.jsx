import React from 'react';

import {Link} from 'react-router-dom';
import { validateAll } from 'indicative/validator';
import axios from 'axios';

import config from '../../config'

class SignUp extends React.Component{
    constructor(){
        super()

        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: {}
        }
    }

    

     handleNameChange = (event)=> {
        this.setState({
            name: event.target.value
        })
    }

    
    handleEmailChange = (event)=> {
        this.setState({
            email: event.target.value
        })
    
    }

    
    handlePasswordChange = (event)=> {
        this.setState({
            password: event.target.value
        })

    }

    handlePasswordConfirmChange = (event)=> {
        this.setState({
            password_confirmation: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        //validating user data
        const data = this.state;
        const rules = {
            name: 'required|string',
            email: 'required|email',
            password: 'required|min:6|string|confirmed'
        }

        const messages = {
            required:  'this {{ field }} is required',
            'name.string': 'name contains unallowed character',
            'email.email': 'Please enter a valid email',
            'password.min': 'password is too short',
            'password.confirmed': 'The password does not match'

        }

        validateAll(data, rules, messages)
        .then(()=> {
            //register user
            axios.post(`${config.ApiUrl}/signup`,  {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                
            }).then(response => {
                localStorage.setItem('user', JSON.stringify(response.data[0]))
                this.props.setAuthUser(response.data[0])
                this.props.NotificationService.success('Registration was successful')
                this.props.history.push('/')
              
            })
            .catch(errors => {
               
                const formatedErrors = {}
                // formatedErrors['email'] = errors.response.data['email'][0]
                // this.setState({
                //     errors: formatedErrors
                // })
                console.log(errors.response)
            })
        })
        .catch(errors => {
        
            // show errors to user
            const errorMessages = {}

            errors.forEach(error => errorMessages[error.field] = error.message)
            this.props.NotificationService.error('something went wrong')
            this.setState({
                errors: errorMessages
            })
        })

        
    }
    
    
    render(){
        return(
            <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-girl.jpg)`}}>
              <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
                <h5 className="text-uppercase text-center">Register</h5>
                <br /><br />

                <form className="form-type-material" onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleNameChange} name="name" type="text" className="form-control" placeholder="Username" />
                        {
                            this.state.errors['name'] &&
                            <small className="text-danger">{this.state.errors['name']}</small>
                        }
                      
                    </div>

                    <div className="form-group">
                        <input onChange={this.handleEmailChange} name="email" type="text" className="form-control" placeholder="Email address" />
                        {
                            this.state.errors['email'] &&
                            <small className="text-danger">{this.state.errors['email']}</small>
                        }
                        
                    </div>

                    <div className="form-group">
                        <input onChange={this.handlePasswordChange} name="password" type="password" className="form-control" placeholder="Password" />
                        {
                            this.state.errors['password'] &&
                            <small className="text-danger">{this.state.errors['password']}</small>
                        }
                       
                    </div>

                    <div className="form-group">
                        <input onChange={this.handlePasswordConfirmChange} name="password_confirmation" type="password" className="form-control" placeholder="Password (confirm)" />
                    </div>
                    <br />
                    <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
                </form>

                <hr className="w-30" />
                <p className="text-center text-muted fs-13 mt-20">Already have an account?
                    <Link to="/login">Sign in</Link>
                </p>

            </div>
        </div>
        );
    }
}

export default SignUp;