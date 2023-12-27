import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const handleClickAdd = ()=>{
        setCount(count+1);
        console.log(count);
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handleClickAdd}>Add</button>
    </div>
  )
}

export default Counter