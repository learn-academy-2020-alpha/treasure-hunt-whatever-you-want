import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {
constructor (props){
    super(props)
    this.state = {
        board: ["?","?","?","?","?","?","?","?","?"],
        tree: "🌴",
        treasure: null,
        bomb: null,
        treasureIcon: "🏆",
        bombIcon: "💣"

    }
}
    handleLocation = (index) => {
        //if clicked index === bombLocation retun bomblocation
        if (index === this.state.treasure){
            this.state.board[index] = this.state.treasureIcon
            this.setState({board: this.state.board})
        }else if (index === this.state.bomb){
            this.state.board[index] = this.state.bombIcon
            this.setState({board: this.state.board})
        }else
        this.state.board[index] = this.state.tree
        this.setState({board: this.state.board})
    }
    componentDidMount = () => {
        let {board, tree, bomb, treasure} = this.state
        const treasureLocation =  (Math.floor(Math.random() * board.length))
        console.log(treasureLocation);
         this.setState({treasure: treasureLocation})
        const bombLocation = (Math.floor(Math.random() * board.length))
        console.log(bombLocation);
            this.setState({bomb: bombLocation})
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
