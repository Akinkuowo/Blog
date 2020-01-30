import axios from 'axios';
import  config from '../config/index'

export default class  ArticleService {
    async getCategories () {
        const response = await axios.get(`${config.ApiUrl}/categories`)

        return response.data;
    }


   createArticle = async (data) =>{
        const image = await this.uploadImage(data.image);


        try{
            const response = await axios.post(`${config.ApiUrl}/article`, {
                title: data.title,
                category_id: data.category,
                content: data.content,
                image_url: image.secure_url,
                date: new Date()
            })
    
            console.log(response)
    
            return response.data;

        } catch(errors){
            console.log(errors)

            return errors.response.data;
        }
        
    }

    async uploadImage(image){
        const form = new FormData();

        form.append('file', image)
        form.append('upload-preset', 'tsmkhdl8')

        const response = await axios.post('https://api.cloudinary.com/v1_1/programmed-life-media/image/upload', form)

        console.log(response)

        return response.data;
    }
}