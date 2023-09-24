import React, { Component } from 'react'

 class Event_binding extends Component {
  
  
  namechange=()=>{
    this.setState({name:"rohit"})
  }
  render() {
    return (
      <div>
        <button onClick={this.namechange()}>click to chage name</button>
        <h2>welcome to react {this.state.rohit}</h2>
      </div>
    )
  }
}

export default Event_binding