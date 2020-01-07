import React from 'react';

import {Link} from 'react-router-dom';
import { validate } from 'indicative/validator';

class SignUp extends React.Component{
    constructor(){
        super()

        this.state = {
            name: '',
            email: '',
            password: '',
            passwordComfirm: ''
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

    handlePasswordComfirmChange = (event)=> {
        this.setState({
            passwordComfirm: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)

        //validating user data
        const data = this.state;
        const rules = {
            name: 'required|string',
            email: 'required|email',
            password: 'required|min:6|string'
        }

        validate(data, rules)
        .then(()=> {
            //register user
        })
        .catch(errors => {
            console.log(errors)
            // show errors to user
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
                    </div>

                    <div className="form-group">
                        <input onChange={this.handleEmailChange} name="email" type="text" className="form-control" placeholder="Email address" />
                    </div>

                    <div className="form-group">
                        <input onChange={this.handlePasswordChange} name="Password" type="password" className="form-control" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <input onChange={this.handlePasswordComfirmChange} name="confirm_password" type="password" className="form-control" placeholder="Password (confirm)" />
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