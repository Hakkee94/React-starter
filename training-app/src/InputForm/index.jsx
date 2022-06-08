import React from 'react';
import './style.css'

const InputForm = ({form, setForm, setActivity, edit}) => {

    const addNewActivity = () => {
        console.log(edit)
        if (edit !== null) {
            setActivity(prev => prev.map((item, index) => {
                if (index === edit) {
                    return form
                }   else {
                    return item
                }
            }))
        }   else {
            setActivity(prev => [...prev, form])
        }
        console.log(form)
        setForm({date: '', travelled: ''})
    }

    return (

        <div className='input-form'>

            <label>
                <span>Дата (ДД.ММ.ГГ)</span>
                <input type='date'
                       onChange={event => setForm(prev => ({...prev, date: event.target.value}))}
                       value={form.date}
                />
            </label>

            <label>
                <span>Пройдено км</span>
                <input type='number'
                       onChange={event => setForm(prev => ({...prev, travelled: event.target.value}))}
                       value={form.travelled}
                />
            </label>

            <button onClick={addNewActivity}>OK</button>
        </div>
    );

};


export default InputForm;