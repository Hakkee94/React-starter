import './App.css';
import WorldClock from './Components/WorldClock/Index'
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

window.data = {id: 55, city: {zip: 333333, name: "Moscow"}}

function App() {
  const [state, setState] = useState(true)

    return (
        <div className="App">
        <input onChange={e => {
          window.data = {id: 55, city: {zip: e.target.value, name: "Moscow"}}
          console.log("app data", window.data)
        }}/>
            {/*<PhotoManager/>*/}
          <button onClick={() => setState(!state)}>Click</button>
          {state && <WorldClock location={window.data}/>}
          {uuidv4()}
        </div>
    );
}

export default App;
