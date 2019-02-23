import types from './actionTypes';

const fetchRequestStart = () => ({
  type: types.FETCH_REQUEST_START,
});

const fetchRequestSuccess = () => ({
  type: types.FETCH_REQUEST_SUCCESS,
});

const fetchRequestError = () => ({
  type: types.FETCH_REQUEST_ERROR,
});

const fetchLatestPosts = latestPosts => ({
  type: types.FETCH_REQUEST_LATEST_POSTS,
  payload: latestPosts,
});

const fetchPostById = postById => {
  return {
    type: types.FETCH_REQUEST_POSTS_BY_ID,
    payload: postById,
  };
};

export default {
  fetchRequestStart,
  fetchRequestSuccess,
  fetchRequestError,
  fetchLatestPosts,
  fetchPostById,
};
