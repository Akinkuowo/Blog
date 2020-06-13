import React from 'react';
import CreateArticleForm from './CreateArticleForm/CreateArticleForm';
import {EditorState, convertToRaw} from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
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
            Content: EditorState.createEmpty(),
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

    handleEditorState = (editorState) => {
        this.setState({
            Content: editorState
        })
    }


    handleFormSubmit = async (event) => {
        event.preventDefault()
        const HTML = convertToRaw(this.state.Content.getCurrentContent());
        console.log(draftToHtml(HTML))

        const { authUser } = this.props
      
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

            const response =  axios.post('https://quiet-sierra-90638.herokuapp.com/upload', formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            } ).then(response =>{
                console.log(response)
            }) 
        
            fetch('https://quiet-sierra-90638.herokuapp.com/create/article', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    image: this.state.image.name,
                    title: this.state.title,
                    category: this.state.category,
                    Content: draftToHtml(HTML),
                    author: authUser.name
                })
                
            }).then(response => {
                this.props.NotificationService.success('Article created Succsesfully')
                this.props.history.push('/')
            })
            
        }).catch (error => {
            const errorMessages = []

            error.forEach(error => errorMessages[error.field] = error.message)
            this.props.NotificationService.error('Something went wrong')
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
                // handleContentChange={this.handleContentChange} 
                content={this.state.Content}
                handleTitleChange={this.handleTitleChange} 
                categories={this.state.categories}
                errors={this.state.errors}
                handleEditorState={this.handleEditorState}
            />
        )
    }
   
}

export default CreateArticle;
