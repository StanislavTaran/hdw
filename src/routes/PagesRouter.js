import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../constants/routes';

import UsersPage from '../pages/UsersPage/UsersPage';
import AuthorPage from '../pages/AuthorPage/AuthorPage';
import CreateUserPage from '../pages/CreateUserPage/CreateUserPage';

const PagesRouter = () => (
  <Switch>
    <Route path={routes.USERS.LIST} exact component={UsersPage} />
    <Route path={routes.USERS.FORM} exact component={CreateUserPage} />
    <Route path={routes.AUTHOR} component={AuthorPage} />
    <Redirect to={routes.USERS.LIST} />
  </Switch>
);

export default PagesRouter;
