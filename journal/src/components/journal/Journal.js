import React from 'react';
import {useDispatch } from 'react-redux';
import JournalBody from "./JournalBody";
import {addentry} from "../../actions";

const Journal = () => {
    
    const dispatch = useDispatch();

    return (
        <div className="Journal">
            <h1 className="Journalhead">JOURNAL</h1>
            <JournalBody />
            <button className="AddButton" onClick={()=>{dispatch(addentry())}}>Add Entry</button>
        </div>
    )
}

export default Journal;