import React from 'react'

function child({childToParent}) {
  const data ="This is data from Parent Component to the Child Component.";
  return (
    <div> <button onClick={()=>childToParent(data)}>child click</button></div>
  )
}

export default child