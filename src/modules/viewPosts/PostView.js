import React from 'react';

import s from './Post.module.css';

const PostView = ({ item }) => (
  <div className={s.itemBlock}>
    <h1>{item.title}</h1>
    <p>{item.body}</p>
  </div>
);

export default PostView;
