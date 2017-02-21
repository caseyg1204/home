
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Signup from './components/TipsSignup';
import Roadmap from './components/Roadmap';

const goToBlog = (event) => {
    window.location = `http://blog.parsed.io${event.location.pathname}`;
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/setup-a-mac-slave-for-jenkins/" onEnter={goToBlog}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/front-end-roadmap" component={Roadmap}/>
    <Route path="*" component={HomePage}/>
  </Route>
);
