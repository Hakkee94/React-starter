import {useEffect, useState} from "react";
import InputTimeForm from "./InputTimeForm";
import CapitalTimeList from "./CapitalTimeList";

const User = {
  name: "David",
  getName(modify){
    return this.name + modify
  }
}


console.log('1 outside component') // willMount

const WorldClock = ({location}) => {
  const [form, setForm] = useState({name: '', timeZone: ''})
  const [list, setList] = useState([])
  const [user, setUser] = useState([])
  console.log(location)
  useEffect(() => {
    console.log('4 useEffect DidMount') // DidMount

    return () => {
      console.log('-- useEffect WillUnmount') // WillUnmount
    }
  }, []) // 1 ver.

  useEffect(() => {
    console.log('useEffect DidUpdate') // DidUpdate
  }, [list.length]) // 1 ver.

  console.log('2 render') // will Render

  return (
    <div className="App">
      <InputTimeForm form={form} setForm={setForm} list={list} setList={setList} name='Название' timeZone='Временная зона'/>
      <CapitalTimeList list={list} setList={setList} setForm={setForm} form={form}/>
      <div style={{position: "absolute", bottom: "30px", fontSize: "14px"}}>{user}</div>
    </div>
  )
}


export default WorldClock