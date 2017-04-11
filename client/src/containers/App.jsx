import React from 'react';
import InfoBox from './InfoBox.jsx';
import SongList from './SongList.jsx';
import Titlebar from '../components/Titlebar.jsx';
import BeginBtn from '../components/BeginBtn.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedSong: null,
      selectedSongInfo: null
    };

    this.setSelectedSong = this.setSelectedSong.bind(this);
  }

  setSelectedSong(song, songInfo){
    this.setState({ selectedSong: song, selectedSongInfo: songInfo });
    window.scrollTo(0, 0);
  }

  render(){
    if(this.props.spotimy.accessToken){
      var element = (
        <div id="appWrapper">
          <Titlebar />
          <div id="infoWrapper">
            <InfoBox 
              selectedSong={ this.state.selectedSong } 
              selectedSongInfo={ this.state.selectedSongInfo } />
            <SongList
              spotimy={ this.props.spotimy }
              onClick={ this.setSelectedSong } />
          </div>
        </div>
      );
    }else{
      var element = (
        <div id="appWrapper">
          <Titlebar />
          <BeginBtn location={this.props.spotimy.getAuthURL()} />
        </div>
      )
    }
    
    return element;
  }
}