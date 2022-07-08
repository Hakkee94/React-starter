import React from 'react';

const MyMessage = ({message}) => {
    return (
        <div className='my-message'>
            <h3>{message.content}</h3>
        </div>
    );
};

export default MyMessage;