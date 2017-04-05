import React from 'react';

export default class BeginBtn extends React.Component {
  constructor(props){
    super(props);
    this.getToken = this.getToken.bind(this);
  }

  getToken(){
    window.location = this.props.location;
  }

  render() {
    return (
      <button onClick={ this.getToken }>Begin</button>
    )
  }
}