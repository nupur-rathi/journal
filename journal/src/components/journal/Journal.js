import React, {useContext} from 'react';
import { JournalContext } from '../../context';
import JournalBody from "./JournalBody";

const Journal = () => {
    
    const {addEntry} = useContext(JournalContext);

    return (
        <div className="Journal">
            <h1 className="Journalhead">JOURNAL</h1>
            <JournalBody />
            <button className="AddButton" onClick={addEntry}>Add Entry</button>
        </div>
    )
}

export default Journal;