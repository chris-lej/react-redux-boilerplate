import { ADD_ARTICLE } from "../constants/action-types";

export const addArticle = (payload) => {
  return { type: "ADD_ARTICLE", payload };
}

export const getData = () => async (dispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json();
  dispatch({ type: "DATA_LOADED", payload: data})
  return data;
}
