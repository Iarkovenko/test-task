import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as API from '../../services/api';
import operations from '../../redux/postOperation';

import LatestPostView from './LatestPostsView';

class LatestPostContaier extends Component {
  componentDidMount() {
    const { fetchLatestPosts } = this.props;
    fetchLatestPosts();
  }

  handleDelete = id => {
    API.removePost(id).then(({ status }) => {
      if (status !== 200) return;
      const { fetchLatestPosts } = this.props;
      fetchLatestPosts();
    });
  };

  render() {
    const { latestPost, match, location } = this.props;
    return (
      <LatestPostView
        posts={latestPost}
        match={match}
        location={location}
        handleDelete={this.handleDelete}
      />
    );
  }
}

const mapState = state => ({
  latestPost: state.latestPosts,
});
const mapDispatch = {
  fetchLatestPosts: operations.fetchLatestPosts,
};

export default connect(
  mapState,
  mapDispatch,
)(withRouter(LatestPostContaier));
