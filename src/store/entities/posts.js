import { apiCallBegan } from "./api";

import { createSlice } from "@reduxjs/toolkit";

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

    postDeleted: (posts, action) => {
      if (action.payload.success) {
        const index = posts.list.findIndex(({id}) => id === action.payload.comment.post_id);

        posts.list.splice(index, 1);
      }
    },

    commentAdded: (posts, action) => {
      const index = posts.list.findIndex(({id}) => id === action.payload.comment.post_id)
      let post = posts.list[index];
      let comments = post.comments || [];
      comments.push(action.payload.comment);
      post.comments = comments;
      posts.list[index] = post;
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
    method: "POST",
    data: { body: text },
    onSuccess: postCreated.type,
  });

export const deletePost = id =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: "DELETE",
    onSuccess: postDeleted.type,
  });

export const addComment = (id, text) =>
  apiCallBegan({
    url: `${url}/${id}/comment`,
    method: "POST",
    data: { body: text },
    onSuccess: commentAdded.type,
  });

const {
  postRequest,
  postCreated,
  postDeleted,
  commentAdded,
  postsLoaded,
  postRequestFailed,
} = slice.actions;

export default slice.reducer;