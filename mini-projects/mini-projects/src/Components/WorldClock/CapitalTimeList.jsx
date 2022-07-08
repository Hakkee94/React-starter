import React from 'react';

const CapitalTimeList = ({list, setList}) => {
    let now = new Date()
    let hours = Number.parseInt(now.getHours() - 3) // .getTimezoneOffset()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()


    return (
        <div className='capital-time-list'>
            {list.map((item, index) => {
                return (
                    <div key={index + 1} className='time-zone-list'>
                        <span>{item.name}</span>
                        {/*<span>{item.timeZone}</span>*/}
                        <div>
                            <span>{hours + Number(item.timeZone) + ':'}</span>
                            <span>{minutes + ':'}</span>
                            <span>{seconds}</span>
                            <span
                                className='delete-button'
                                onClick={() => {
                                setList(prev => {
                                    return prev.filter((item, key) => key !== index)
                                })
                            }}>X</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default CapitalTimeList;