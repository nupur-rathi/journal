import React from 'react';
import Entry from './Entry';

function JournalBody({setReadText, setWriteText, listOfEntries})
{
    
    return (
        <div className="JournalBody">
            {listOfEntries.map((item)=><Entry date={item.date} entry={item.text} id={item.id} setReadText={setReadText} setWriteText={setWriteText}/>)}
        </div>
    );
}

export default JournalBody;