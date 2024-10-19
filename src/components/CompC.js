import React, { Component } from 'react'
import CompE from './CompE'

class CompC extends Component {
  render() {
    return (
      <div>
        Component C
        <CompE/>
      </div>
    )
  }
}

export default CompC