import React from 'react';
import Song from './Song.jsx'

export default class SongList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    var options = { 
      method: "GET",
      headers: {
        "Authorization": "Bearer " + this.props.token
      }
    };

    fetch(this.props.url, options).then(response => {
      response.json().then(data => {
        this.setState({songs: data.items});
      });
    });
  }

  render(){
    var rows = [];
    for(let [index, song] of this.state.songs.entries()){
      rows.push(<Song key={index} track={song.track} />);
    }
    return <div>{rows}</div>
  }
}