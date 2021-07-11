import { createPost, deletePost, fetchPosts, updatePost } from "../api";
import { CREATE, DELETE, FETCH_ALL, UPDATE } from "../constants";

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await fetchPosts();
    dispatch({ type: FETCH_ALL, postsPayload: data });
  } catch (error) {
    console.error(error);
  }
};

export const makePost = (post) => async (dispatch) => {
  try {
    const { data } = await createPost(post);
    console.log("makePost");
    console.log({ data });

    dispatch({ type: CREATE, postsPayload: data });
  } catch (e) {
    console.error(e);
  }
};

export const renewPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await updatePost(id, post);
    dispatch({ type: UPDATE, postsPayload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const delPost = (id) => async (dispatch) => {
  try {
    await deletePost(id);
    dispatch({ type: DELETE, postsPayload: id });
  } catch (error) {
    console.log(error.message);
  }
};
