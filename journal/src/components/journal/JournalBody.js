import React, {useContext} from 'react';
import { JournalContext } from '../../context';
import Entry from './Entry';

function JournalBody()
{
    const {listOfEntries} = useContext(JournalContext);
    
    return (
        <div className="JournalBody">
            {listOfEntries.map((item)=><Entry date={item.date} entry={item.text} id={item.id}/>)}
        </div>
    );
}

export default JournalBody;