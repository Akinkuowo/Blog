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

     async componentWillMount(){
        let  article = await this.props.articles.find(article => article.slug === this.props.match.params.slug );
    
        
        if(article){
            this.setState({
                singleArticle: article,
                loading: false
            })
        
        }else{
             article = await this.props.getArticles(this.props.match.params.slug);
             
           const currentArticle =  article.find(article => article.slug === this.props.match.params.slug)


            this.setState({
                singleArticle: currentArticle,
                loading: false
            })
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