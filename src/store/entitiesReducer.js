import { combineReducers } from "redux";
import postsReducer from "./entities/posts";

export default combineReducers({
  posts: postsReducer,
});
