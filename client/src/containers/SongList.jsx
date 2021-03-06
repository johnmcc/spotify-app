import React from 'react';
import Song from '../components/Song.jsx'

export default class SongList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      songs: [],
      audio_features: []
    }
  }

  componentDidMount(){
    const options = {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + this.props.spotimy.accessToken
      }
    };

    fetch(this.props.spotimy.getRecentlyPlayedUrl(), options).then(response => {
      response.json().then(data => {
        this.setState({songs: data.items});
        return data.items.map(item => { return item.track.id }).join(",");
      }).then(ids => {
        fetch(this.props.spotimy.getSongInfoUrl(ids), options).then(response => {
          response.json().then(data => {
            this.setState({audio_features: data.audio_features});
          });
        });
      });
    });
  }

  render(){
    let rows = [];
    for(let [index, song] of this.state.songs.entries()){
      rows.push(
        <Song
          key={ index }
          spotimy={ this.props.spotimy }
          onClick={ this.props.onClick }
          audio_features={ this.state.audio_features[index] }
          track={ song.track } />
      );
    }
    return <div id="songList">{rows}</div>
  }
}
