import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           userName:'',
           comments:'',
           topic:'',
        }
      }

      handelUserName = (e)=>{
        this.setState({
            userName: e.target.value
        })
      }

      handelComments = (e)=>{
        this.setState({
            comments: e.target.value
        })
      }

      handelTopic = (e)=>{
        this.setState({
            topic: e.target.value
        })
      }

      handelFormSubmit = (e)=>{
        e.preventDefault()
        alert(`${this.state.userName}, ${this.state.comments}, ${this.state.topic}`)
      }

    render() {
    return (
      <div>
        <h3>Form Handling</h3>
        <form onSubmit={this.handelFormSubmit}>
            <div>
                <label>UserName</label>
                <input type="text" value={this.state.userName} onChange={this.handelUserName} />
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handelComments} ></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handelTopic} >
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">VueJS</option>
                </select>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default Form