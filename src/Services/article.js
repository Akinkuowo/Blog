import axios from 'axios';
import  config from '../config/index'


export default class  ArticleService {
    async getArticles () {
        const response = await axios.get(`${config.ApiUrl}/articles`)

        return response.data;
    }

 
    async getCategories () {
        const response = await axios.get(`${config.ApiUrl}/categories`)

        return response.data;
    }

 

   
}