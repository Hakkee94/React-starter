import React from 'react';
import {useCallback} from "react";

const Refresh = ({setNoteList}) => {

    const handleGetNotes = useCallback(() => {
        var raw = "";

        var requestOptions = {
            method: 'GET',
        };

        fetch("http://localhost:7777/notes", requestOptions)
            .then(response => response.json())
            .then(result => setNoteList(result))
            .catch(error => console.log('error', error));
    })
    return (
        <div>
            <header>
                <h2>Notes</h2>
                <button onClick={handleGetNotes}>Refresh</button>
            </header>
        </div>
    );
};

export default Refresh;