import React from 'react';

const AlarmInputForm = ({setAlarm, form, setForm}) => {

    const addNewAlarm = () => {
        setAlarm(alarmList => {
            if (alarmList.find(alarm => alarm.time === form.time)) {
                return alarmList
            }
            return [...alarmList, form]
        })
    }


    return (
        <div className='alarm-input-form'>
            <div>
                <input type="time" onChange={event => setForm(prev => ({...prev, time: event.target.value}))}
                       value={form.time}
                />
            </div>

            <div>
                <button onClick={addNewAlarm}>+</button>
            </div>
        </div>
    );
};

export default AlarmInputForm;