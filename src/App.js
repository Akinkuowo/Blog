import React from 'react';
import './app.css';
import Articles from './components/Articles/Articles';




class App extends React.Component{
	constructor(){
		super()

		this.state = {
			articles: [],
			showArticles: 10,
			articleId: ""
		}
	}

	async componentWillMount(){
		const articles = await this.props.getArticles();
		 console.log(articles)
		
		this.setState({ articles })
		
		this.props.setArticles(articles)
		localStorage.setItem('articles', JSON.stringify(this.state.articles))
	}

	handleShowMore = () => {
		this.setState({
		  showArticles: 
			this.state.showArticles >= this.state.articles.length ?
			  this.state.showArticles : this.state.showArticles + 5
		})
	  }





	render(){
		return (
 			
			<Articles articleId={this.articleId} articles={this.state.articles} showArticles={this.state.showArticles} handleShowMore={this.handleShowMore}/>
		);

	}

		
}


export default App;