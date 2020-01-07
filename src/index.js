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

const Main = withRouter(({ location })=>{

    return(
        <div>
            {
                location.pathname !== '/login' && location.pathname !== '/signup' &&
                <NavBar />
            }
            
            <Route exact={true} path="/" component={App} />
            <Route path="/article/create" component={CreateArticle} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/article/:slug" component={SingleArticle} />
            
            {
                location.pathname !== '/login' && location.pathname !== '/signup' &&
                <Footer />
            }
            
        </div>
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
