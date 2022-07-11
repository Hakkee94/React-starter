import React, {useState} from 'react';
import './style.css'
import MessageList from "./MessageList/MessageList";
import InputMessage from "./InputMessage";
import { v4 as uuidv4 } from 'uuid';

const Chat = () => {
    const userId = uuidv4()

    return (
        <div className='annonymous-chat'>
            <h1>Anonymous Chat</h1>
            <MessageList userId={userId}/>
            <InputMessage userId={userId}/>
        </div>
    );
};

export default Chat;