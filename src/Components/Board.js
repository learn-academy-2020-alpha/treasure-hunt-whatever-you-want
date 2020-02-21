import React, { Component } from 'react';
import Square from './Square'
import Reset from './Reset'
import Counter from './Counter'
class Board extends Component {
constructor (props){
    super(props)
    this.state = {
        board: ["?","?","?","?","?","?","?","?","?"],
        tree: "🌴",
        treasure: null,
        bomb: null,
        treasureIcon: "🏆🏅💰🏆🏅💰🏆🏅💰🏆🏅💰",
        bombIcon: "💣💣💣💣💣💣💣💣💣💣💣💣",
        counter: 4

    }
}
    handleLocation = (index) => {
        //if clicked index === bombLocation retun bombIcon
        //if clicked index === treasureLocation retun treasureIcon
        // This ⏬ is logic so you can't click sme sqaure
        if (this.state.board[index] === "?"){
        if (index === this.state.treasure){
            this.state.board[index] = this.state.treasureIcon
            this.setState({board: this.state.board})
                setTimeout(() =>{alert("You are a WINNER!")}, 200)
                setTimeout(() => {window.location.reload()}, 1000)



        }else if (index === this.state.bomb){
            this.state.board[index] = this.state.bombIcon
            this.setState({board: this.state.board})
            setTimeout(() =>{alert("Sorry, You lose, Try again!")}, 200)
            setTimeout(() => {window.location.reload()}, 1000)

        }else if( this.state.counter <= 1 ){
            setTimeout(() =>{alert("Sorry, You lose, Try again!")}, 200)
            setTimeout(() => {window.location.reload()}, 1000)
        }
        else
        // Adding in the counter into the handleLocation, so everytime user clicks, then the counter subtracts 1.
        this.state.board[index] = this.state.tree
        let noNegatives = this.state.counter
        if( noNegatives < 1){
            noNegatives = 0
        }else{
            noNegatives -= 1
        }
        this.setState({board: this.state.board,    counter: noNegatives
        })
        }
    }
    componentDidMount = () => {
        let {board, bomb, treasure} = this.state
        let treasureLocation =  (Math.floor(Math.random() * board.length))
        console.log(treasureLocation);
         this.setState({treasure: treasureLocation})
        let bombLocation = (Math.floor(Math.random() * board.length))
        console.log(bombLocation);
        if (treasureLocation === bombLocation){

        }
            this.setState({bomb: bombLocation})
     }
     //this resetButton function is resetting by using a setState and changing the board back to our origional board.
     //calling the this.componenetDidMount in this function allows the bomb and treasure to be placed back on the board randomly.
     resetButton = () =>{
         this.setState({
             board: ["?","?","?","?","?","?","?","?","?"],
             bomb: null,
             treasure: null,
             counter: 4

     })
        this.componentDidMount()
     }

  render() {
      let square = this.state.board.map((value, index) => {
          return(
              <Square
              handleLocation= { this.handleLocation}
              index = { index }
              value = { value }
              tree = {this.state.tree}
              key={index}
               />
          )
      })
    return (
      <div id="theBoard">
        {square}
        <Counter
        counter={this.state.counter} />
        <Reset
            reset={this.resetButton} />
      </div>
    );
  }
}

export default Board;
