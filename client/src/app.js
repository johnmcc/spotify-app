import React from 'react';
import ReactDOM from 'react-dom';

import Spotimy from './Spotimy';

import BeginBtn from './components/BeginBtn.jsx';
import SongList from './components/SongList.jsx';

window.onload = function(){
  var spotimy = new Spotimy();
  
  if(spotimy.accessToken){
    var element = <SongList url={spotimy.getRecentlyPlayedUrl()} token={spotimy.accessToken} />;
  }else{
    var element = <BeginBtn location={spotimy.getAuthURL()} />
  }

  ReactDOM.render(
    element,
    document.getElementById('app')
  );
};