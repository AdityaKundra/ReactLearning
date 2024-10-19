import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIN: false
      }
    }
  render() {

    // let message

    // this.state.isLoggedIN ? message = 'Welocme, Adi!' :  message = 'Welocme, User!'

    // if(this.state.isLoggedIN){
    //     return <h1>Welocme, Adi!</h1>
    // }else{
    //     return <h1>Welocme, User!</h1>
    // }
    // return(
    //     <div>
    //         <h1>{message}</h1>
    //     </div>
    // )

    return this.state.isLoggedIN ? (
            <h1>Welocme, Adi!</h1> ):
            (<h1>Welocme, User!</h1>)
  }
}

export default UserGreeting