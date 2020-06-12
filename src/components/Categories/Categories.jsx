import React from 'react';

import axios from 'axios';

import config from '../../config'

class Categories extends React.Component{
    constructor(){
        super()

        this.state = {
            Categories: '',
            
        }
    }

    

     handleCategoriesChange = (event)=> {
        this.setState({
            Categories: event.target.value
        })
    }

    
    
    handleFormSubmit = (event) => {
        event.preventDefault()

            console.log(this.state)
             //register user
            axios.post(`${config.ApiUrl}/add/Categories`,  {
                    Categories: this.state.Categories,
                
            })
            .catch(errors => {
               
                const formatedErrors = {}
                // formatedErrors['email'] = errors.response.data['email'][0]
                // this.setState({
                //     errors: formatedErrors
                // })
                console.log(errors.response)
            })
    }
    
    
    render(){
        return(
            <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-girl.jpg)`}}>
              <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
                <h5 className="text-uppercase text-center">Add Categories</h5>
                <br /><br />

                <form className="form-type-material" onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleCategoriesChange} name="Categories" type="text" className="form-control" placeholder="Add Categories" />
                    </div>

                    <br />
                    <button className="btn btn-bold btn-block btn-primary" type="submit">Add Categories</button>
                </form>


            </div>
        </div>
        );
    }
}

export default Categories;