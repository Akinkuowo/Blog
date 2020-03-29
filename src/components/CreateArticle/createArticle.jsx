import React from 'react';
import CreateArticleForm from './CreateArticleForm/CreateArticleForm';
import { validateAll } from 'indicative/validator';
import  config from '../../config/index';
import axios from 'axios';

class CreateArticle extends React.Component {
    constructor(){
        super()

        this.state ={
            image: null,
            title: '',
            category: null,
            Content: '',
            errors: [],
            categories: [],
            author: ''
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
        const { authUser } = this.props

        // console.log(authUser.name)
        // console.log(this.state)          
        const data = this.state;
        const rules = {
            image: 'required',
            title: 'required',
            category: 'required',
            Content: 'required'

        }

        const messages = {
            required:  '{{ field }} is required.',
            'image': 'An Image is needed.',
            'title': 'A title for the article is needed.',
            'category': 'Kindly select a category.',
            'content': 'An article content is needed.'

        }

        validateAll(data, rules, messages)
        .then(()=> {


            const formData = new FormData();
            formData.append('image', this.state.image);

            const response =  axios.post('http://localhost:4000/upload', formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            } ).then(response =>{
                console.log(response)
            }) 
        
            fetch('http://localhost:4000/create/article', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    image: this.state.image.name,
                    title: this.state.title,
                    category: this.state.category,
                    Content: this.state.Content,
                    author: authUser.name
                })
                
            }).then(response => {
                this.props.history.push('/')
            })
            
        }).catch (error => {
            const errorMessages = []

            error.forEach(error => errorMessages[error.field] = error.message)
            this.setState({
                    errors: errorMessages
                })

        })
    }

        
     render(){
        return(
            <CreateArticleForm 
                handleFormSubmit={this.handleFormSubmit} 
                handleImageUpload={this.handleImageUpload}
                handleImageChange={this.handleImageChange} 
                handleCategoryChange={this.handleCategoryChange} 
                handleContentChange={this.handleContentChange} 
                handleTitleChange={this.handleTitleChange} 
                categories={this.state.categories}
                errors={this.state.errors}
            />
        )
    }
   
}

export default CreateArticle;