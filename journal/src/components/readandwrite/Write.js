import React, {useEffect} from 'react';

const Write = ({writeProp, setWriteText}) =>
{
    return (
        <textarea className="Write" value={writeProp} onChange={(e)=>{setWriteText(e.target.value)}}>
        </textarea>
    );
}

export default Write;