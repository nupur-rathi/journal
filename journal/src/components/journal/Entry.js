import React, {useContext} from 'react';
import { JournalContext } from '../../context';

function Entry({date, entry, id})
{
    const {readFunc, writeFunc} = useContext(JournalContext);

    return (
        <div className="Entry" onClick={()=>{readFunc(date, entry, id); writeFunc(entry)}}>{date}</div>
    );
}

export default Entry;