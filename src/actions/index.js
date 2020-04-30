import axios from 'axios'
import {
  DATA_LOADED,
  ERROR_CAPTURED
} from "../constants/action-types";

export const getData = (category) => async (dispatch) => {
  const searchTerm = `term=${category}`;
  const searchLocation = 'Austin, TX';
  const headers = {
    'Authorization': `Bearer ${process.env.REACT_APP_YELP_KEY}`
  }
  try {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?${searchTerm}&location=${searchLocation}&limit=50`, {
      headers
    })
    dispatch({ type: DATA_LOADED, payload: {...response.data, searchCategory: category}})
  } catch (error) {
    alert('Ops! Seems like there was an error. Please see Redux tree for error data set!')
    dispatch({ type: ERROR_CAPTURED, error})
  }
};

export default {
  getData
}
