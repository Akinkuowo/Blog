import React from 'react';
import axios from 'axios';
import config from '../../config'


class Login extends React.component{

    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
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

    handleLogin = () => {
        axios.post(`${config.ApiUrl}/login`,  {
            email: this.state.email,
            password: this.state.password
        }).then(response => response.json())
          .then(user => {
              if(user.id){
                localStorage.setItem('user', JSON.stringify(response.data))
                this.props.history.push('/')
              }
          }) 
          .catch(errors => {
           

            const formatedErrors = {}

            formatedErrors['email'] = errors.response.data['email'][0]
            this.setState({
                errors: formatedErrors
            })
        })
    }


    render(){
        return(
            <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-girl.jpg)`}}>
                <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
                    <h5 className="text-uppercase text-center">Login</h5>
                    <br /><br />
    
                    <form>
                        <div className="form-group">
                            <input onChange={this.handleLoginEmail} type="text" name="name" className="form-control" placeholder="Email address" />
                        </div>
                
                        <div className="form-group">
                         <input onChange={this.handleLoginPassword} type="password" name="password" className="form-control" placeholder="Password" />
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
                            <button onClick={this.handleLogin} className="btn btn-bold btn-block btn-primary" type="submit">Login</button>
                        </div>
                    </form>
    
                </div>
            </div>
        );
    }
}



export default Login;