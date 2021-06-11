import React from 'react';
import Read from './Read';
import SaveButton from './SaveButton';
import Write from './Write';

const ReadAndWrite = () =>
{

    return (
        <div className="ReadAndWrite">
            <label>Hello</label>
            <Read />
            <label>Write</label>
            <Write />
            <SaveButton />
        </div>
    );
}

export default ReadAndWrite;