import './App.css';
import WorldClock from "./Components/WorldClock/WorldClock";
import AlarmApp from "./Components/AlarmApp/Components/AlarmApp";
import Chat from "./Components/AnonymousChat";
import Crud from "./Components/Crud/Crud";

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
            {/*<WorldClock/>*/}
            {/*<AlarmApp/>*/}
            {/*<Chat/>*/}
            <Crud/>
        </div>
    );
}

export default App;
