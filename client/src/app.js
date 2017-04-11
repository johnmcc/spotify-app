import React from 'react';
import ReactDOM from 'react-dom';

import Spotimy from './Spotimy';
import App from './containers/App.jsx';

window.onload = function(){
  var spotimy = new Spotimy();
  var element = <App spotimy={spotimy} />;

  ReactDOM.render(
    element,
    document.getElementById('app')
  );
};