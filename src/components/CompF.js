import React, { Component } from 'react'
import { UserComsumer } from './UserContex'

class CompF extends Component {
  render() {
    return (
        <UserComsumer>
            {
                (userName)=>{
                    return <div>Hello, {userName}</div>
                }
            }
        </UserComsumer>
    )
  }
}

export default CompF