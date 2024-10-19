import React, { Component } from 'react'
import CompD from './CompD'

class CompB extends Component {
  render() {
    return (
      <div>
        Component B
        <CompD/>
      </div>
    )
  }
}

export default CompB