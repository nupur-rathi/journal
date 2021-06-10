import React, {useState} from 'react';
import AddButton from "./AddButton";
import JournalBody from "./JournalBody";

const Journal = () => {

    const [listOfEntries, setListOfEntries] = useState([]);

    const addEntry = () => {
        const entry = {
            date: (new Date()).toLocaleString()
        };
        let listitems = [...listOfEntries, entry];
        setListOfEntries(listitems);
    }

    
    return (
        <div className="Journal">
            <h1 className="Journalhead">JOURNAL</h1>
            <JournalBody listofentries={listOfEntries}/>
            <AddButton addEntry={addEntry}/>
        </div>
    )
}

export default Journal;