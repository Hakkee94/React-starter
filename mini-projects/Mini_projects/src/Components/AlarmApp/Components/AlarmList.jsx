import React from 'react';
import AlarmItem from "./AlarmItem";

const AlarmList = ({alarm, globalTime, setAlarm}) => {
    return (
        <div className='alarm-list'>
            {alarm.map((item, index) => {
                const setSwitchTurn = () => {
                    setAlarm((prev) => prev.map((i) => {
                        if (i.time === item.time) {
                            return {...i, isOn : !item.isOn}
                        }
                        return i
                    }))
                }
                return (
                    <AlarmItem key={index + item.date} time={item.time} globalTime={globalTime} setSwitchTurn={setSwitchTurn} isOn={item.isOn}/>
                )
            })}
        </div>
    );
};

export default AlarmList;