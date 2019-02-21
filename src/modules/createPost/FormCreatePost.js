import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as API from '../../services/api';
import operations from '../../redux/postOperation';

const INITIAL_STATE = {
  body: '',
  title: '',
};

class FormCreatePost extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    API.createNewPost({ title, body }).then(({ status }) => {
      if (status !== 201) return;
      this.setState({ ...INITIAL_STATE });
    });
  };

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Title</p>
        <textarea name="title" value={title} onChange={this.handleChange} />
        <p>Body</p>
        <textarea name="body" value={body} onChange={this.handleChange} />
        <button type="submit">Добавить новый пост</button>
      </form>
    );
  }
}

const mapDispatch = {
  fetchLatestPosts: operations.fetchLatestPosts,
};

export default connect(
  null,
  mapDispatch,
)(FormCreatePost);
