import React from 'react';
import './app.css';
import Articles from './components/Articles/Articles';




class App extends React.Component{
	constructor(){
		super()

		this.state = {
			articles: []
		}
	}

	async componentWillMount(){
		const articles = await this.props.getArticles();

		this.setState({ articles })

	}

	render(){
		return (
 			
			<Articles articles={this.state.articles}/>
		);

	}

		
}


export default App;