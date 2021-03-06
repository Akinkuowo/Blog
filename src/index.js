import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';


import * as serviceWorker from './serviceWorker';

import NavBar from './components/NavBar/NavBar';

import ArticleService from './Services/article'
import NotificationService from './Services/notification';
import Footer from './components/Footer/footer';
import CreateArticle from './components/CreateArticle/createArticle';
import Login from './components/Login/login';
import SignUp from './components/SignUp/signUp';
import SingleArticle from './components/SingleArticle/singleArticle';
import Auth from './components/Auth/Auth';
import LoginAuth from './components/LoginAuth/LoginAuth';
import SignUpAuth from './components/SignUpAuth/SignUpAuth';
import UserArticles from './components/UserArticles/UserArticles';
import UserArticlesAuth from './components/UserArticlesAuth/UserArticlesAuth';
import Categories from './components/Categories/Categories';


class Content extends React.Component{
    constructor(){
        super()

        this.state = {
            authUser: null,
            articles: [],
            articleId: '',
            author: '',
            comments: ''
        }
    }



    componentDidMount(){
            const user = localStorage.getItem('user')

            if(user){
                this.setState({
                    authUser: JSON.parse(user)
                })
            }
    }

    removeAuthUser = () => {
        localStorage.removeItem('user');
       this.props.NotificationService.success('logged out successfully!')

        this.setState({ authUser: null})
    }
   
    setAuthUser = (authUser) => {
        this.setState({
            authUser
        })
    }

    setArticles = (articles) => {
        this.setState({ articles })
    }

    setComments = (comments) => {
        this.setState({ comments })

        
    }

   
    render(){
        const { location } = this.props
         return (
            <div>
            
            {
                location.pathname !== '/login' && location.pathname !== '/signup' &&
                <NavBar  removeAuthUser={this.removeAuthUser}  authUser={this.state.authUser}/>

                
            }
             
            <Route exact path="/" render={(props)=> <App {...props} getArticles={this.props.ArticleService.getArticles} NotificationService={this.props.NotificationService} setArticles={this.setArticles} getArticleId={this.getArticleId}/>}  />

            <Auth path="/create/article" component={CreateArticle} props={{ 
                getCategories: this.props.ArticleService.getCategories, 
                NotificationService: this.props.NotificationService,
                createArticle: this.props.ArticleService.createArticle,
                authUser: this.state.authUser ? this.state.authUser : null }}
                isAuthenticated={this.state.authUser !== null}
            />

            <Route path="/add/categories/"  component={Categories} />     

            <UserArticlesAuth path="/user/articles" component={UserArticles} props={{ 
                getUserArticles: this.props.ArticleService.getUserArticles,
                setArticles: this.setArticles, 
                getAuthor: this.state.author,
                authUser: this.state.authUser ? this.state.authUser : null }}
                isAuthenticated={this.state.authUser !== null}
            />

            <LoginAuth  path="/login" component={Login} props={{
                NotificationService: this.props.NotificationService,
                setAuthUser: this.setAuthUser }}
                isAuthenticated={this.state.authUser !== null}
            />
            {/* <Route path="/login" render={(props)=> <Login {...props} setAuthUser={this.setAuthUser} />}  /> */}
            
            <SignUpAuth path="/signup" component={SignUp} props={{
               NotificationService: this.props.NotificationService,
               setAuthUser: this.setAuthUser }}
                isAuthenticated={this.state.authUser !== null} />
                
            {/* <Route path="/signup"  render={(props)=> <SignUp {...props} setAuthUser={this.setAuthUser} />} /> */}
            
            <Route exact path="/article/:slug" render={(props)=> <SingleArticle {...props} 
            getUserArticles={this.props.ArticleService.getUserArticles()} 
            getComments={this.props.ArticleService.getComments} 
            authUser={this.state.authUser}
            setComments={this.setComments}
            comments={this.state.comments}
            getArticles={this.props.ArticleService.getArticles} 
            articles={this.state.articles} /> }  />
            
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
        <Content 
        
        ArticleService={new ArticleService()}
        NotificationService={new NotificationService()}
        { ...props} 
        />
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
