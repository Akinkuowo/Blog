import React from 'react';
import { validateAll } from 'indicative/validator';
import './comments.css'

 class Comment extends React.Component {
    constructor(){
        super()

        this.state = {
            comment: ''
        }
    }


    render() {
        const { authUser, singleArticle } = this.props

        const handleCommentChange = (event)=> {
            this.setState({
                comment: event.target.value
            })
            
        }
    
        const handleFormSubmit = async (event) => {
            const data = this.state;
            const rules = {
            comment: 'required',
        }

        const messages = {
            required:  '{{ field }} is required.',
            'comment': 'The input field cannot be empty.',
        }

        validateAll(data, rules, messages)
        .then(()=> { 
            fetch('https://quiet-sierra-90638.herokuapp.com/article/comment', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                comment: this.state.comment,
                name: authUser.name,
                blog_id: singleArticle.id
            })
            
        }).then(response => {
            this.setState({
                comment: ''
            })

        })
        
    }).catch (error => {
        console.log(error)

    })

}

        return (
            <div className="form-group">
                  <form onSubmit={handleFormSubmit} className="p-30 bg-gray rounded" >
                        <textarea 
                            onChange={handleCommentChange}
                            name="comment" 
                            className="form-control form-control-lg" 
                            rows="4" 
                            placeholder="comment" >

                        </textarea>

                        <div className="text-center button-container">
                            <button  className="btn btn-lg btn-primary" type="submit">Send</button>
                        </div>
                </form>
            </div>
        )
    }
}

export default Comment;
