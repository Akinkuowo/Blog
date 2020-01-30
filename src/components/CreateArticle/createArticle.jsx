import React from 'react';
import CreateArticleForm from './CreateArticleForm/CreateArticleForm';
// import { validateAll } from 'indicative/validator';
import axios from 'axios';
import config from '../../config/index'

class CreateArticle extends React.Component {
    constructor(){
        super()

        this.state ={
            image: null,
            title: '',
            category: null,
            Content: '',
            errors: {},
            categories: []
        }
    }

     async componentWillMount(){

        const categories = await this.props.getCategories();

        
        this.setState({
            categories: categories
        })


    }

    handleImageChange = (event)=> {
        this.setState({
            image: event.target.files[0]
        })
    }

    
    handleTitleChange = (event)=> {
        this.setState({
            title: event.target.value
        })
    
    }

    
    handleContentChange = (event)=> {
        this.setState({
            Content: event.target.value
        })

    }

    handleCategoryChange = (event)=> {
        this.setState({
            category: event.target.value
        })

    }


    handleFormSubmit = async (event) => {
        event.preventDefault()

        try{
        const article = await this.props.createArticle(this.state)
         this.props.history.push('/')
        }catch(errors){
            this.setState({
                errors
            })
        }

        

       
}

     render(){
        return(
            <CreateArticleForm 
                handleFormSubmit={this.handleFormSubmit} 
                handleImageChange={this.handleImageChange} 
                handleCategoryChange={this.handleCategoryChange} 
                handleContentChange={this.handleContentChange} 
                handleTitleChange={this.handleTitleChange} 
                categories={this.state.categories}
            />
        )
    }
   
}

export default CreateArticle;