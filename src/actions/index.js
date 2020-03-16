import axios from 'axios'
import {
  DATA_LOADED,
  DATA_POSTED,
  ERROR_CAPTURED
} from "../constants/action-types";

export const postData = (dataToPost = {}) => async (dispatch) => {
  try {
  console.log('here in actions', dataToPost)
    const response = await axios.post(`https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=${process.env.REACT_APP_HUBSPOT_API_KEY}`, dataToPost)
    alert('Formatted data has been successfully POSTed! Please see Redux tree for full data set!')
    dispatch({ type: DATA_POSTED, payload: response.data})
  } catch (error) {
    alert('Ops! Seems like there was an error. Please see Redux tree for error data set!')
    console.log(error)
    dispatch({ type: ERROR_CAPTURED, error})
  }
};

export const getData = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=${process.env.REACT_APP_HUBSPOT_API_KEY}`)
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
