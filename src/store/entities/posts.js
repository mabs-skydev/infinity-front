import { apiCallBegan } from "./api";

const { createSlice, createSelector } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    loading: false,
    lastFetched: null,
  },
  reducers: {
    postsLoaded: (posts, action) => {
      posts.list = action.payload.posts;
    },

    postCreated: (posts, action) => {
      posts.list.push(action.payload.post)
    },

    postRequest: (posts, action) => {
      posts.loading = true;
    },

    postRequestFailed: (posts, action) => {
      posts.loading = false;
    },
  },
});

// Actions
const url = "/posts";
export const loadPosts = () =>
  apiCallBegan({
    url,
    onSuccess: postsLoaded.type,
    onLoading: postRequest.type,
    onError: postRequestFailed.type,
  });

export const addPost = text =>
  apiCallBegan({
    url,
    method: "post",
    data: { body: text },
    onSuccess: postCreated.type,
  });

const {
  postRequest,
  postCreated,
  postsLoaded,
  postRequestFailed,
} = slice.actions;

export default slice.reducer;