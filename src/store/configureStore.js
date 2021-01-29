import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";

const store = function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  });
}

export default store;
