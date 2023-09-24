import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         textarea:'',
         phno:''
      }
    }
    updatevalue=(event)=>{
        this.setState({username:event.target.value})
    }
  render() {
    return (
      <div><label>Name</label>
      <input type='text' value={this.state.username} onChange={this.updatevalue}></input>
        </div>
    )
  }
}
