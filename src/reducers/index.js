import { combineReducers } from 'redux';
import postReduser from './reducer-post';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: postReduser, 
  form: formReducer
});

export default rootReducer;
