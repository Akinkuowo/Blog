import React from 'react'
import Comment from '../comment/comment'

const Comments = ({ comments }) => {
    return (
        <div className="text-left">
          
            <Comment comment={comments}/>
        </div>
    )
}

export default Comments
