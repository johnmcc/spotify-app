import React from 'react';
import ReactDOM from 'react-dom';

import Spotimy from './Spotimy';

import BeginBtn from './components/BeginBtn.jsx';
import App from './components/App.jsx';

window.onload = function(){
  var spotimy = new Spotimy();
  var element = <App spotimy={spotimy} />;

  ReactDOM.render(
    element,
    document.getElementById('app')
  );
};