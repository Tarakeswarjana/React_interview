// import React from "react";

// class Testingcomp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   shouldComponentUpdate() {
//     console.log(this.state.count);
//     return false;
//   }

//   render() {
//     return (
//       <>
//         <h1>hellow</h1>
//         <p>{this.state.count}</p>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           up
//         </button>
//       </>
//     );
//   }
// }
// export default Testingcomp;

import React from "react";
class Testingcomp extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  rendar() {
    return (
      <>
        <h3>hhhhh</h3>
      </>
    );
  }
}
export default Testingcomp;
