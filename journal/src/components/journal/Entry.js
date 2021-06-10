import React from 'react';

function Entry({date, entry, id, setReadText, setWriteText})
{
    return (
        <div className="Entry" onClick={()=>{setReadText(date, entry, id); setWriteText(entry)}}>{date}</div>
    );
}

export default Entry;