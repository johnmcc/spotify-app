import React from 'react';

export default class Song extends React.Component {
  constructor(props){
    super(props);
  }

  getArtist(){
    return this.props.track.artists.map(artist => { return artist.name }).join(" / ");
  }

  render(){
    return (
      <div className="played">
        <p className="song">{ this.props.track.name }</p>
        <p className="artist">{ this.getArtist() }</p>
      </div> 
    );
  }
}