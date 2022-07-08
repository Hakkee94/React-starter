import React, {useState} from 'react';
import NoteList from "./NoteList";
import InputNote from "./InputNote";



const Crud = () => {
    const [editedNote, setEditNote] = useState('')
    const [noteList, setNoteList] = useState([])



    return (
        <div>
            <NoteList noteList={noteList} setNoteList={setNoteList}/>
            <InputNote setNoteList={setNoteList} editedNote={editedNote} setEditNote={setEditNote}/>
        </div>
    );
};

export default Crud