import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userId:"",
         title:"",
         body:""
      }
    }

    changeHandler = (el)=>{
        this.setState({[el.target.name]: el.target.value})
        // console.log(`${[el.target.name]}: ${el.target.value} `);
    }

    formSubmitHandler = (el)=>{
        el.preventDefault()
        console.log(this.state);

        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(`Error: ${err}`);
        })
    }

  render() {

    const {userId, title, body} = this.state

    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
            <div>
                <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="title" value={title} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="body" value={body} onChange={this.changeHandler}/>
            </div>            
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default PostForm