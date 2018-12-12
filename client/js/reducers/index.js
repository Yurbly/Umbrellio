import { combineReducers } from 'redux';
import todos from './todos/todos';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
