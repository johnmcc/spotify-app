import React from 'react';
import App from '../containers/App.jsx';
import About from './About.jsx';
import Spotimy from '../Spotimy';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MainRouter = () => {
  var spotimy = new Spotimy();

  return (
    <Router history={browserHistory} basename={'spotify-app'}>
      <div>
        <div id="titlebar">
          <h1>Spotimy</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <Route exact path="/" render={() => <App spotimy={spotimy} /> } />
        <Route path="/about" component= { About } />
      </div>
    </Router>
  );
};

export default MainRouter;
