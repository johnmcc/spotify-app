import React from 'react';
import { Chart } from 'react-google-charts';

const InfoBox = ({selectedSong, selectedSongInfo}) => {
  const getTrackName = () => {
    if(selectedSong){
      return selectedSong.name;
    }
  }

  const getArtists = () => {
    if(selectedSong){
      return selectedSong.artists.map(artist => { return artist.name }).join(" / ");
    }
  }

  const getImage = () => {
    if(selectedSong){
      return selectedSong.album.images[0].url;
    }
  }

  const getAlbumName = () => {
    if(selectedSong){
      return selectedSong.album.name;
    }
  }

  const getData = () => {
    if(selectedSongInfo){
      var danceability = parseInt(selectedSongInfo.danceability * 100, 10);
      var valence = parseInt(selectedSongInfo.valence * 100, 10);
      var energy = parseInt(selectedSongInfo.energy * 100, 10);

      return [ 
        ['Danceability', 'Happiness', 'Energy'], 
        [danceability, valence, energy]
      ];
    }
  }

  const infoBoxStyle = {
    backgroundImage: 'url(' + getImage() + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
  };

  const elements = (
    <div id="infoBox" style={ infoBoxStyle }>
      <div id="infoTextWrap">
        <h2>{ getTrackName() }</h2>
        <h3>By { getArtists() }</h3>
        <h4>From the album { getAlbumName() }</h4>

        <Chart
          chartType="Gauge"
          data={ getData() }
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

  return selectedSong ? elements:null;
}

export default InfoBox;