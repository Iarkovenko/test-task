import React from 'react';

const CommentsList = ({ comments = [] }) => (
  <ul>
    {comments.length > 0 ? (
      comments.map(({ id, body }) => <li key={id}>{body}</li>)
    ) : (
      <p>Dont have comments</p>
    )}
  </ul>
);

export default CommentsList;

