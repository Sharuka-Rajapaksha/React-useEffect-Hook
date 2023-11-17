import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
 
  const increment = () => {
    setCount(count + 1)
   // console.log("Value increased by one")
    //Check this: console.log("Value increased by one"+ `Now value is: ${count}`)
  }

  const decrement = () => {
    setCount(count - 1)
    //console.log("Value decrease by one")
  }

useEffect( () => {
  //Mention what is required to do as side effect

  console.log(`New count is: ${count}`)
},[count] //Dependency array - Define what is the section that need to be focus to execute Dependency array 
//In the useEffect it execute anyway at least one time even without assigning any value to Dependency array
)

  return (
    <div>
      
      <div>
        <h1>Welcome to the React Use Effect</h1>
      </div>

      <div>
        
        <h1>Count:{count}</h1>

        <button onClick={increment}> + </button> 
        <br></br>
        <button onClick={decrement}> - </button>

      </div>

    

      

    </div>
  );
}

export default App;
