import React, { Component } from 'react'

class RefsDemo extends Component {
    
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      this.cbRef = null
      this.setCbRef = (elm)=>{
        this.cbRef = elm
      } 
    }

    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef);
        if(this.cbRef){
            this.cbRef.focus()
        }

    }

    clickHandler = (e)=>{
        e.preventDefault()
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <form>
            <div>
                <label>Name</label>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click Here</button>
            </div>
        </form>        
      </div>
    )
  }
}

export default RefsDemo