import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://seeding-nc-news-5ee3.onrender.com/api",
});

export const getArticles = () => {
  return apiClient
    .get(`/articles`)
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const getArticlesByID = (article_id) => {
  return apiClient
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const getCommentsByArticleId = (article_id) => {
  return apiClient
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const postComment = (article_id, username, body) => {
  return apiClient

    .post(`/articles/${article_id}/comments`, { username, body })
    .then((response) => {
      return response;
    });
};

export const deleteComment = (commentId) => {
  console.log(commentId);
  return apiClient.delete(`/comments/${commentId}`, commentId).then((response) => {
    return response;
  });
};


export const getTopics = () => {
  return apiClient
    .get(`/topics`)
    .then((response) => {
      return response.data.topics;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
