import React from 'react';
import './style.css'

const InputTimeForm = ({name, timeZone, form, setForm, setList}) => {

    const addNewZone = () => {
        setList(prev => [...prev, form])
    }

    return (
        <div className='input-time-form'>
            <div className='input-item'>
                <span>{name}</span>
                <input onChange={event => setForm(prev => ({...prev, name: event.target.value}))}/>
            </div>

            <div className='input-item'>
                <span>{timeZone}</span>
                <input onChange={event => setForm(prev => ({...prev, timeZone: event.target.value}))}/>
            </div>

            <div className='add-btn'>
                <button onClick={addNewZone}>Добавить</button>
            </div>
        </div>
    );
};

export default InputTimeForm;