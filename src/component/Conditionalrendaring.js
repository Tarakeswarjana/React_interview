import React, { Component } from 'react'

 class Conditionalrendaring extends Component {
    constructor(props){
        super(props);
        this.state={
            check:false 
        }

    }
    render() {
        //..........if else...............................
        // if(this.state.check){
        // return (
        //   <div className="App">
        //    <h2>app.js</h2>
        //    </div>)}
        //   else {
        //   return (
        //     <div className="App">
        //     <h2>app.js...is good</h2>
        //     </div>)
        //   } 


//.............................using element variable............
    //    let massage
    //    if(this.state.check){
    //       massage=<div>hellow app.js</div>
    //    } else
    //    {
    //     massage=<div>hii app.js</div>
    //    }
    //     return(
    //         <div className="App">
    //      {massage} 
    //       </div>
    //     )
    //   }

    
//...............using ternary oparetor................

    // return(
    //     <div className="App">
    //      {this.state.check ?
    //     <div>hellow app.js</div> :
    //     <div>hii app.js</div>}
    //         </div>
    // )

//........shortCircuit oparetor....................
     return this.state.check ?(<div>hellow app.js</div>):(<div>hii app.js</div>)

}
 }

export default Conditionalrendaring