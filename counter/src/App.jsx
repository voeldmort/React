import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const counterChange = function (val) {
    if ((counter == 20 && val == +1) || (counter == 0 && val == -1) ) {
      console.log("Limit reached");
    }
    else {
      setCounter(counter + val); 
    }

  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value : { counter }</h2>
      <button onClick={()=>counterChange(1)}>Add value</button>
      <br />
      <button onClick={()=>counterChange(-1)} >remove value</button>
      
    </>
  )
}

export default App
