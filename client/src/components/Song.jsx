import React from 'react';

export default class Song extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  getArtist(){
    return this.props.track.artists.map(artist => { return artist.name }).join(" / ");
  }

  handleClick(){
    this.props.onClick(this.props.track, this.props.audio_features);
  }

  render(){
    return (
      <div className="played" onClick={ this.handleClick }>
        <p className="song">{ this.props.track.name }</p>
        <p className="artist">{ this.getArtist() }</p>
      </div> 
    );
  }
}