import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import config from '../../config'

 class Article extends React.Component {
    constructor(){
        super()

        this.state = {
            articleId: ''
        }
    }

    render() {
        const { article } = this.props


        return (
            <article className="my-90">
                <header className="text-center mb-40">
                    <h3>
                        <Link  to={`article/${article.slug}`}>{article.title}!</Link>
                    </h3>
                    <div className="link-color-default fs-12">
                        <a href="#">{article.category}</a>,<br />
                        <time>{(new Date(article.date)).toDateString()}</time>
                    </div>
                </header>
    
               <Link onClick={this.handleSingleArticle} to={`article/${article.slug}`}>
                    <img className="rounded" style={{width: 595, height: 445}} src={`/uploads/${article.image_url}`} alt="..." />
                </Link>

                <div className="card-block">
    
                    <p className="text-justify">{`${article.content.substring(0, 90)}...`}.</p>
    
                    <p className="text-center mt-40">
                    <Link  className="btn btn-primary btn-round" to={`article/${article.slug}`}>Read more</Link>
                    </p>
    
                </div>
            </article>
        
        )
    }
}


export default Article;