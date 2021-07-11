import axios from "axios";

const url = "https://fbclonebackend.herokuapp.com/posts";

export const fetchPosts = () =>
  axios.get(url, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("@token"),
    },
  });

export const createPost = (newPost) => {
  return axios.post(url, newPost, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("@token"),
      data: localStorage.getItem("@uid"),
    },
  });
};

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("@token"),
    },
  });

export const deletePost = (id) =>
  axios.delete(`${url}/${id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("@token"),
    },
  });
