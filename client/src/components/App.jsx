import React from 'react';
import SongList from './SongList.jsx';
import BeginBtn from './BeginBtn.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.spotimy.accessToken){
      var element = <SongList 
                      url={this.props.spotimy.getRecentlyPlayedUrl()} 
                      token={this.props.spotimy.accessToken} />;
    }else{
       var element = <BeginBtn location={this.props.spotimy.getAuthURL()} />
    }
    
    return element;
  }
}