import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './components/MainRouter.jsx';


window.onload = function(){
  ReactDOM.render(
    <MainRouter history={ hashHistory } />,
    document.getElementById('app')
  );
};
