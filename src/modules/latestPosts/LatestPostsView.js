import React from 'react';
import { Link } from 'react-router-dom';

import s from './PostsList.module.css';

const LatestPostView = ({ posts, location, handleDelete }) => (
  <>
    <div>
      {posts.map(({ id, title }) => (
        <div key={id} className={s.cartBlock}>
          <h4>{id}</h4>
          <Link
            to={{
              pathname: `posts/${id}`,
              state: { from: location },
            }}
          >
            <h3>{title}</h3>
          </Link>
          <button type="button" onClick={() => handleDelete(id)}>Удалить</button>
        </div>
      ))}
    </div>
  </>
);

export default LatestPostView;
