import React, { Component } from 'react';


class Reset extends Component {


  render() {
    return (
      <div>
        <button onClick= {this.props.reset}>Reset Game</button>
      </div>
    );
  }
}

export default Reset;
