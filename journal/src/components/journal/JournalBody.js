import React from 'react';
import Entry from './Entry';

function JournalBody({listofentries})
{
    
    return (
        <div className="JournalBody">
            {listofentries.map((item)=><Entry date={item.date}/>)}
        </div>
    );
}

export default JournalBody;