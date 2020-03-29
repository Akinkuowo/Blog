import React from 'react';
import { Link } from 'react-router-dom';



 class Article extends React.Component {
    constructor(){
        super()

        this.state = {
            articleId: ''
        }
    }

    render() {
        const { article } = this.props

        const handleSingleArticle = () => {
    
            const articleId = this.props.article.id;
            
            localStorage.setItem('articleId', JSON.stringify(articleId))

            this.setState({ 
                articleId: articleId
             })
            
            
           this.props.getArticleId(articleId)
        }


        return (
            <article className="my-90">
                <header className="text-center mb-40">
                    <h3>
                        <Link onClick={handleSingleArticle} to={`article/${article.title}`}>{article.title}!</Link>
                    </h3>
                    <div className="link-color-default fs-12">
                        <a href="#">{article.category}</a>,<br />
                        <time>{(new Date(article.date)).toDateString()}</time>
                    </div>
                </header>
    
               <Link onClick={this.handleSingleArticle} to={`article/${article.title}`}>
                    <img className="rounded" style={{width: 595, height: 445}} src={`/uploads/${article.image_url}`} alt="..." />
                </Link>
1    
                <div className="card-block">
    
                    <p className="text-justify">{`${article.content.substring(0, 90)}...`}.</p>
    
                    <p className="text-center mt-40">
                    <Link onClick={handleSingleArticle} className="btn btn-primary btn-round" to={`article/${article.title}`}>Read more</Link>
                    </p>
    
                </div>
            </article>
        
        )
    }
}


export default Article;