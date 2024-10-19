import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Aditya',
      }
      console.log(`LifeCycleA Constructor`);
    }

    static getDerivedStateFromProps(props,state){
        console.log(`LifeCycleA getDerivedStateFromProps`);
        return null
    }

    componentDidMount(){
        console.log(`LifeCycleA ComponentDidMount`);
    }

    shouldComponentUpdate(){
        console.log(`LifeCycleA ShouldComponentUpdate`);
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log(`LifeCycleA getSnapshotBeforeUpdate`);
        return null
    }

    componentDidUpdate(){
        console.log(`LifeCycleA componentDidUpdate`);
    }

    changeState = ()=>{
        this.setState({
            name:'Aditya Kundra'
        })
    }
  render() {
    console.log(`LifeCycleA Render`)
    return (
        <div>
            <LifeCycleB/>
            <div>LifeCycleA</div>
            <button type='button' onClick={this.changeState}>Change State</button>
        </div>
    )
  }
}

export default LifeCycleA