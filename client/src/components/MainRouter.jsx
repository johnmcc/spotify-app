import React from 'react';
import App from '../containers/App.jsx';
import About from './About.jsx';
import Spotimy from '../Spotimy';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MainRouter = () => {
  var spotimy = new Spotimy();
  let hashHistory = Router.hashHistory;

  return (
    <Router history={ hashHistory }>
      <div>
        <div id="titlebar">
          <h1>Spotimy</h1>
          <ul>
            <li><Link to="/spotify-app/">Home</Link></li>
            <li><Link to="/spotify-app/about">About</Link></li>
          </ul>
        </div>

        <Route exact path="/spotify-app/" render={() => <App spotimy={spotimy} /> } />
        <Route path="/spotify-app/about" component= { About } />
      </div>
    </Router>
  );
};

export default MainRouter;
