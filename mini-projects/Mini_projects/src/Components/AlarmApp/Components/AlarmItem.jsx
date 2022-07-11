import React, {useCallback, useEffect, useState} from 'react';
import moment from 'moment'

const sound = new Audio('https://html.com/wp-content/uploads/flamingos.mp3')


const AlarmItem = ({time, globalTime, setSwitchTurn, isOn}) => {
    const [audioPlay, setAudioPlay] = useState(false)
    console.log(time, globalTime, moment.unix(globalTime).format('HH:mm'))

    const currentDate = moment.unix(globalTime).format('HH:mm')

    const beep = useCallback(() => {
        sound.play()
        setAudioPlay(true)
    })

    useEffect(() => {
        if (isOn && currentDate === time) {
            beep()
        }
    }, [time, currentDate])

    return (
        <div className='alarm-item'>
            <span>{time}</span>
            <input type='checkbox' onChange={setSwitchTurn} checked={isOn}/>
            {audioPlay && <button onClick={() => {
                sound.pause()
                setAudioPlay(false)
            }}>Dismiss</button>}
            {/*{audioPlay && <audio><source type='audio/mpeg' src='https://html.com/wp-content/uploads/flamingos.mp3'/></audio>}*/}
        </div>
    );
};

export default AlarmItem;