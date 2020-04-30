import {
  DATA_LOADED,
  ERROR_CAPTURED
} from "../constants/action-types";

const initialState = {
  apiData: [],
  postedData: {},
  error: null,
  searchCategory: ''
};

const rootReducer = (state = initialState, action) => {
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      apiData: action.payload
    });
  }

  if (action.type === ERROR_CAPTURED) {
    return Object.assign({}, state, {
      error: action.error
    });
  }

  return state;
};

export default rootReducer;
