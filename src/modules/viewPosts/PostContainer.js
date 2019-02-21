import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PostView from './PostView';
import CommentForm from './CommentForm';

import operation from '../../redux/postOperation';
import * as API from '../../services/api';

const INITIAL_STATE = {
  commentText: '',
};

class PostPage extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidMount() {
    const {
      getPostById,
      match: { params },
    } = this.props;
    const id = params.id;
    getPostById(id);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  addCommentToPost = e => {
    e.preventDefault();
    const {
      getPostById,
      match: { params },
    } = this.props;
    const { commentText } = this.state;
    const id = params.id;

    API.postNewComment({
      postId: Number(id),
      body: commentText,
    }).then(status => {
      if (status !== 201) return;
      getPostById(id);
    });
  };

  render() {
    const { commentText, post } = this.props;
    return (
      <>
        <PostView item={post} />
        <CommentForm
          handleChange={this.handleChange}
          addCommentToPost={this.addCommentToPost}
          value={commentText}
        />
      </>
    );
  }
}

const mapState = state => ({
  post: state.postById,
});

const mapDispatch = {
  getPostById: operation.fetchPostById,
};

export default connect(
  mapState,
  mapDispatch,
)(withRouter(PostPage));
