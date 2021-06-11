import React from 'react';
import Read from './Read';
import SaveButton from './SaveButton';
import Write from './Write';

const ReadAndWrite = ({readProp, writeProp, setWriteText, editEntry}) =>
{
    return (
        <div className="ReadAndWrite">
            <label>Hello</label>
            <Read readProp={readProp}/>
            <label>Write</label>
            <Write writeProp={writeProp} setWriteText={setWriteText}/>
            <SaveButton writeProp={writeProp} editEntry={editEntry}/>
        </div>
    );
}

export default ReadAndWrite;