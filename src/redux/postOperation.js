import * as API from '../services/api';
import actions from './postActions';

const fetchLatestPosts = () => dispatch => {
  API.getLatestPosts()
    .then(data => {
      dispatch(actions.fetchRequestStart());
      dispatch(actions.fetchLatestPosts(data));
      dispatch(actions.fetchRequestSuccess());
    })
    .catch(() => dispatch(actions.fetchRequestError()));
};

const fetchPostById = id => dispatch => {
  API.getPostById(id)
    .then(data => {
      dispatch(actions.fetchRequestStart());
      dispatch(actions.fetchPostById(data));
      dispatch(actions.fetchRequestSuccess());
    })
    .catch(() => dispatch(actions.fetchRequestError()));
};

export default {
  fetchLatestPosts,
  fetchPostById,
};
