import axios from 'axios'
import {
  DATA_LOADED,
  DATA_POSTED,
  ERROR_CAPTURED
} from "../constants/action-types";

export const postData = (dataToPost = {}) => async (dispatch) => {
  try {
  console.log('here in actions', dataToPost)
    const response = await axios.post(``, dataToPost)
    alert('Formatted data has been successfully POSTed! Please see Redux tree for full data set!')
    dispatch({ type: DATA_POSTED, payload: response.data})
  } catch (error) {
    alert('Ops! Seems like there was an error. Please see Redux tree for error data set!')
    console.log(error)
    dispatch({ type: ERROR_CAPTURED, error})
  }
};

export const getData = () => async (dispatch) => {
  const searchTerm = 'term=prenatal-yoga';
  const searchLocation = '78745';
  const headers = {
    'Authorization': `Bearer ${process.env.REACT_APP_YELP_KEY}`
  }
  try {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?${searchTerm}&location=${searchLocation}`, {
      headers
    })
    dispatch({ type: DATA_LOADED, payload: response.data})
    console.log(response.data)
    return response.data;
  } catch (error) {
    alert('Ops! Seems like there was an error. Please see Redux tree for error data set!')
    dispatch({ type: ERROR_CAPTURED, error})
  }
};

export default {
  postData,
  getData
}
