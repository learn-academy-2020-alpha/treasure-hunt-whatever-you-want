import React, { Component } from 'react';


class Counter extends Component {


  render() {
    return (
      <div>
        You have {this.props.counter} Left.
      </div>
    );
  }
}

export default Counter;
