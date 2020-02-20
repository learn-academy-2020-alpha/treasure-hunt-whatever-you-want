import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {
constructor (props){
    super(props)
    this.state = {
        board: ["?","?","?","?","?","?","?","?","?"],
        tree: "🌴"
    }
}
    handleLocation = (index) => {

        this.state.board[index] = this.state.tree
        this.setState({board: this.state.board })
        
    }

  render() {
      let square = this.state.board.map((value, index) => {
          return(
              <Square
              handleLocation= { this.handleLocation}
              index = { index }
              value = { value }
              tree = {this.state.tree}
               />
          )
      })
    return (
      <div>
        {square}
      </div>
    );
  }
}

export default Board;
