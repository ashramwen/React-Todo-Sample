import { combineReducers } from 'redux';
import todos from './todos';
import func from './func';

const rootReducer = combineReducers({
  todos,
  func
});

export default rootReducer;
