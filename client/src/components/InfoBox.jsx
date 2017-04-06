import React from 'react';
import { Chart } from 'react-google-charts';

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

  getData(){
    if(this.props.selectedSongInfo){
      var danceability = parseInt(this.props.selectedSongInfo.danceability * 100, 10);
      var valence = parseInt(this.props.selectedSongInfo.valence * 100, 10);
      var energy = parseInt(this.props.selectedSongInfo.energy * 100, 10);

      return [ 
        ['Danceability', 'Happiness', 'Energy'], 
        [danceability, valence, energy]
      ];
    }
  }

  render(){
    var elements = (
      <div id="infoBox">
        <img src={ this.getImage() } />
        <div id="infoTextWrap">
          <h2>{ this.getTrackName() }</h2>
          <h3>By {this.getArtists() }</h3>
          <h4>From the album { this.getAlbumName() }</h4>

          <Chart
            chartType="Gauge"
            data={this.getData()}
            options={{
              greenColor: "#1DB954",
              greenFrom: 80, greenTo: 100,
              minorTicks: 5
            }}
            graph_id="GaugeChart"
            width="50%"
            height="200px"
          />
        </div>
      </div>
    );
    return this.props.selectedSong ? elements : null;
  }
}