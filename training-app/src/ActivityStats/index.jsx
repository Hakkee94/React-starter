import React from 'react';

const ActivityStats = ({activity, setActivity, setForm, setEdit}) => {


    return (
        <div className='table-position'>
            <table className='activity-stats'>
                <thead>
                <tr>
                    <th>Дата (ДД.ММ.ГГ)</th>
                    <th>Пройдено км</th>
                    <th>Действия</th>
                </tr>
                </thead>

                <tbody>
                {activity.map((item, index) => {
                    return (
                        <tr key={index + item.date}>
                            <td>{item.date}</td>
                            <td>{item.travelled}</td>
                            <td><div
                             onClick={() => {
                                 setForm(item)
                                 setEdit(index)
                             }}
                            >E</div>
                                <div onClick={() => {
                                    setActivity(prev => {
                                        return prev.filter((item, key) => key !== index)
                                    })
                                }}>X</div>
                            </td>
                        </tr>
                    )
                })}
                </tbody>

            </table>
        </div>
    );
};

export default ActivityStats;