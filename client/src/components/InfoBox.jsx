import React from 'react';

export default class InfoBox extends React.Component {
  constructor(props){
    super(props);
  }

  getTrackName(){
    return this.props.selectedSong ? this.props.selectedSong.name : null;
  }

  render(){
    return <div id="infoBox">{ this.getTrackName() }</div>;
  }
}