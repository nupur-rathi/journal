import React from 'react';
import { useSelector} from 'react-redux';
import Entry from './Entry';

function JournalBody()
{
    const listOfEntries = useSelector(state => state.listOfEntries);
    
    return (
        <div className="JournalBody">
            {listOfEntries.map((item)=><Entry key={item.id} date={item.date} entry={item.text} id={item.id}/>)}
        </div>
    );
}

export default JournalBody;