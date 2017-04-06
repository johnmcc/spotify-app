import React from 'react';

export default class InfoBox extends React.Component {
  constructor(props){
    super(props);
  }

  getTrackName(){
    if(this.props.selectedSong){
      return this.props.selectedSong.name;
    }
  }

  getArtists(){
    if(this.props.selectedSong){
      return this.props.selectedSong.artists.map(artist => { return artist.name }).join(" / ");
    }
  }

  getImage(){
    if(this.props.selectedSong){
      return this.props.selectedSong.album.images[0].url;
    }
  }

  getAlbumName(){
    if(this.props.selectedSong){
      return this.props.selectedSong.album.name;
    }
  }

  render(){
    // debugger;
    var elements = (
      <div id="infoBox">
        <img src={ this.getImage() } />
        <div id="infoTextWrap">
          <h2>{ this.getTrackName() }</h2>
          <h3>By {this.getArtists() }</h3>
          <h4>From the album { this.getAlbumName() }</h4>
        </div>
      </div>
    );
    return this.props.selectedSong ? elements : null;
  }
}