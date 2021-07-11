import { CREATE, DELETE, FETCH_ALL, UPDATE } from "../constants";

export const postsReducer = (state = [], { type, postsPayload }) => {
  switch (type) {
    case FETCH_ALL:
      return { postsPayload };

    case CREATE:
      // console.log([...state.postsPayload, postsPayload]);
      return { postsPayload: [...state.postsPayload, postsPayload] };

    case UPDATE:
      // console.log({ postsPayload });
      console.log({ state });
      return {
        postsPayload: state.postsPayload.map((post) =>
          post._id === postsPayload._id ? postsPayload : post
        ),
      };

    case DELETE:
      return {
        postsPayload: state.postsPayload.filter(
          (post) => post._id !== postsPayload
        ),
      };
    default:
      return state;
  }
};
