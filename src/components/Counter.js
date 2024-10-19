import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super()
        this.state={
            count:0
        }
    }

    incrementCount(){
        this.setState({
            count: this.state.count + 1
        },()=>{console.log(this.state.count)})
    }

    decrementCount(){
      if(this.state.count !==  0){
        this.setState({
            count: this.state.count - 1
        },()=>{console.log(this.state.count)})
      }
  }

  render() {
    return (
      <div>
        <p>Count - {this.state.count}</p>
        <button onClick={()=>this.incrementCount()}>Increment</button>
        <button onClick={()=>this.decrementCount()}>Decrement</button>
      </div>
    )
  }
}

export default Counter