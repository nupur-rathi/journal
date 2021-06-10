import React from 'react';

const SaveButton = ({writeProp, editEntry}) =>
{
    return (
        <button className="SaveButton" onClick={()=>{editEntry(writeProp)}}>Save</button>
    );
}

export default SaveButton;