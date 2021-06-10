import React, {useState} from 'react';
import AddButton from "./AddButton";
import JournalBody from "./JournalBody";

const Journal = ({listOfEntries, setListOfEntries, addEntry, setReadText, setWriteText}) => {
    
    return (
        <div className="Journal">
            <h1 className="Journalhead">JOURNAL</h1>
            <JournalBody setReadText={setReadText} setWriteText={setWriteText} listOfEntries={listOfEntries}/>
            <AddButton addEntry={addEntry}/>
        </div>
    )
}

export default Journal;