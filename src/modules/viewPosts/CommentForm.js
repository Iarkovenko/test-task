import React from 'react';

const CommentForm = ({ handleChange, addCommentToPost, value }) => (
  <form onChange={handleChange} onSubmit={addCommentToPost}>
    <textarea name="commentText" value={value} />
    <button type="submit">Добавить комментарий</button>
  </form>
);

export default CommentForm;
