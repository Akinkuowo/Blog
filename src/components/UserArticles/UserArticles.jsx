import React from 'react';
import './userArticles.css';
import Articles from './Articles/Articles';




class UserArticles extends React.Component{
	constructor(){
		super()

		this.state = {
			articles: [],
			showArticles: 10,
			articleId: ""
		}
	}

	async componentWillMount(){
		const articles = await this.props.getUserArticles();
		
		
		this.setState({ articles })
		
		this.props.getUserArticles(articles)
		// localStorage.setItem('articles', JSON.stringify(this.state.articles))
	}

	handleShowMore = () => {
		this.setState({
		  showArticles: 
			this.state.showArticles >= this.state.articles.length ?
			  this.state.showArticles : this.state.showArticles + 5
		})
	  }

	  articleId = (articleId) => {
		  this.setState({ articleId })
		  this.props.getArticleId(articleId)
	  }



	render(){
		return (
 			
			<Articles articleId={this.articleId} articles={this.state.articles} showArticles={this.state.showArticles} handleShowMore={this.handleShowMore}/>
		);

	}

		
}


export default UserArticles;