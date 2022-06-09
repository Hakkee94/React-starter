import './App.css';
import WorldClock from "./Components/WorldClock/WorldClock";
import InputTimeForm from "./Components/WorldClock/InputTimeForm";

function App() {




    return (
        <div className="App">
            {/*<PhotoManager/>*/}
            <WorldClock inputTimeForm={InputTimeForm} />
        </div>
    );
}

export default App;
