import React, { Component } from 'react';


class Square extends Component {

    handleClick = () => {
        this.props.handleLocation(this.props.index)
    }
  render() {
    return (
      <div>
      <div id="box" onClick={ this.handleClick}>{this.props.value}</div>
      </div>
    );
  }
}

export default Square;
