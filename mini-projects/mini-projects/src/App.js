import './App.css';
import PhotoManager from "./Components/PhotoManager/PhotoManager";
import InputTimeForm from "./Components/WorldClock/InputTimeForm";
import CapitalTimeList from "./Components/WorldClock/CapitalTimeList";
import {useState} from "react";

function App() {
    const [form, setForm] = useState({name: '', timeZone: ''})
    const [list, setList] = useState([])



    return (
        <div className="App">
            {/*<PhotoManager/>*/}
            <InputTimeForm form={form} setForm={setForm} list={list} setList={setList} name='Название' timeZone='Временная зона'/>
            <CapitalTimeList list={list} setList={setList} setForm={setForm} form={form}/>
        </div>
    );
}

export default App;
