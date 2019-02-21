import { combineReducers } from 'redux';

import { latestPostsReducer, postByIdReducer } from './postReducer';

export default combineReducers({
  latestPosts: latestPostsReducer,
  postById: postByIdReducer,
});
