import React from 'react';
import { Chart } from 'react-google-charts';

const InfoBox = ({selectedSong, selectedSongInfo}) => {
  if(!selectedSong) return null;

  const getArtists = () => {
    return selectedSong.artists.map(artist => { return artist.name }).join(" / ");
  }

  const getData = () => {
    var danceability = parseInt(selectedSongInfo.danceability * 100, 10);
    var valence = parseInt(selectedSongInfo.valence * 100, 10);
    var energy = parseInt(selectedSongInfo.energy * 100, 10);

    return [ 
      ['Danceability', 'Happiness', 'Energy'], 
      [danceability, valence, energy]
    ];
  }

  const infoBoxStyle = {
    backgroundImage: 'url(' + selectedSong.album.images[0].url + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    width: '80%',
    margin: '40px auto'
  };

  return (
    <div id="infoBox" style={ infoBoxStyle }>
      <div id="infoTextWrap">
        <h2>{ selectedSong.name }</h2>
        <h3>{ getArtists() }</h3>
        <h4>From the album <span>{ selectedSong.album.name }</span></h4>

        <Chart
          chartType="Gauge"
          data={ getData() }
          options={{
            greenColor: "#1DB954",
            greenFrom: 80, 
            greenTo: 100,
            minorTicks: 5
          }}
          graph_id="GaugeChart"
          width="60%"
          height="200px"
        />
      </div>
    </div>
  );
}

export default InfoBox;