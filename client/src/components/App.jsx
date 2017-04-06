import React from 'react';
import InfoBox from './InfoBox.jsx';
import SongList from './SongList.jsx';
import BeginBtn from './BeginBtn.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedSong: null
    };

    this.setSelectedSong = this.setSelectedSong.bind(this);
  }

  setSelectedSong(song){
    this.setState({ selectedSong: song });
    window.scrollTo(0, 0);
  }

  render(){
    if(this.props.spotimy.accessToken){
      var element = (
        <div id="infoWrapper">
          <InfoBox selectedSong={ this.state.selectedSong } />
          <SongList
            onClick={ this.setSelectedSong }
            url={ this.props.spotimy.getRecentlyPlayedUrl() } 
            token={ this.props.spotimy.accessToken } />
        </div>
      );
    }else{
       var element = <BeginBtn location={this.props.spotimy.getAuthURL()} />
    }
    
    return element;
  }
}