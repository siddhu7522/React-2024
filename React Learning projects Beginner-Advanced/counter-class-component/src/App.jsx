import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={counter:5}
    this.handleDecrement= this.handleDecrement.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
  }
  handleDecrement(){
    this.setState((prevState)=>{
      return {counter: prevState.counter-1}
      
    })
  }
  handleIncrement(){
    this.setState((prevState)=>{
      return {counter: prevState.counter+1}
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <span>{this.state.counter}</span>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}
