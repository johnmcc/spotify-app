import React from 'react';

export default class Song extends React.Component {
  constructor(props){
    super(props);
  }

  getArtist(){
    return this.props.track.artists[0].name;
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