import React, { useState } from 'react';
import Child from './child';

function parent() {
    const[data, setData] = useState('');
    
    const childToParent = (childdata) =>{
        setData(childdata)
    }
  return (
    <div>
      {data}
        <Child childToParent={childToParent} />
    </div>
    
  )
}

export default parent