import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';


import * as serviceWorker from './serviceWorker';

import NavBar from './components/NavBar/NavBar';

import Footer from './components/Footer/footer';
import CreateArticle from './components/CreateArticle/createArticle';
import Login from './components/Login/login';
import SignUp from './components/SignUp/signUp';
import SingleArticle from './components/SingleArticle/singleArticle';


class Content extends React.Component{
    constructor(){
        super()

        this.state = {
            authUser: null,
        }
    }



    componentDidMount(){
            const user = localStorage.getItem('user')
            console.log(user)

            if(user){
                this.setState({
                    authUser: JSON.parse(user)
                })
            }
    }

   
    setAuthUser = (authUser) => {
        this.setState({
            authUser
        })
    }

    render(){
        const { location } = this.props
         return (
            <div>
            
            {
                location.pathname !== '/login' && location.pathname !== '/signup' &&
                <NavBar  authUser={this.state.authUser}/>
            }
             
            <Route exact={true} path="/" render={(props)=> <App {...props}  />} />
            <Route path="/article/create" component={CreateArticle} />
            <Route path="/login" render={(props)=> <Login {...props} setAuthUser={this.setAuthUser} />}  />
            <Route path="/signup"  render={(props)=> <SignUp {...props} setAuthUser={this.setAuthUser} />} />
            <Route path="/article/:slug" component={SingleArticle} />
            
            {
                location.pathname !== '/login' && location.pathname !== '/signup' &&
                <Footer />
            }
            
        </div>
            
        )
    }
}

const Main = withRouter(( props)=>{

    return(
        <Content { ...props} />
    );
})



ReactDOM.render(
    
    <BrowserRouter>
      <Main />
    </BrowserRouter>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
