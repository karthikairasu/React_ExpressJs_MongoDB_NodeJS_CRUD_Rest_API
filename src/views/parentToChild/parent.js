import React, { useState } from "react";
import Child from "./child";

function parent() {
  const [data, setData] = useState("");

  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  };
  return (
    <div>
      <Child childToParent={data} />

      <button onClick={() => parentToChild()}>Parent click</button>
    </div>
  );
}

export default parent;

// import React, { Component } from "react";
// import Child from "../parentToChild/child";

// export class parent extends Component {
//   state = {
//     msg: "",
//   };
//   parentToChild = (childData) => {
//     this.setState({ msg: childData });
//   };
//   render() {
//     const { msg } = this.state;
//     return (
//       <div>
//         <h1> {msg}</h1>
//         <Child parentCallback={this.parentToChild} />
//       </div>
//     );
//   }
// }

// export default parent;
