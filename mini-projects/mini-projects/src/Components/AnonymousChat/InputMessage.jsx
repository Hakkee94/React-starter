import React, {useCallback, useState} from 'react';


const InputMessage = ({userId}) => {
    const [letter, setLetter] = useState('')

    const addMessage = useCallback((item) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": 0,
            "userId": userId,
            "content": item
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:7777/messages", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    })

    return (
        <div className='input-message'>
            <input onChange={event => setLetter(event.target.value)}/>
            <button onClick={() => addMessage(letter)}>></button>
        </div>
    );
};

export default InputMessage;