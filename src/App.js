
import './App.css';
import {react, useState} from 'react'
import Change from './Change';
function App() {
// const [count, setCount]=useState(1);
// const Increament=()=>{
//   setCount(count+1)
// }
  return (
    <div className="App">
     {/* <p>{count}</p>
      <button onClick={Increament}>Click to Increase the value</button> */}
      <Change/>
    </div>

  );
}

export default App;
