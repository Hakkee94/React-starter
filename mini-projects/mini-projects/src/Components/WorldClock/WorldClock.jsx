import React from 'react';
import CapitalTimeList from "./CapitalTimeList";
import {useState} from "@types/react";
import InputTimeForm from "./InputTimeForm";

const WorldClock = () => {
    const [form, setForm] = useState({name: '', timeZone: ''})
    const [list, setList] = useState([])

    return (
        <div>
            <InputTimeForm form={form} setForm={setForm} list={list} setList={setList} name='Название' timeZone='Временная зона'/>
            <CapitalTimeList list={list} setList={setList} setForm={setForm} form={form}/>
        </div>
    );
};

export default WorldClock;