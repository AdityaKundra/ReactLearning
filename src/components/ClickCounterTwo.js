import React, { Component } from 'react'

class ClickCounterTwo extends Component {

  render() {

    const {count,incrementCount} = this.props

    return (
        <button onClick={incrementCount()}>Click {count} Times</button>
    )
  }
}

export default ClickCounterTwo