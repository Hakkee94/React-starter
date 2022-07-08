import {useEffect, useState} from "react";
import InputTimeForm from "./InputTimeForm";
import CapitalTimeList from "./CapitalTimeList";

const User = {
  name: "David",
  getName(modify){
    return this.name + modify
  }
}

const WorldClock = () => {
  const [form, setForm] = useState({name: '', timeZone: ''})
  const [list, setList] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    setUser(User.getName(" common right reserved"))
  }, []) // 1 ver.

  console.log(performance.now())

  return (
    <div className="App">
      <InputTimeForm form={form} setForm={setForm} list={list} setList={setList} name='Название' timeZone='Временная зона'/>
      <CapitalTimeList list={list} setList={setList} setForm={setForm} form={form}/>
      <div style={{position: "absolute", bottom: "30px", fontSize: "14px"}}>{user}</div>
    </div>
  )
}


export default WorldClock