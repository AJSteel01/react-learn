import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//useState - used to update state

function App() {

  let [counter,setCounter] = useState(0)
  
  // let counter = 0;
  const addCounter = () =>{
    if(counter<20){
      setCounter(counter+1);
    }else{
      alert("Counter value cannot go above 20");
    }
  }

  const removeCounter =()=>{
    if(counter<=0){
      alert("Counter value cannot go below 0");
    }else{
      setCounter(counter-1);
    }
  }

  

  return (
    <>
      <h1>Abhigyan Jha | React Counter</h1>
      <h2>Counter Value :{counter}</h2>

      <button
        onClick={addCounter}
      
      >Increase Counter</button>
      <br/>
      <br/>
      <button onClick={removeCounter}>Decrease Counter</button>
      {/* <footer>Revising hooks using this small counter app.</footer> */}
    </>
  )
}

export default App
