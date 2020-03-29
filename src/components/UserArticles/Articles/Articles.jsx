import React from 'react';

import Article from './Article/article';
import Banner from './Banner/banner';


import './articles.css'

// const Articles = ({ articles, showArticles, handleShowMore, articleId }) => {

class Articles extends React.Component {
	constructor(){
		super()

		this.state = {
			articleId: ''
		}
	}

	
	getArticleId = (articleId) =>{
		this.setState({ articleId })
		
		this.props.articleId(articleId)

	}

	render() {
		const {  articles, showArticles, handleShowMore  } = this.props;
		
		
		return (
			<div >
				<Banner />
				<main className="main-content bg-gray">
					<div className="row">
						<div className="col-12 col-lg-6 offset-lg-3">
						 {
						 articles && articles.slice(0, showArticles).map(article => (
							<div key={article.id}>
								<Article getArticleId={this.getArticleId} article={article} />
								<hr />
							</div>))
						}
						
							<nav className="more-articles ">
	
								<button onClick={handleShowMore} className="btn btn-white ">More Articles
									<i className="ti-arrow-right "></i> 
								</button>
							</nav>
	
						</div>
					</div>
				</main>
				
			</div>
		)
	}
}


export default Articles;

