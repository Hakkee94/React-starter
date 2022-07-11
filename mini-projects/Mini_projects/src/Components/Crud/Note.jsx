import React from 'react';
import {useCallback} from "react";

const Note = ({setNoteList, item}) => {

    const handleDeleteNote = useCallback((id) => {
        var requestOptions = {
            method: 'DELETE',
        };

        fetch("http://localhost:7777/notes/" + id, requestOptions)
            .then(() => setNoteList(prev => prev.filter(f => f.id !== id)))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className='added-note'>
            <div onClick={() => {
                handleDeleteNote(item.id)
            }} className='delete-btn'>X
            </div>
            <span>{item.id}</span>
            <span>{item.content}</span>
        </div>
    );
};

export default Note;