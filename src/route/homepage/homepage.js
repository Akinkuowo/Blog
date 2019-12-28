import React from 'react';

import Navigaion from '../../components/Navigation/navigation';
import Post from '../../components/Post/post';

class Homepage extends React.Component {
    render(){
        return(
            <div>
                <Navigaion />
                <Post />
            </div>
        
        );
    }
}

export default Homepage;