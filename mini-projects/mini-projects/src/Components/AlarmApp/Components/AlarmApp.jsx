import React, {useEffect, useState} from 'react';
import '../styles.css'
import AlarmInputForm from "./AlarmInputForm";
import AlarmList from "./AlarmList";

let timer

const AlarmApp = () => {
    const [alarm, setAlarm] = useState([])
    const [form, setForm] = useState({date: '', time: '', isOn: true})
    const [time, setTime] = useState(Math.floor(Date.now() / 1000))



    useEffect(() => {
        timer = setInterval(() => {
            setTime(Math.floor(Date.now() / 1000))
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    })




    return (
        <div className='alarm-add'>
            <div className='title'>
                <span>Будильник</span>
            </div>

            <AlarmInputForm alarm={alarm} setAlarm={setAlarm} form={form} setForm={setForm}/>
            <AlarmList alarm={alarm} setAlarm={setAlarm} globalTime={time}/>

        </div>
    );
};

export default AlarmApp;