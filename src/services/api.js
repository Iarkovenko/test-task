import axios from 'axios';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const getLatestPosts = async () => {
  const response = await axios.get('/posts');
  return response.data;
};

export const getPostById = async id => {
  const response = await axios.get(`/posts/${id}?_embed=comments`);
  return response.data;
};

export const postNewComment = async newComment => {
  const response = await axios.post('/comments', newComment);
  return response.status;
};

export const removePost = async id => {
  const response = await axios.delete(`/posts/${id}`);
  return response;
};

export const createNewPost = async newPost => {
  const response = await axios.post('/posts', newPost);
  return response;
};

export const updatePostData = async (id, updateItem) => {
  const response = await axios.put(`/post/${id}`, updateItem);
  return response;
};
