
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
// import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
// import AboutPage from './components/AboutPage';
// import NotFoundPage from './components/NotFoundPage';

const goToBlog = (event) => {
    window.location = `http://blog.parsed.io${event.location.pathname}`;
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
      <Route path="/setup-a-mac-slave-for-jenkins/" onEnter={goToBlog}/>
  </Route>
);
