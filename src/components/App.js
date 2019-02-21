import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loader from '../modules/loader/Loader';

import routes from '../configs/routes';

import Nav from './Nav';

const LatestPostPageAsync = lazy(() =>
  import('../pages/LatestPostPage' /* webpackChunkName: "list-posts-page" */),
);

const PostPageAsync = lazy(() =>
  import('../pages/PostPage' /* webpackChunkName: "post-page" */),
);

const CreatPostAsync = lazy(() =>
  import('../pages/CreatePostPage' /* webpackChunkName: "create-post" */),
);

const App = () => (
  <>
    <Suspense fallback={<Loader />}>
      <Nav />
      <Switch>
        <Route exact path={routes.LATEST_POSTS} component={LatestPostPageAsync} />
        <Route exact path={routes.VIEW_POST} component={PostPageAsync} />
        <Route exact path={routes.ADD_POST} component={CreatPostAsync} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
