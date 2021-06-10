import React, {useEffect} from 'react';
import add from "./add";

function Entry({date})
{
    return (
        <div className="Entry" onClick={add}>{date}</div>
    );
}

export default Entry;