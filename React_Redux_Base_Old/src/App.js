import './App.css';
import Likes from "./Likes";
import List from "./List";


function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
              <Likes/>
          </div>
        </div>
        <List/>
      </div>
    </div>
  );
}



export default App;
