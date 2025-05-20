import axios from "axios";


const apiClient = axios.create({
    baseURL: "https://seeding-nc-news-5ee3.onrender.com/api"
})

export const getArticles = ()=>{
    return apiClient
    .get(`/articles`)
    .then((response)=>{
        return response.data.articles
    })
    .catch((err)=>{
        console.log(err)
        throw err
    })
}

export const getArticlesID = (article_id)=>{
    return apiClient
    .get(`/articles/${article_id}`)
    .then((response)=>{
        return response.data.article
    })
    .catch((err)=>{
        console.log(err)
        throw err
    })
}
