import axios from 'axios';
import  config from '../config/index'



export default class  ArticleService {
    async getArticles () {

        const response = await axios.get(`${config.ApiUrl}/articles`)

        
      
        return response.data;
     
    }

    // async getComments () {

    //     const response = await axios.get(`${config.ApiUrl}/comments`)

    
    //     return response.data;
     
    // }

    async getUserArticles () {
        const response = await axios.get(`${config.ApiUrl}/user/articles`)

         return response.data
    }


  
    async getCategories () {
            const categories = JSON.parse(localStorage.getItem('categories'))

            if(categories){
                return categories
            }

            const response = await axios.get(`${config.ApiUrl}/categories`)
        
            localStorage.setItem('categories', JSON.stringify(response.data))
    
            return response.data;
        
    
       
    }

 

   
}