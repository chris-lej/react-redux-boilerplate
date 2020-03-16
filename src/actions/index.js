import axios from 'axios'
import {
  DATA_LOADED,
  DATA_POSTED,
  ERROR_CAPTURED
} from "../constants/action-types";

export const postData = (dataToPost = {}) => async (dispatch) => {
  try {
  console.log('here in actions', dataToPost)
    const response = await axios.post(`https://jsonplaceholder.${process.env.REACT_APP_BOILERPLATE_KEY}.com/posts`, dataToPost)
    dispatch({ type: DATA_POSTED, payload: response.data})
  } catch (error) {
    dispatch({ type: ERROR_CAPTURED, error})
  }
};

export const getData = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.${process.env.REACT_APP_BOILERPLATE_KEY}.com/posts`)
    dispatch({ type: DATA_LOADED, payload: response.data})
    return response.data;
  } catch (error) {
    dispatch({ type: ERROR_CAPTURED, error})
  }
};

export default {
  postData,
  getData
}
