import React from "react";

function child({ parentToChild }) {
  return <div> {parentToChild}</div>;
}

export default child;

// import React, { Component } from "react";

// class child extends Component {
//   onTrigger = () => {
//     this.props.parentCallback("Welcome to react");
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.onTrigger}>Click me</button>
//       </div>
//     );
//   }
// }

// export default child;
