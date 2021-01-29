import axios from "axios";
import * as actions from "../entities/api";

export default ({ dispatch, getState }) => next => async action => {
  console.log("middleware", action);
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onSuccess, onError, onLoading } = action.payload;
  if (onLoading) dispatch({ type: onLoading });

  next(action);
  try {
    const response = await axios({
      baseURL: "http://localhost:8000/api",
      url,
      method,
      data,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: actions.apiCallFailed.type, payload: error.message });
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};
