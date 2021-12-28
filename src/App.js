
import './App.css';
import {react, useState} from 'react'
function App() {
const [count, setCount]=useState(1);
const Increament=()=>{
  setCount(count+1)
}
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={Increament}>Click to Increase the value</button>
    </div>
  );
}

export default App;
