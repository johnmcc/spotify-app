import React from 'react';

const BeginBtn = ({location}) => {
  const getToken = () => {
    window.location = location;
  }

  return (
    <button onClick={ getToken }>Begin</button>
  )
};

export default BeginBtn;