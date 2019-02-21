import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../configs/routes';

import s from './Nav.module.css';

const Nav = () => (
  <ul className={s.listStyle}>
    <li className={s.link}>
      <Link to={routes.LATEST_POSTS}>Latest Post</Link>
      <Link to={routes.ADD_POST}>Add post</Link>
    </li>
  </ul>
);

export default Nav;
