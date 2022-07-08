import './App.css';
import WorldClock from "./Components/WorldClock/WorldClock";
import AlarmApp from "./Components/AlarmApp/Components/AlarmApp";
import Chat from "./Components/AnonymousChat";
import PhotoManager from './Components/PhotoManager/PhotoManager'
import Crud from "./Components/Crud/Crud";
import {
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {
    const activeStyle = {backgroundColor: "green"}

    return (
        <div className="App">
          <NavLink to="/some" style={({ isActive }) => isActive ? {backgroundColor: "green"} : undefined }>Some</NavLink>
          <NavLink to="/photo-manager" style={({ isActive }) => isActive ? {backgroundColor: "green"} : undefined } >PhotoManager</NavLink>
          <NavLink to="/clock" style={({ isActive }) => isActive ? activeStyle : undefined } >WorldClock</NavLink>
          <NavLink to="/alarm" style={({ isActive }) => isActive ? activeStyle : undefined } >AlarmApp</NavLink>
          <NavLink to="/chat" style={({ isActive }) => isActive ? activeStyle : undefined }>Chat</NavLink>
          <NavLink to="/crud" style={({ isActive }) => isActive ? activeStyle : undefined }>Crud</NavLink>

          <Routes>
            <Route path="/some" element={<>List</>}/>

            <Route path="/photo-manager" element={<PhotoManager/>}/>
            <Route path="/clock" element={<WorldClock/>}/>
            <Route path="/alarm" element={<AlarmApp/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/crud" element={<Crud/>}/>
          </Routes>
        </div>
    );
}

export default App;
