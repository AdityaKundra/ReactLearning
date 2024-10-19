import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
    }

    GreetParent=(childName)=>{
        alert(`${childName} mear bacha hai`)
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.GreetParent} />
        {/* <button onClick={()=>this.GreetParent()}>Greet!</button> */}
      </div>
    )
  }
}

export default ParentComponent