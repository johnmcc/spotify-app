import React from 'react';

const Song = ({track, audio_features, onClick}) => {
  const getArtist = () => {
    return track.artists.map(artist => { return artist.name }).join(" / ");
  };

  const handleClick = () => {
    onClick(track, audio_features);
  };

  return (
    <div className="played" onClick={ handleClick }>
      <p className="song">{ track.name }</p>
      <p className="artist">{ getArtist() }</p>
    </div> 
  );
};

export default Song;