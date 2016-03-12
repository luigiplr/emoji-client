import { combineReducers } from 'redux';
import * as actions from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts
});

export default rootReducer;
