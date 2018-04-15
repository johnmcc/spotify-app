import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './components/MainRouter.jsx';


window.onload = function(){
  ReactDOM.render(
    <MainRouter basename={'/spotify-app'} />,
    document.getElementById('app')
  );
};
