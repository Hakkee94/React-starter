import React, {useCallback} from 'react';

const InputNote = ({setNoteList, editedNote, setEditNote}) => {

    const handleAddNote = useCallback((newNote) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "content": newNote
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:7777/notes", requestOptions)
            .then(response => response.json())
            .then(result => setNoteList(prev => [...prev, result]))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div>
            <div className='title'>
                <span>New note</span>
            </div>

            <div className='input-form'>
                <div className='add-note-container'>
                    <textarea onChange={(event) => setEditNote(event.target.value)}></textarea>
                    <button onClick={() => handleAddNote(editedNote)}>></button>
                </div>
            </div>
        </div>
    );
};

export default InputNote;