import axios from 'axios'
import {
  DATA_LOADED,
  ERROR_CAPTURED
} from "../constants/action-types";

export const getData = () => async (dispatch) => {
  const searchTerm = 'term=prenatal-yoga';
  const searchLocation = 'Austin, TX';
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
  getData
}
