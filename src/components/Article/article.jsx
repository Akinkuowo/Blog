import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ article })=> {
    
    return (
        <article className="my-90">
            <header className="text-center mb-40">
                <h3>
                <a href="blog-single.html">{article.title}!</a>
                </h3>
                <div className="link-color-default fs-12">
                <a href="#">{article.category}</a>,<br />
                <time>{(new Date(article.date)).toDateString()}</time>
                </div>
            </header>

           <Link to={`article/${article.title}`}>
                <img className="rounded" style={{width: 595, height: 445}} src={`/uploads/${article.image_url}`} alt="..." />
            </Link>

            <div className="card-block">

                <p className="text-justify">{`${article.content.substring(0, 90)}...`}.</p>

                <p className="text-center mt-40">
                <Link className="btn btn-primary btn-round" to={`article/${article.title}`}>Read more</Link>
                </p>

            </div>
        </article>
    )
}

export default Article;