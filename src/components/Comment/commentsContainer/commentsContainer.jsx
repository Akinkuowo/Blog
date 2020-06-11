import React from 'react';
import axios from 'axios';

import config from '../../../config/index'

import Comments from './comments/comment' 

class CommentsContainer extends React.Component {
    constructor(){
        super()

        this.state = {
            comments: ''
        }

        
    }

   componentWillMount () {
      const comments = this.props.getComments()

      console.log(comments)
    }

    
    

    render() {

        return (
                            
            <div>
                <Comments comments={this.state} />
            </div>
        )
    }
}



export default CommentsContainer;