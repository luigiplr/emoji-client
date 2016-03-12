import { combineReducers } from 'redux';
import posts from './posts';
import map from './map';

const rootReducer = combineReducers({
  posts,
  map
});

export default rootReducer;
