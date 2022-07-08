import React from 'react';
import Refresh from "./Refresh";
import {useCallback} from "react";
import Note from "./Note";

const NoteList = ({noteList, setNoteList}) => {



    return (
        <div>
            <Refresh setNoteList={setNoteList}/>

            <div className='note-list'>
                {noteList.map((item, index) => {
                    return (
                        <Note key={Date.now() + index} setNoteList={setNoteList} item={item}/>
                    )
                })}
            </div>
        </div>
    );
};

export default NoteList;