import types from './actionTypes';

export function latestPostsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST_LATEST_POSTS:
      return payload;
    default:
      return state;
  }
}

export function postByIdReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST_POSTS_BY_ID:
return payload;
    default:
      return state;
  }
}
