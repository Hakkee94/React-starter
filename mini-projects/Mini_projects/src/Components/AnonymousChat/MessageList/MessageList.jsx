import React, {useEffect, useState} from 'react';
import MyMessage from "./MyMessage";
import ForeignMessage from "./ForeignMessage";

let id = null

const MessageList = ({userId}) => {
    const [list, setList] = useState([])
    useEffect(() => {
        if (id) {
            clearInterval(id)
        }
        id = setInterval(() => {
            fetch('http://localhost:7777/messages?from=' + list.at(-1)?.id)
                .then((response) => response.json())
                .then(data => setList(prev => [...prev, ...data]))
        }, 3000)
        return () => {
            clearInterval(id)
        }
    }, [list.at(-1)?.id])
    return (
        <div className='message-list'>
            {list.map((message) => {
                if (message.userId === userId) {
                    return <MyMessage message={message}/>
                } else {
                    return <ForeignMessage message={message}/>
                }
            })}
        </div>
    );
};

export default MessageList;