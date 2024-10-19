import React, { Component } from 'react'
// import RegularComp from './RegularComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Aditya'
      }
    }

    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState({
    //             name:'Aditya'
    //         })
    //     },2000)
    // }

  render() {
    console.log(`Parent Component Render`);
    return (
      <div>
        ParentComp

        <MemoComp name={this.state.name}/>

        {/* <RegularComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}

      </div>
    )
  }
}

export default ParentComp