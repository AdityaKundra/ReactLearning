import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         post:[],
         errorMsg:""
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        // axios.get('https://jsonplaceholder.typicode.com/pos')
        .then(res=>{
            // console.log(res.data);
            this.setState({
                post:res.data
            })
        })
        .catch(err=>{
            console.log(err);
            this.setState({errorMsg:'Error Reteriving Data'})
        })
    }

  render() {
    
      const {post, errorMsg} = this.state
    
      return (
      <div>
        List of Posts
        {
            post.length ?
            post.map((el)=>{return <div key={el.id}>{el.title}</div>}) : <div>{errorMsg}</div>
        }
      </div>
    )
  }
}

export default PostList