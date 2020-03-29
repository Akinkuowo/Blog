import React from 'react';

import SingleArticle from './Article/singleArticle';
import './singleArticle.css';
import loading from './loadingg.gif';



class SingleArticleContainer extends React.Component {
    constructor(){
        super()

        this.state = {
            singleArticle: null,
            loading: true
        }

    }

    componentWillMount(){
        const articleId = this.props.articleId;
        const  article = this.props.articles.find(article => article.id === articleId);
        
        if(article){
            this.setState({
                singleArticle: article,
                loading: false
            })
        
        }else if(!article){
            const articleId = localStorage.getItem('articleId')
            const article = localStorage.getItem('articles');
            
            // const newArticle = article.find(article => article.id === articleId);
            // console.log(newArticle);

            // this.setState({
            //     singleArticle: article,
            //     loading: false
            // })
        }


    }
    

            
    render(){
        return(
            <div>
                {
                    !this.state.loading &&
                    <SingleArticle singleArticle={this.state.singleArticle}/>
                    
                }  
                {
                    this.state.loading  &&
                    <img src={loading} className="center" alt="Loading" />
                }
            </div>
            
        )
    }
}

export default SingleArticleContainer;